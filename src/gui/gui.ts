import Stats from 'stats.js'
import { GUI } from 'lil-gui'

let stats: Stats
let guiPromise: Promise<GUI>

export function isDebug() {
	return location.hash === '#debug'
}

export async function getStats() {
	if (stats) return stats
	if (isDebug()) {
		const Stats = (await import('stats.js')).default
		stats = new Stats()
		stats.showPanel(0)
		document.body.appendChild(stats.dom)
		return stats
	}
	return null
}

export function getGui() {
	if (!isDebug()) return Promise.resolve(null)

	if (guiPromise) return guiPromise

	guiPromise = import('lil-gui').then(({ GUI }) => {
		const gui = new GUI({
			width: 346,
		})
		gui.close()
		return gui
	})

	return guiPromise
}
