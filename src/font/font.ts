import { FontEvents } from './fontEvents'
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader'

const fontObj: {
	font: Font | null
} = {
	font: null,
}

const fontLoader = new FontLoader()
fontLoader.load('/fonts/gochi_hand.json', (font) => {
	fontObj.font = font
	window.dispatchEvent(new CustomEvent(FontEvents.load))
})

export const font = fontObj
