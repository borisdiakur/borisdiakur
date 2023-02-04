import { scene } from '../scene/scene'

import { getMaterial } from '../material/material'
import { Char } from '../char/char'
import { FontEvents } from '../font/fontEvents'
import { sizes } from '../sizes/sizes'
import { SizesEvents } from '../sizes/sizesEvents'
import { isTouchDevice } from '../utils'
import { MouseEvents } from '../mouse/mouseEvents'
import gsap from 'gsap'

let currentWord = ''
const chars: Char[] = []

let words = [
	{ word: "I'm", timeout: 600 },
	{ word: 'BORiS', timeout: 1500 },
	{ word: "I'm", timeout: 600 },
	{ word: 'a', timeout: 500 },
	{ word: 'front', timeout: 600 },
	{ word: 'end', timeout: 600 },
	{ word: 'Dev', timeout: 1500 },
	{ word: 'Nice', timeout: 600 },
	{ word: 'to', timeout: 400 },
	{ word: 'meet', timeout: 700 },
	{ word: 'You', timeout: 1500 },
	{ word: ':-)', timeout: 3100 },
	{ word: 'Hola!', timeout: 1500 },
	{ word: "I'm", timeout: 600 },
	{ word: 'BoRiS', timeout: 1500 },
	{ word: 'I', timeout: 600 },
	{ word: 'code', timeout: 700 },
	{ word: 'fOr', timeout: 500 },
	{ word: 'the', timeout: 500 },
	{ word: 'web', timeout: 1500 },
	{ word: 'B-)', timeout: 3100 },
	{ word: 'Salut', timeout: 1500 },
	{ word: "I'm", timeout: 600 },
	{ word: 'B0RiS', timeout: 1500 },
	{ word: 'Again', timeout: 1500 },
	{ word: 'haha!', timeout: 1200 },
	{ word: 'I', timeout: 600 },
	{ word: 'like', timeout: 600 },
	{ word: 'to', timeout: 400 },
	{ word: 'hack', timeout: 800 },
	{ word: 'stuff', timeout: 2200 },
	{ word: 'and', timeout: 800 },
	{ word: 'I', timeout: 400 },
	{ word: 'like', timeout: 600 },
	{ word: 'CATS!', timeout: 2200 },
	{ word: 'and', timeout: 600 },
	{ word: 'Dogs!', timeout: 2200 },
	{ word: '<3', timeout: 2000 },
	{ word: 'but', timeout: 1800 },
	{ word: 'I', timeout: 400 },
	{ word: "don't", timeout: 500 },
	{ word: 'HAVE', timeout: 800 },
	{ word: 'any', timeout: 1500 },
	{ word: ':-(', timeout: 3100 },
	{ word: 'ALOHA', timeout: 1500 },
	{ word: "I'm", timeout: 600 },
	{ word: 'BORiS', timeout: 1500 },
	{ word: 'but', timeout: 500 },
	{ word: 'you', timeout: 600 },
	{ word: 'know', timeout: 700 },
	{ word: 'that', timeout: 800 },
	{ word: 'by', timeout: 600 },
	{ word: 'now', timeout: 1800 },
	{ word: 'BOn', timeout: 800 },
	{ word: 'jour', timeout: 1200 },
	{ word: 'Nihao', timeout: 1000 },
	{ word: 'Hoi', timeout: 700 },
	{ word: 'Ciao', timeout: 800 },
	{ word: 'Olá', timeout: 700 },
	{ word: 'Hai', timeout: 800 },
	{ word: 'Selam', timeout: 800 },
	{ word: 'Hej', timeout: 700 },
	{ word: ':-)', timeout: 1500 },
	{ word: 'LoL', timeout: 3000 },
	{ word: 'Hi', timeout: 1500 },
]
const pad = (str: string, length: number, char = ' ') =>
	str.padStart((str.length + length) / 2, char).padEnd(length, char)
const maxChars = words
	.map((word) => word.word.length)
	.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue))
words = words.map((word) => {
	return {
		word: pad(word.word, maxChars, '§').replaceAll(/\s/g, '§'),
		timeout: word.timeout,
	}
})

function onResize() {
	const { width, height } = sizes
	for (let i = 0; i < 5; i++) {
		chars[i].position.y = Math.max(height / width - 1.5, 0.066)
		chars[i].updateMatrix()
	}
}

function wordsHaveDifferentLength(w1: string, w2: string) {
	return w1.replaceAll(/§/g, '').length !== w2.replaceAll(/§/g, '').length
}

function next(i = 0) {
	const word = words[i].word
	if (word !== currentWord) {
		const wordsDiffInLength = wordsHaveDifferentLength(word, currentWord)
		currentWord = words[i].word
		chars.forEach((char, i) => {
			if (wordsDiffInLength || (word[i] || '') !== char.getChar()) {
				setTimeout(() => {
					char.update(word[i], word.replaceAll(/§/g, '').length % 2 === 0)
				}, i * 50)
			}
		})
	}
	setTimeout(() => {
		next(i >= words.length - 1 ? 0 : i + 1)
	}, words[i].timeout)
}

window.addEventListener(FontEvents.load, () => {
	const offsetX = 0.25
	chars.push(new Char('H', getMaterial(), scene, offsetX))
	chars.push(new Char('e', getMaterial(), scene, offsetX))
	chars.push(new Char('l', getMaterial(), scene, offsetX))
	chars.push(new Char('l', getMaterial(), scene, offsetX))
	chars.push(new Char('o', getMaterial(), scene, offsetX))
	for (let i = 0; i < chars.length; i++) {
		chars[i].position.x = ((maxChars + 1) / 2 - maxChars + i) * offsetX + 0.02
	}

	setTimeout(() => {
		next()
	}, 1500)

	onResize()
	window.addEventListener(SizesEvents.resize, onResize)

	if (isTouchDevice) {
		const tweenObj = {
			touch: 0,
		}
		window.addEventListener(MouseEvents.touchstart, () => {
			gsap.to(tweenObj, {
				touch: 2.4,
				duration: 0.05,
				overwrite: 'auto',
				onUpdate: () => {
					for (const char of chars) {
						char.updateTouch(tweenObj.touch)
					}
				},
			})
		})
		window.addEventListener(MouseEvents.touchend, () => {
			gsap.to(tweenObj, {
				touch: 0,
				duration: 0.5,
				overwrite: 'auto',
				onUpdate: () => {
					for (const char of chars) {
						char.updateTouch(tweenObj.touch)
					}
				},
			})
		})
	}

	document.body.classList.add('ready')
})
