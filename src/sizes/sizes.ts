import { SizesEvents } from './sizesEvents'

const sizesObj = {
	width: 0,
	height: 0,
}

function handleResize() {
	const bcr = document.body.getBoundingClientRect()
	sizesObj.width = bcr.width
	sizesObj.height = bcr.height

	window.dispatchEvent(new CustomEvent(SizesEvents.resize))
}

handleResize()
window.addEventListener('resize', handleResize, { passive: true })
window.addEventListener('orientationchange', handleResize, {
	passive: true,
})

export const sizes = sizesObj
