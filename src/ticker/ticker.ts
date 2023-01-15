import { Clock } from 'three'
import Stats from 'stats.js'
import { getStats } from '../gui/gui'
import { TickerEvents } from './tickerEvents'

let stats: Stats | null = null

const clock = new Clock()

let oldElapsedTime = 0
const tick = () => {
	stats && stats.begin()

	const elapsedTime = clock.getElapsedTime()
	const deltaTime = elapsedTime - oldElapsedTime
	oldElapsedTime = elapsedTime

	window.dispatchEvent(
		new CustomEvent(TickerEvents.tick, {
			detail: {
				deltaTime,
				elapsedTime,
			},
		})
	)

	window.requestAnimationFrame(tick)

	stats && stats.end()
}

tick()

getStats().then((s) => {
	stats = s
})
