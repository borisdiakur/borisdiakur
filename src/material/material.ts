import { FrontSide, ShaderMaterial, Vector2 } from 'three'

import { getGui } from '../gui/gui'

import fragmentShader from '../shaders/text/text.frag'
import vertexShader from '../shaders/text/text.vert'
import { TickerEvents } from '../ticker/tickerEvents'
import { noiseRenderTarget } from '../noise/noise'
import { renderer } from '../renderer/renderer'
import { SizesEvents } from '../sizes/sizesEvents'
import { sizes } from '../sizes/sizes'
import { MouseEvents } from '../mouse/mouseEvents'
import { mouse } from '../mouse/mouse'
import { camera } from '../camera/camera'

const debugObject = {
	amplitude: 10,
	frequency: 3,
	size: 0.002,
	tweenDuration: 0.5,
}

function getSize() {
	return debugObject.size * renderer.getPixelRatio() * sizes.width
}

const materials: ShaderMaterial[] = []

export function getMaterial() {
	const material = new ShaderMaterial({
		fragmentShader,
		precision: 'lowp',
		side: FrontSide,
		depthTest: false,
		transparent: true,
		uniforms: {
			uAmplitude: { value: debugObject.amplitude },
			uAspectRatio: { value: sizes.width / sizes.height },
			uBBoxMin: { value: new Vector2(0, 0) },
			uBBoxMax: { value: new Vector2(1, 1) },
			uBBoxMaxX: { value: 1 },
			uBBoxMinY: { value: 0 },
			uBBoxMaxY: { value: 1 },
			uFrequency: { value: debugObject.frequency },
			uIsOrtho: { value: camera.isOrthographicCamera ? 1 : 0 },
			uMouseX: { value: 0 },
			uMouseY: { value: 0 },
			uNoiseRotation: { value: 0 },
			uNoiseTexture: { value: noiseRenderTarget.texture },
			uOpacity: { value: 0 },
			uSize: {
				value: getSize(),
			},
			uTargetOpacity: { value: 0 },
			uTime: { value: 0 },
			uTweenDuration: { value: debugObject.tweenDuration },
			uTweenProgress: { value: 0 },
		},
		vertexShader,
	})

	materials.push(material)
	return material
}

window.addEventListener(TickerEvents.tick, (ev) => {
	materials.forEach((material) => {
		material.uniforms.uTime.value = (ev as CustomEvent).detail.elapsedTime
	})
})

window.addEventListener(SizesEvents.resize, () => {
	materials.forEach((material) => {
		material.uniforms.uAspectRatio.value = sizes.width / sizes.height
		material.uniforms.uSize.value = getSize()
	})
})

window.addEventListener(MouseEvents.move, () => {
	materials.forEach((material) => {
		material.uniforms.uMouseX.value = mouse.clientX / sizes.width
		material.uniforms.uMouseY.value = mouse.clientY / sizes.height
	})
})

getGui().then((gui) => {
	if (gui) {
		const gf = gui.addFolder('Material')
		gf.add(debugObject, 'amplitude')
			.min(-100)
			.max(100)
			.step(0.01)
			.onChange(() => {
				materials.forEach((material) => {
					material.uniforms.uAmplitude.value = debugObject.amplitude
				})
			})
		gf.add(debugObject, 'frequency')
			.min(1)
			.max(10)
			.step(0.01)
			.onChange(() => {
				materials.forEach((material) => {
					material.uniforms.uFrequency.value = debugObject.frequency
				})
			})
		gf.add(debugObject, 'size')
			.min(0.1)
			.max(20)
			.step(0.01)
			.onChange(() => {
				materials.forEach((material) => {
					material.uniforms.uSize.value =
						debugObject.size * renderer.getPixelRatio()
				})
			})
		// gf.add(material, 'side', {
		// 	FrontSide,
		// 	DoubleSide,
		// })
		// gf.add(material, 'transparent')
		gf.add(debugObject, 'tweenDuration')
			.min(0.1)
			.max(20)
			.step(0.01)
			.onFinishChange(() => {
				materials.forEach((material) => {
					material.uniforms.uTweenDuration.value = debugObject.tweenDuration
				})
			})
		// gf.add(material, 'wireframe')
		gf.close()
	}
})
