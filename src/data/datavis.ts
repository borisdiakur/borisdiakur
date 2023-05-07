import './datavis.css'

import {
	select,
	scaleTime,
	extent,
	area,
	scaleLinear,
	scalePoint,
	axisLeft,
	max,
	curveBasis as curve,
	type Selection,
	type NumberValue,
} from 'd3'
import { repos as reposRaw } from './github.json'

type Repo = {
	langs: string[]
	commits: {
		committedDate: string
		deletions: number
		additions: number
	}[]
}

const repos = reposRaw as { [key: string]: Repo }

const github = select('#github')

type DataItem = {
	additions: number
	deletions: number
}

// Read the data - TODO: move data transformation to the built step for enhanced loading performance
const data: Map<string, Map<string, DataItem>> = new Map()
let minDate: string = new Date().toISOString().split('T')[0]
let maxDate: string = new Date(0).toISOString().split('T')[0]
Object.keys(repos).forEach((repoName) => {
	const repo = repos[repoName]
	const repoData = new Map<string, DataItem>()
	data.set(repoName, repoData)

	repo.commits.forEach((commit) => {
		const dateString: string = new Date(commit.committedDate)
			.toISOString()
			.split('T')[0]
		if (dateString < minDate) minDate = dateString
		if (dateString > maxDate) maxDate = dateString
		const existing = repoData.get(dateString)
		if (!existing) {
			repoData.set(dateString, {
				additions: commit.additions || 0,
				deletions: commit.deletions || 0,
			})
		} else {
			repoData.set(dateString, {
				additions: existing.additions + (commit.additions || 0),
				deletions: existing.deletions + (commit.deletions || 0),
			})
		}
	})
})

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
		...Object.keys(repos).map((repoName) => ({
			name: repoName,
			values: [],
		})),
		// {
		// 	name: 'all',
		// 	values: [],
		// },
	],
}

let dateCounter = new Date(Number(new Date(minDate)) - 5 * 86400000)
	.toISOString()
	.split('T')[0]
const repoEntries = Array.from(data.entries())
while (dateCounter <= maxDate) {
	plotData.dates.push(new Date(dateCounter))

	// const allValues = plotData.series.at(-1)?.values || []
	// let allValue = 0
	repoEntries.forEach((repoEntry) => {
		const repoName = repoEntry[0]
		const codeChanges = repoEntry[1].get(dateCounter)
		const seriesValues = plotData.series.find(
			(entry) => entry.name === repoName
		)?.values // TODO: use a map instead of executing find on each iteration
		if (!seriesValues) return
		if (!codeChanges) {
			seriesValues.push(0)
		} else {
			const sum = (codeChanges.deletions || 0) + (codeChanges.additions || 0)
			seriesValues.push(sum)
			// allValue += sum
		}
	})
	// allValues.push(allValue)

	dateCounter = new Date(Number(new Date(dateCounter)) + 86400000)
		.toISOString()
		.split('T')[0]
}

const ridgeWidth = 60
const width = plotData.series.length * ridgeWidth
const height = 1500
const margin = { top: 0, right: 200, bottom: 0, left: 80 }
const overlap = -12
const yStretch = 32

const yDomain = extent(plotData.dates).reverse() as Iterable<Date | NumberValue>
const y = scaleTime()
	.domain(yDomain)
	.range([margin.top, height * yStretch - margin.bottom])

const x = scalePoint()
	.domain(plotData.series.map((d) => d.name))
	.range([margin.left, width - margin.right])

const z = scaleLinear()
	.domain([
		0,
		max(plotData.series, (d) => max(d.values)),
	] as Iterable<NumberValue>)
	.nice()
	.range([0, -overlap * x.step()])

const xAxis = (g: Selection<SVGGElement, unknown, HTMLElement, any>) =>
	g
		.attr('transform', `translate(${margin.left},0)`)
		.call(axisLeft(y).tickSize(0).tickPadding(4))
		.call((g) => g.select('.domain').remove())

const myArea = area()
	.curve(curve)
	.defined((d) => {
		return !isNaN(d as unknown as number)
	})
	.y((_, i) => y(new Date(plotData.dates[i])))
	.x0(0)
	.x1((d) => z(d as unknown as NumberValue))

const line = myArea.lineX1()

const svg = github
	.append('svg')
	.attr(
		'viewBox',
		`0 0 ${width + (margin.left + margin.right)} ${
			height * yStretch + (margin.top + margin.bottom)
		}`
	)
	.attr('height', `${100 * yStretch}%`)

svg.append('g').call(xAxis)
// svg.append('g').call(yAxis)

const group = svg
	.append('g')
	.selectAll('g')
	.data(plotData.series.reverse())
	.join('g')
	.attr('transform', (d) => `translate(${(x(d.name) || 0) + 1}, 0)`)
	.classed('ridge', true)
	.on('mouseover', function () {
		select(this).classed('ridge--active', true)
	})
	.on('mouseout', function () {
		select(this).classed('ridge--active', false)
	})

group
	.append('path')
	.attr('fill', '#e11b65')
	.attr('d', (d) => myArea(d.values as Iterable<[number, number]>))

group
	.append('path')
	.attr('fill', 'none')
	.attr('stroke', '#7e0b3650')
	.attr('stroke-width', '0.5px')
	.attr('d', (d) => line(d.values as Iterable<[number, number]>))

group
	.append('rect')
	.attr('fill', 'transparent')
	.attr('height', '100%')
	// .attr('x', ridgeHeight)
	.attr('y', margin.top)
	.attr('width', ridgeWidth)
