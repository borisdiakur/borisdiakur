import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { camera } from '../camera/camera'
import { getGui } from '../gui/gui'
import { ControlsEvents } from './controlsEvents'
import { canvas } from '../canvas/canvas'
import { TickerEvents } from '../ticker/tickerEvents'

export const orbitControls = new OrbitControls(camera, canvas)

orbitControls.enableDamping = true
orbitControls.enableZoom = false
orbitControls.enablePan = true
orbitControls.enableRotate = true
orbitControls.enabled = false

canvas?.classList.toggle('canvas--controllable', orbitControls.enabled)

orbitControls.addEventListener('start', () => {
	window.dispatchEvent(new Event(ControlsEvents.grabStart))
})
orbitControls.addEventListener('end', () => {
	window.dispatchEvent(new Event(ControlsEvents.grabEnd))
})

window.addEventListener(TickerEvents.tick, () => {
	orbitControls.update()
})

getGui().then((gui) => {
	if (gui) {
		const gf = gui.addFolder('Orbit controls')
		gf.add(orbitControls, 'enabled')
			.name('Orbit controls enabled')
			.onChange(() => {
				canvas?.classList.toggle('canvas--controllable', orbitControls.enabled)
			})
		gf.close()
	}
})
