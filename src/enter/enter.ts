import './enter.css'
import { isTouchDevice } from '../utils'
import { EnterEvents } from './enterEvents'

interface AlteredDeviceMotionEvent extends DeviceMotionEvent {
	requestPermission: () => Promise<unknown>
}
const alteredDeviceMotionEvent =
	DeviceMotionEvent as unknown as AlteredDeviceMotionEvent

function askPermission() {
	alteredDeviceMotionEvent
		.requestPermission()
		.then(() => {
			window.dispatchEvent(new Event(EnterEvents.enter))
		})
		.catch(console.warn)
}

if (
	isTouchDevice &&
	typeof DeviceMotionEvent !== 'undefined' &&
	typeof alteredDeviceMotionEvent.requestPermission === 'function'
) {
	const enterBtn = document.createElement('button')
	const enterBtnInnter = document.createElement('span')
	enterBtnInnter.classList.add('enter-btn-inner')
	const enterBtnText = document.createElement('span')
	enterBtnText.classList.add('enter-btn-text')
	enterBtnText.innerText = 'TaP'
	enterBtnInnter.appendChild(enterBtnText)
	enterBtn.appendChild(enterBtnInnter)
	enterBtn.ariaLabel = 'Tap to start'
	enterBtn.classList.add('enter-btn')
	enterBtn.addEventListener('click', askPermission)
	document.body.appendChild(enterBtn)
} else {
	window.dispatchEvent(new Event(EnterEvents.enter))
}
