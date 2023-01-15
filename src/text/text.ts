import { scene } from '../scene/scene'

import { getMaterial } from '../material/material'
import { Char } from '../char/char'
import { FontEvents } from '../font/fontEvents'
import { sizes } from '../sizes/sizes'
import { SizesEvents } from '../sizes/sizesEvents'

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
	{ word: 'meet', timeout: 600 },
	{ word: 'you', timeout: 1500 },
	{ word: ':-)', timeout: 3100 },
	{ word: 'Hola!', timeout: 1500 },
	{ word: "I'm", timeout: 600 },
	{ word: 'BoRiS', timeout: 1500 },
	{ word: 'I', timeout: 500 },
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
	{ word: 'I', timeout: 500 },
	{ word: 'like', timeout: 600 },
	{ word: 'to', timeout: 400 },
	{ word: 'hack', timeout: 800 },
	{ word: 'stuff', timeout: 2200 },
	{ word: 'and', timeout: 800 },
	{ word: 'I', timeout: 400 },
	{ word: 'like', timeout: 600 },
	{ word: 'CATS!', timeout: 2200 },
	{ word: 'AND', timeout: 600 },
	{ word: 'Dogs!', timeout: 2200 },
	{ word: '<3', timeout: 2000 },
	{ word: 'but', timeout: 1800 },
	{ word: 'I', timeout: 400 },
	{ word: "don't", timeout: 500 },
	{ word: 'have', timeout: 800 },
	{ word: 'any', timeout: 1500 },
	{ word: ':-(', timeout: 3100 },
	{ word: 'AlOha', timeout: 1500 },
	{ word: "I'm", timeout: 600 },
	{ word: 'BORiS', timeout: 1500 },
	{ word: 'but', timeout: 500 },
	{ word: 'you', timeout: 500 },
	{ word: 'know', timeout: 500 },
	{ word: 'that', timeout: 800 },
	{ word: 'by', timeout: 600 },
	{ word: 'now', timeout: 1500 },
	{ word: 'Bon', timeout: 500 },
	{ word: 'jour', timeout: 1200 },
	{ word: 'Nihao', timeout: 1000 },
	{ word: 'Hoi', timeout: 700 },
	{ word: 'Ciao', timeout: 800 },
	{ word: 'Olá', timeout: 700 },
	{ word: 'Hai', timeout: 800 },
	{ word: 'Selam', timeout: 800 },
	{ word: 'Hej', timeout: 700 },
	{ word: ':-)', timeout: 1500 },
	{ word: 'LoL', timeout: 1500 },
	{ word: 'Hi', timeout: 1500 },
]
const pad = (str: string, length: number, char = ' ') =>
	str.padStart((str.length + length) / 2, char).padEnd(length, char)
const maxChars = words
	.map((word) => word.word.length)
	.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue))
words = words.map((word) => {
	return {
		word: pad(word.word, maxChars, '§'),
		timeout: word.timeout,
	}
})

function onResize() {
	const { width, height } = sizes
	console.info('height / width', height / width)
	for (let i = 0; i < 5; i++) {
		chars[i].position.y = Math.max(height / width - 1.5, 0)
	}
}

window.addEventListener(FontEvents.load, () => {
	chars.push(new Char('H', getMaterial(), scene))
	chars.push(new Char('e', getMaterial(), scene))
	chars.push(new Char('l', getMaterial(), scene))
	chars.push(new Char('l', getMaterial(), scene))
	chars.push(new Char('o', getMaterial(), scene))
	for (let i = 0; i < 5; i++) {
		chars[i].position.x = ((maxChars + 1) / 2 - maxChars + i) * 0.25 + 0.03
	}

	const next = (i = 0) => {
		const word = words[i].word
		if (word !== currentWord) {
			currentWord = words[i].word
			chars.forEach((char, i) => {
				if ((word[i] || '') !== char.getChar()) {
					setTimeout(() => {
						char.update(word[i])
					}, i * 50)
				}
			})
		}
		setTimeout(() => {
			next(i >= words.length - 1 ? 0 : i + 1)
		}, words[i].timeout)
	}
	setTimeout(() => {
		next()
	}, 1500)

	onResize()
	window.addEventListener(SizesEvents.resize, onResize)

	document.body.classList.add('ready')
})
