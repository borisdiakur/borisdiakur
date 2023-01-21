import './link.css'

const onClick = (ev: Event) => {
	const target = (ev.target as HTMLElement).closest(
		'[data-href]'
	) as HTMLElement
	if (target.dataset.href) {
		location.href = target.dataset.href
	}
}

document.querySelectorAll('[data-href]').forEach((link) => {
	link.innerHTML = (link.textContent || '')
		.split('')
		.map((c) => `<span>${c}</span>`)
		.join('')
	link.addEventListener('click', (ev) => {
		onClick(ev)
	})
	link.addEventListener('keydown', (ev) => {
		const key = (ev as KeyboardEvent).key
		if (key === ' ' || key === 'Enter') {
			onClick(ev)
		}
	})
})
