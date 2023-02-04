import { isTouchDevice } from '../utils'
import './cursor.css'
import { MouseEvents } from '../mouse/mouseEvents'
import gsap from 'gsap'

const root = document.documentElement
let cursor: HTMLSpanElement
if (!isTouchDevice) {
	cursor = document.createElement('span')
	cursor.innerHTML = `
	<span>
		<span>
		</span>
	</span>
	`
	cursor.classList.add('cursor')
	document.body.appendChild(cursor)

	document.addEventListener('mouseleave', () => {
		cursor.style.opacity = '0'
	})

	document.addEventListener('mouseenter', () => {
		cursor.style.opacity = '1'
	})
}

window.addEventListener(MouseEvents.move, (ev) => {
	const coordinates = (ev as CustomEvent<{ clientX: number; clientY: number }>)
		.detail
	if (cursor) {
		cursor.style.transform =
			`translate3d(${coordinates.clientX}px, ${coordinates.clientY}px, 0px) ` +
			'translate(-50%, -50%)'
		cursor.style.opacity = '1'
	}

	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	)
	const vh = Math.max(
		document.documentElement.clientHeight || 0,
		window.innerHeight || 0
	)

	if (isTouchDevice) {
		const tweenObj = {
			mouseX: parseFloat(
				getComputedStyle(document.documentElement).getPropertyValue('--mouse-x')
			),
			mouseY: parseFloat(
				getComputedStyle(document.documentElement).getPropertyValue('--mouse-y')
			),
		}
		gsap.to(tweenObj, {
			mouseX: (coordinates.clientX / vw) * 100,
			mouseY: (coordinates.clientY / vh) * 100,
			duration: 0.5,
			overwrite: 'auto',
			onUpdate: () => {
				root.style.setProperty('--mouse-x', `${tweenObj.mouseX}%`)
				root.style.setProperty('--mouse-y', `${tweenObj.mouseY}%`)
			},
		})
	} else {
		root.style.setProperty('--mouse-x', `${(coordinates.clientX / vw) * 100}%`)
		root.style.setProperty('--mouse-y', `${(coordinates.clientY / vh) * 100}%`)
	}
})
