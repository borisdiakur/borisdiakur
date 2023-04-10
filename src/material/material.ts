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
import throttle from 'lodash.throttle'
import gsap from 'gsap'

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
			uScrollOpacity: { value: 1 },
			uScrollY: { value: 0 },
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

function updateMouse() {
	materials.forEach((material) => {
		material.uniforms.uMouseX.value = mouse.clientX / sizes.width
		material.uniforms.uMouseY.value =
			mouse.clientY / sizes.height + window.scrollY / sizes.height
	})
}
const updateMouseThrottled = throttle(updateMouse, 20)

let scrollY = 0
let scrollOpacity = 1
function updateScrollY() {
	const duration = 0.3

	const tweenObjScrollY = {
		scrollY,
	}
	gsap.to(tweenObjScrollY, {
		scrollY:
			(window.scrollY / window.innerHeight) *
			(window.innerHeight / window.innerWidth) *
			2,
		duration,
		overwrite: 'auto',
		ease: 'power2.inout',
		onUpdate: () => {
			scrollY = tweenObjScrollY.scrollY
			materials.forEach((material) => {
				material.uniforms.uScrollY.value = scrollY
			})
		},
	})

	const tweenObjScrollOpacity = {
		scrollOpacity,
	}
	gsap.to(tweenObjScrollOpacity, {
		scrollOpacity: window.scrollY > 20 ? 0 : 1,
		duration: duration * 2.5,
		overwrite: 'auto',
		ease: 'power4.out',
		onUpdate: () => {
			scrollOpacity = tweenObjScrollOpacity.scrollOpacity
			materials.forEach((material) => {
				material.uniforms.uScrollOpacity.value = scrollOpacity
			})
		},
	})
}
const updateScrollYThrottled = throttle(updateScrollY, 50)

window.addEventListener(MouseEvents.move, updateMouse)

document.addEventListener(
	'scroll',
	() => {
		updateMouseThrottled()
		// updateScrollY()
		updateScrollYThrottled()
	},
	{
		passive: true,
	}
)
