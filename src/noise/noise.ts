import {
	FloatType,
	Mesh,
	// MeshBasicMaterial,
	OrthographicCamera,
	PlaneGeometry,
	RepeatWrapping,
	Scene,
	ShaderMaterial,
	WebGLRenderTarget,
} from 'three'
import { renderer } from '../renderer/renderer'
// import { scene } from '../scene/scene'

import noiseVertex from '../shaders/noise/noise.vert'
import noiseFragment from '../shaders/noise/noise.frag'

const noiseScene = new Scene()

const noiseCamera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10)

noiseCamera.position.set(0, 0, 5)
noiseScene.add(noiseCamera)

const planeGeometry = new PlaneGeometry(2, 2)
const planeMaterial = new ShaderMaterial({
	vertexShader: noiseVertex,
	fragmentShader: noiseFragment,
})
const planeMesh = new Mesh(planeGeometry, planeMaterial)
noiseScene.add(planeMesh)

export const noiseRenderTarget = new WebGLRenderTarget(256, 256, {
	generateMipmaps: false,
	type: FloatType,
	wrapS: RepeatWrapping,
	wrapT: RepeatWrapping,
})

// Ask the renderer to render the next renders in the render target.
renderer.setRenderTarget(noiseRenderTarget)

// Render the noise scene with the camera.
renderer.render(noiseScene, noiseCamera)

// Activate default render target so that following renders are done in the canvas.
renderer.setRenderTarget(null)

// Debug plane
// const debugPlane = new Mesh(
// 	new PlaneGeometry(1, 1),
// 	new MeshBasicMaterial({ map: noiseRenderTarget.texture })
// )
// scene.add(debugPlane)
