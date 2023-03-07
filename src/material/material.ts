import { FrontSide, ShaderMaterial, Vector2 } from 'three'

import fragmentShader from '../shaders/text/text.frag'
import vertexShader from '../shaders/text/text.vert'
import { TickerEvents } from '../ticker/tickerEvents'
import { noiseRenderTarget } from '../noise/noise'
import { renderer } from '../renderer/renderer'
import { SizesEvents } from '../sizes/sizesEvents'
import { sizes } from '../sizes/sizes'
import { MouseEvents } from '../mouse/mouseEvents'
import { mouse } from '../mouse/mouse'
import { isTouchDevice } from '../utils'

function getSize() {
	return 0.2 * renderer.getPixelRatio() * Math.pow(sizes.width, 0.5)
}

const materials: ShaderMaterial[] = []

const ENTROPY = 77

export function getMaterial() {
	const material = new ShaderMaterial({
		fragmentShader,
		precision: 'lowp',
		side: FrontSide,
		depthTest: false,
		transparent: true,
		uniforms: {
			uAspectRatio: { value: sizes.width / sizes.height },
			uBBoxMin: { value: new Vector2(0, 0) },
			uBBoxMax: { value: new Vector2(1, 1) },
			uBBoxMaxX: { value: 1 },
			uBBoxMinY: { value: 0 },
			uBBoxMaxY: { value: 1 },
			uMouseX: { value: 0 },
			uMouseY: { value: 0 },
			uNoiseRotation: { value: 0 },
			uNoiseTexture: { value: noiseRenderTarget.texture },
			uOpacity: { value: 0 },
			uSize: {
				value: getSize(),
			},
			uTargetOpacity: { value: 0 },
			uTime: { value: ENTROPY },
			uTouch: { value: isTouchDevice ? 0 : 1 },
			uTweenProgress: { value: 0 },
		},
		defines: {
			uFrequency: 3,
			uTweenDuration: 0.5,
			uAmplitudeX: 10.4,
			uAmplitudeY: 10.4,
		},
		vertexShader,
	})

	materials.push(material)
	return material
}

window.addEventListener(TickerEvents.tick, (ev) => {
	materials.forEach((material) => {
		material.uniforms.uTime.value =
			(ev as CustomEvent).detail.elapsedTime + ENTROPY
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
