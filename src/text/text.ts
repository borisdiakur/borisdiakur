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
	{ word: 'Hello', timeout: 1500 },
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
	{ word: 'bend', timeout: 700 },
	{ word: 'break', timeout: 800 },
	{ word: 'and', timeout: 500 },
	{ word: 'fix', timeout: 700 },
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
	{ word: 'I', timeout: 400 },
	{ word: 'use', timeout: 1000 },
	{ word: 'TS', timeout: 1300 },
	{ word: 'HtML', timeout: 1000 },
	{ word: 'CSS', timeout: 800 },
	{ word: 'Vite', timeout: 700 },
	{ word: 'Vue', timeout: 600 },
	{ word: 'Nuxt', timeout: 600 },
	{ word: 'SoLid', timeout: 600 },
	{ word: 'Astro', timeout: 600 },
	{ word: '11y', timeout: 600 },
	{ word: 'Next', timeout: 600 },
	{ word: 'react', timeout: 600 },
	{ word: 'three', timeout: 600 },
	{ word: 'fiber', timeout: 600 },
	{ word: 'gLsL', timeout: 600 },
	{ word: 'Node', timeout: 600 },
	{ word: 'Deno', timeout: 600 },
	{ word: 'BuN', timeout: 600 },
	{ word: 'PNPM', timeout: 800 },
	{ word: 'Git', timeout: 1000 },
	{ word: 'and', timeout: 600 },
	{ word: 'lots', timeout: 700 },
	{ word: 'OF', timeout: 600 },
	{ word: 'other', timeout: 800 },
	{ word: 'cool', timeout: 700 },
	{ word: 'tech', timeout: 2000 },
	{ word: 'I', timeout: 600 },
	{ word: '<3', timeout: 1100 },
	{ word: 'TECH!', timeout: 3000 },
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
	const offsetX = 0.28
	chars.push(new Char('', getMaterial(), scene, offsetX))
	chars.push(new Char('', getMaterial(), scene, offsetX))
	chars.push(new Char('', getMaterial(), scene, offsetX))
	chars.push(new Char('', getMaterial(), scene, offsetX))
	chars.push(new Char('', getMaterial(), scene, offsetX))
	for (let i = 0; i < chars.length; i++) {
		chars[i].position.x = ((maxChars + 1) / 2 - maxChars + i) * offsetX + 0.02
	}

	setTimeout(() => {
		next()
	}, 500)

	onResize()
	window.addEventListener(SizesEvents.resize, onResize)

	if (isTouchDevice) {
		const tweenObj = {
			touch: 0,
		}
		window.addEventListener(MouseEvents.touchstart, () => {
			gsap.to(tweenObj, {
				touch: 2.2,
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
	} else {
		const tweenObj = {
			touch: 0,
		}
		window.addEventListener(MouseEvents.mousedown, () => {
			gsap.to(tweenObj, {
				touch: 2,
				duration: 0.1,
				overwrite: 'auto',
				ease: 'power2.out',
				onUpdate: () => {
					for (const char of chars) {
						char.updateTouch(tweenObj.touch)
					}
				},
			})
		})
		window.addEventListener(MouseEvents.mouseup, () => {
			gsap.to(tweenObj, {
				touch: 1,
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
