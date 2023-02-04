import { isTouchDevice } from '../utils'
import './cursor.css'

if (!isTouchDevice) {
	const cursor = document.createElement('span')
	cursor.innerHTML = `
	<span>
		<span>
		</span>
	</span>
	`
	cursor.classList.add('cursor')
	document.body.appendChild(cursor)
	const root = document.documentElement

	window.addEventListener('mousemove', (event) => {
		cursor.style.transform =
			`translate3d(${event.clientX}px, ${event.clientY}px, 0px) ` +
			'translate(-50%, -50%)'
		cursor.style.opacity = '1'

		const vw = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		)
		const vh = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		)

		root.style.setProperty('--mouse-x', `${(event.clientX / vw) * 100}%`)
		root.style.setProperty('--mouse-y', `${(event.clientY / vh) * 100}%`)
	})

	document.addEventListener('mouseleave', () => {
		cursor.style.opacity = '0'
	})

	document.addEventListener('mouseenter', () => {
		cursor.style.opacity = '1'
	})
}
