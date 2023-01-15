import { WebGLRenderer, sRGBEncoding, NoToneMapping } from 'three'
import { isHighPerfDevice } from '../utils'
import { sizes } from '../sizes/sizes'
import { scene } from '../scene/scene'
import { canvas } from '../canvas/canvas'
import { camera } from '../camera/camera'
import { TickerEvents } from '../ticker/tickerEvents'
import { SizesEvents } from '../sizes/sizesEvents'

const pixelRatio = isHighPerfDevice ? Math.min(window.devicePixelRatio, 2) : 1
const webGLRenderer = new WebGLRenderer({
	canvas,
	powerPreference: 'high-performance',
	antialias: pixelRatio === 1,
	alpha: true,
})
webGLRenderer.shadowMap.autoUpdate = false
webGLRenderer.shadowMap.enabled = false
webGLRenderer.physicallyCorrectLights = false
webGLRenderer.setSize(sizes.width, sizes.height)
webGLRenderer.outputEncoding = sRGBEncoding
webGLRenderer.toneMapping = NoToneMapping
webGLRenderer.setPixelRatio(pixelRatio)

function onResize() {
	webGLRenderer.setSize(sizes.width, sizes.height)
}

onResize()
window.addEventListener(SizesEvents.resize, onResize)

window.addEventListener(TickerEvents.tick, () => {
	webGLRenderer.render(scene, camera)
})

export const renderer = webGLRenderer
