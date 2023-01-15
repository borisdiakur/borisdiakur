import { Mesh, MeshStandardMaterial, Scene } from 'three'
import { getGui } from '../gui/gui'

export const scene = new Scene()

const sceneSettings = {
	metalness: 0.45,
}

export function updateAllMeterials() {
	scene.traverse((child) => {
		if (
			child instanceof Mesh &&
			child.material instanceof MeshStandardMaterial
		) {
			child.material.needsUpdate = true
			child.material.metalness = sceneSettings.metalness
		}
	})
}

getGui().then((gui) => {
	if (gui) {
		const gf = gui.addFolder('Scene')
		gf.add(sceneSettings, 'metalness')
			.min(0)
			.max(1)
			.step(0.01)
			.name('metalness')
			.onChange(updateAllMeterials)
		gf.add(scene.position, 'y').min(-5).max(5).step(0.0001).name('position y')
		gf.add(scene.position, 'x').min(-5).max(5).step(0.0001).name('position x')
		gf.add(scene.position, 'z').min(-5).max(5).step(0.0001).name('position z')
		gf.close()
	}
})
