import { MouseEvents } from './mouseEvents'
import { isTouchDevice } from '../utils'

const mouseObj = {
	clientX: 0,
	clientY: 0,
}

function handleMove(clientX: number, clientY: number) {
	mouseObj.clientX = clientX
	mouseObj.clientY = clientY
	window.dispatchEvent(
		new CustomEvent(MouseEvents.move, {
			detail: {
				clientX,
				clientY,
			},
		})
	)
}

if (isTouchDevice) {
	let isTouchdown = false
	window.addEventListener(
		'touchstart',
		(ev) => {
			isTouchdown = true
			handleMove(ev.touches[0].clientX, ev.touches[0].clientY)
			window.dispatchEvent(new CustomEvent(MouseEvents.touchstart))
		},
		{ passive: true }
	)
	window.addEventListener(
		'touchend',
		() => {
			isTouchdown = false
			window.dispatchEvent(new CustomEvent(MouseEvents.touchend))
		},
		{ passive: true }
	)
	window.addEventListener(
		'touchcancel',
		() => {
			isTouchdown = false
			window.dispatchEvent(new CustomEvent(MouseEvents.touchend))
		},
		{ passive: true }
	)
	window.addEventListener(
		'touchmove',
		(ev) => {
			if (!isTouchdown) return
			handleMove(ev.touches[0].clientX, ev.touches[0].clientY)
		},
		{ passive: true }
	)
} else {
	window.addEventListener(
		'mousemove',
		(ev) => handleMove(ev.clientX, ev.clientY),
		{ passive: true }
	)
	window.addEventListener('mousedown', (ev) => {
		handleMove(ev.clientX, ev.clientY)
		window.dispatchEvent(new CustomEvent(MouseEvents.mousedown))
	})
	window.addEventListener('mouseup', () => {
		window.dispatchEvent(new CustomEvent(MouseEvents.mouseup))
	})
	window.addEventListener('mouseleave', () => {
		window.dispatchEvent(new CustomEvent(MouseEvents.mouseup))
	})
}

export const mouse = mouseObj
