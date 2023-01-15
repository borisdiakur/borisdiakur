import {
	WebGLRenderer,
	sRGBEncoding,
	NoToneMapping,
	LinearToneMapping,
	ReinhardToneMapping,
	CineonToneMapping,
	ACESFilmicToneMapping,
} from 'three'
import { isHighPerfDevice } from '../utils'
import { getGui } from '../gui/gui'
import { sizes } from '../sizes/sizes'
import { scene, updateAllMeterials } from '../scene/scene'
import { canvas } from '../canvas/canvas'
import { camera } from '../camera/camera'
import { TickerEvents } from '../ticker/tickerEvents'
import { SizesEvents } from '../sizes/sizesEvents'

const webGLRenderer = new WebGLRenderer({
	canvas,
	powerPreference: 'high-performance',
	antialias: true,
	alpha: true,
})
webGLRenderer.shadowMap.autoUpdate = false
webGLRenderer.shadowMap.enabled = false
webGLRenderer.setSize(sizes.width, sizes.height)
webGLRenderer.physicallyCorrectLights = true
webGLRenderer.outputEncoding = sRGBEncoding
webGLRenderer.toneMapping = LinearToneMapping
webGLRenderer.setPixelRatio(
	isHighPerfDevice ? Math.min(window.devicePixelRatio, 2) : 1
)

function onResize() {
	webGLRenderer.setSize(sizes.width, sizes.height)
}

onResize()
window.addEventListener(SizesEvents.resize, onResize)

window.addEventListener(TickerEvents.tick, () => {
	webGLRenderer.render(scene, camera)
})

getGui().then((gui) => {
	if (gui) {
		const gf = gui.addFolder('Renderer')
		gf.add(webGLRenderer, 'toneMapping', {
			No: NoToneMapping,
			Linear: LinearToneMapping,
			Reinhard: ReinhardToneMapping,
			Cineon: CineonToneMapping,
			ACESFilmic: ACESFilmicToneMapping,
		})
			.name('Tone mapping')
			.onFinishChange(() => {
				webGLRenderer.toneMapping = Number(webGLRenderer.toneMapping)
				updateAllMeterials()
			})
		gf.add(webGLRenderer, 'toneMappingExposure')
			.min(0)
			.max(10)
			.step(0.001)
			.name('Tone mapping exposure')
		gf.close()
	}
})

export const renderer = webGLRenderer
