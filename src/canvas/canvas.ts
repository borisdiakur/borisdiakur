import { ControlsEvents } from '../controls/controlsEvents'

import './canvas.css'

export const canvas = document.getElementById('canvas') || undefined

if (canvas) {
	window.addEventListener(ControlsEvents.grabStart, () => {
		canvas.classList.add('canvas--grabbing')
	})
	window.addEventListener(ControlsEvents.grabEnd, () => {
		canvas.classList.remove('canvas--grabbing')
	})
}
