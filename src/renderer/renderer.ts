import { WebGLRenderer, sRGBEncoding, NoToneMapping } from 'three'
import { isHighPerfDevice } from '../utils'
import { sizes } from '../sizes/sizes'
import { scene } from '../scene/scene'
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
webGLRenderer.toneMapping = NoToneMapping
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

export const renderer = webGLRenderer
