import { Scene, ShaderMaterial, Vector3 } from 'three'
import { BufferAttribute, BufferGeometry, Points, Vector2 } from 'three'
import { GeometryUtils } from '../geometryUtils'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import gsap from 'gsap'
import { font } from '../font/font'

export class Char {
	private isTweening = false
	private char = ''
	private material: ShaderMaterial
	private static totalVertices = Math.pow(2, 14)
	private particlesGeometry: BufferGeometry
	private tweenObj = {
		progress: 0,
	}
	private particles

	constructor(char: string, material: ShaderMaterial, scene: Scene) {
		this.char = char
		this.material = material

		this.particlesGeometry = new BufferGeometry()
		const randoms = new Float32Array(Char.totalVertices * 4)
		for (let i = 0; i < Char.totalVertices * 4; i += 4) {
			randoms[i] = Math.random() // x
			randoms[i + 1] = Math.random() // y
			randoms[i + 2] = Math.random() // z
			randoms[i + 3] = Math.random() // a
		}
		this.particlesGeometry.setAttribute(
			'aRandom',
			new BufferAttribute(randoms, 4)
		)

		this.update(char)

		this.particles = new Points(this.particlesGeometry, this.material)
		scene.add(this.particles)
	}

	get position() {
		return this.particles.position
	}

	getChar() {
		return this.char
	}

	private static getRandomPointsWithBoundingBox(char: string) {
		if (!font.font) return
		const geometry: BufferGeometry = new TextGeometry(char || '•', {
			font: font.font,
			size: 0.4,
			height: 0,
			curveSegments: 1,
			bevelEnabled: false,
		})
		geometry.center()
		if (!char) geometry.rotateZ(Math.random())

		const randomPointsInTextGeometry =
			GeometryUtils.randomPointsInBufferGeometry(geometry, Char.totalVertices)
		const boundingBox = geometry.boundingBox
			? { ...geometry.boundingBox }
			: null
		geometry.dispose()
		return {
			points: randomPointsInTextGeometry,
			boundingBox,
		}
	}

	private static getTargetPositions(pointsInGeometry: Vector3[]) {
		const targetPositions = new Float32Array(Char.totalVertices * 3) // Multiply by 3 because each position is composed of 3 values (x, y, z)
		for (let i = 0; i < targetPositions.length; i += 3) {
			const vertex = pointsInGeometry[i / 3]
			targetPositions[i] = vertex.x // x
			targetPositions[i + 1] = vertex.y // y
			targetPositions[i + 2] = vertex.z // z
		}
		return targetPositions
	}

	update(char = '') {
		this.char = char
		if (this.isTweening) return

		// Consolidate data for new char
		const pointsAndBBox = Char.getRandomPointsWithBoundingBox(char)
		if (!pointsAndBBox) return
		const { points, boundingBox } = pointsAndBBox
		const targetPositions = Char.getTargetPositions(points)
		const isFirstRender = !this.particlesGeometry.getAttribute('position')

		// Update bounding
		if (boundingBox) {
			this.material.uniforms.uBBoxMax.value = new Vector2(
				boundingBox.max.x,
				boundingBox.max.y
			)
			this.material.uniforms.uBBoxMin.value = new Vector2(
				boundingBox.min.x,
				boundingBox.min.y
			)
		}

		// Update target position
		if (isFirstRender) {
			this.particlesGeometry.setAttribute(
				'position',
				new BufferAttribute(targetPositions, 3)
			)
			this.material.uniforms.uOpacity.value = char ? 1 : 0
		} else {
			this.particlesGeometry.setAttribute(
				'aTargetPosition',
				new BufferAttribute(targetPositions, 3)
			)
			this.material.uniforms.uTargetOpacity.value = char !== '§' ? 1 : 0
		}

		if (!isFirstRender) {
			this.isTweening = true
			const tweenDuration = this.material.uniforms.uTweenDuration.value
			gsap.to(this.tweenObj, {
				progress: tweenDuration,
				duration: tweenDuration,
				overwrite: 'auto',
				onUpdate: () => {
					this.material.uniforms.uTweenProgress.value = this.tweenObj.progress
				},
				onComplete: () => {
					this.tweenObj.progress = 0
					this.material.uniforms.uTweenProgress.value = 0
					this.material.uniforms.uNoiseRotation.value =
						(this.material.uniforms.uNoiseRotation.value + 90) % 360
					this.particlesGeometry.setAttribute(
						'position',
						new BufferAttribute(targetPositions, 3)
					)
					this.material.uniforms.uOpacity.value =
						char === '§' ? 0 : this.material.uniforms.uTargetOpacity.value
					this.isTweening = false

					if (this.char !== char) {
						this.update(this.char)
					}
				},
			})
		}
	}
}

// getGui().then((gui) => {
// 	if (gui) {
// 		const gf = gui.addFolder('Char')
// 		gf.add(particles.position, 'x')
// 			.min(-5)
// 			.max(5)
// 			.step(0.0001)
// 			.name('Particles position X')
// 		gf.add(particles.position, 'y')
// 			.min(-5)
// 			.max(5)
// 			.step(0.0001)
// 			.name('Particles position Y')
// 		gf.add(particles.position, 'z')
// 			.min(-5)
// 			.max(5)
// 			.step(0.0001)
// 			.name('Particles position Z')
// 		gf.close()
// 	}
// })
