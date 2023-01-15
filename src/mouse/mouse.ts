import { MouseEvents } from './mouseEvents'

const mouseObj = {
	clientX: 0,
	clientY: 0,
}

function handleMove(ev: MouseEvent) {
	mouseObj.clientX = ev.clientX
	mouseObj.clientY = ev.clientY

	window.dispatchEvent(new CustomEvent(MouseEvents.move))
}

window.addEventListener('mousemove', handleMove, { passive: true })

export const mouse = mouseObj
