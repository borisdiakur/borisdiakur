import { sizes } from '../sizes/sizes'
import { getGui } from '../gui/gui'
import { scene } from '../scene/scene'
import { SizesEvents } from '../sizes/sizesEvents'

import { OrthographicCamera } from 'three'

const { width, height } = sizes
export const camera = new OrthographicCamera(
	-1,
	1,
	height / width,
	-height / width,
	-10,
	10
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

getGui().then((gui) => {
	if (gui) {
		const gf = gui.addFolder('Camera')
		gf.add(camera, 'near')
			.min(-250)
			.max(250)
			.step(1)
			.name('Camera near')
			.onChange(() => {
				camera.updateProjectionMatrix()
			})
		gf.add(camera, 'far')
			.min(0.5)
			.max(250)
			.step(0.01)
			.name('Camera far')
			.onChange(() => {
				camera.updateProjectionMatrix()
			})
		gf.add(camera.position, 'x')
			.min(-5)
			.max(5)
			.step(0.0001)
			.name('Camera position X')
		gf.add(camera.position, 'y')
			.min(-5)
			.max(5)
			.step(0.0001)
			.name('Camera position Y')
		gf.add(camera.position, 'z')
			.min(-5)
			.max(5)
			.step(0.0001)
			.name('Camera position Z')
		gf.close()
	}
})
