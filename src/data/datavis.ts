import {
	select,
	scaleTime,
	extent,
	area,
	axisBottom,
	scaleLinear,
	scalePoint,
	axisLeft,
	max,
	curveBasis as curve,
	type Selection,
	type NumberValue,
} from 'd3'
import { repos } from './github.json'

const github = select('#github')

const { commits } = repos['borisdiakur/n_']

type DataItem = {
	additions: number
	deletions: number
}

//Read the data
const data: Map<string, DataItem> = new Map()
let minDate: string = new Date().toISOString().split('T')[0]
let maxDate: string = new Date(0).toISOString().split('T')[0]
commits.forEach((commit) => {
	const dateString: string = new Date(commit.committedDate)
		.toISOString()
		.split('T')[0]
	if (dateString < minDate) minDate = dateString
	if (dateString > maxDate) maxDate = dateString
	const existing = data.get(dateString)
	if (!existing) {
		data.set(dateString, {
			additions: commit.additions || 0,
			deletions: commit.deletions || 0,
		})
	} else {
		data.set(dateString, {
			additions: existing.additions + (commit.additions || 0),
			deletions: existing.deletions + (commit.deletions || 0),
		})
	}
})

let dateCounter = minDate
while (dateCounter < maxDate) {
	dateCounter = new Date(Number(new Date(dateCounter)) + 86400000)
		.toISOString()
		.split('T')[0]
	if (!data.has(dateCounter)) {
		data.set(dateCounter, {
			additions: 0,
			deletions: 0,
		})
	}
}

const sortedEntries = Array.from(data.entries()).sort((a, b) =>
	a[0] > b[0] ? 1 : -1
)

type PlotData = {
	dates: Date[]
	series: {
		name: string
		values: number[]
	}[]
}

const plotData: PlotData = {
	dates: [],
	series: [
		{
			name: 'borisdiakur/n_',
			values: [],
		},
	],
}
sortedEntries.forEach((entry) => {
	plotData.dates.push(new Date(entry[0]))
	plotData.series[0].values.push(entry[1].additions + entry[1].deletions)
})

console.info('minDate', minDate)
console.info('maxDate', maxDate)
console.info('plotData', plotData)

// const height = plotData.series.length * 17
const height = 200
const width = 1200
const margin = { top: 40, right: 0, bottom: 0, left: 120 }
const overlap = 8

const x = scaleTime()
	.domain(extent(plotData.dates) as Iterable<Date | NumberValue>)
	.range([margin.left, width - margin.right])

const y = scalePoint()
	.domain(plotData.series.map((d) => d.name))
	.range([margin.top, height - margin.bottom])

const z = scaleLinear()
	.domain([
		0,
		max(plotData.series, (d) => max(d.values)),
	] as Iterable<NumberValue>)
	.nice()
	.range([0, -overlap * y.step()])

const xAxis = (g: Selection<SVGGElement, unknown, HTMLElement, any>) =>
	g.attr('transform', `translate(0,${height - margin.bottom})`).call(
		axisBottom(x)
			.ticks(width / 80)
			.tickSizeOuter(0)
	)

const yAxis = (g: Selection<SVGGElement, unknown, HTMLElement, any>) =>
	g
		.attr('transform', `translate(${margin.left},0)`)
		.call(axisLeft(y).tickSize(0).tickPadding(4))
		.call((g) => g.select('.domain').remove())

const myArea = area()
	.curve(curve)
	.defined((d) => {
		return !isNaN(d as unknown as number)
	})
	.x((_, i) => x(new Date(plotData.dates[i])))
	.y0(0)
	.y1((d) => z(d as unknown as NumberValue))

const line = myArea.lineY1()

const svg = github
	.append('svg')
	.attr(
		'viewBox',
		`0 0 ${width + (margin.left + margin.right)} ${
			height + (margin.top + margin.bottom)
		}`
	)

svg.append('g').call(xAxis)
svg.append('g').call(yAxis)

const group = svg
	.append('g')
	.selectAll('g')
	.data(plotData.series)
	.join('g')
	.attr('transform', (d) => `translate(0,${(y(d.name) || 0) + 1})`)

group
	.append('path')
	.attr('fill', '#ddd')
	.attr('d', (d) => myArea(d.values as Iterable<[number, number]>))

group
	.append('path')
	.attr('fill', 'none')
	.attr('stroke', 'black')
	.attr('d', (d) => line(d.values as Iterable<[number, number]>))
