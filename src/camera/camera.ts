import { sizes } from '../sizes/sizes'
import { scene } from '../scene/scene'
import { SizesEvents } from '../sizes/sizesEvents'

import { OrthographicCamera } from 'three'

const { width, height } = sizes
export const camera = new OrthographicCamera(
	-1,
	1,
	height / width,
	-height / width,
	0,
	2
)
camera.position.set(0, 0, 1)

scene.add(camera)

function onResize() {
	const { width, height } = sizes
	camera.top = height / width
	camera.bottom = -height / width
	camera.updateProjectionMatrix()
}

onResize()
window.addEventListener(SizesEvents.resize, onResize)
