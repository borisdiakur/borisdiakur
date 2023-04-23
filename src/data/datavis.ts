import {
	area,
	axisBottom,
	axisLeft,
	csv,
	extent,
	max,
	scaleLinear,
	scaleOrdinal,
	select,
	stack,
	type NumberValue,
} from 'd3'

const github = select('#github')

type DataItem = {
	year: number
	name: string
	n: number
}

// Define the dimensions and margins of the chart.
const margin = { top: 10, right: 30, bottom: 30, left: 60 }
const width = 460 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

// Append the svg object and assign dimensions to it.
const svg = github
	.append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

//Read the data
const data = (
	await csv(
		'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv'
	)
).map((entry) => ({
	year: parseInt(entry.year as string),
	name: entry.name,
	n: parseInt(entry.n as string),
})) as unknown as DataItem[]

type DataGroup = {
	key: number
	values: Omit<DataItem, 'year'>[]
}

// Group the data: one array for each value of the X axis.
const sumstat: DataGroup[] = []
data.forEach((item) => {
	const { year, ...rest } = item
	const group = sumstat.find((g) => g.key === year)
	if (!group) {
		sumstat.push({
			key: year,
			values: [rest],
		})
	} else {
		group.values.push(rest)
	}
})

// Stack the data: each group will be represented on top of each other
const mygroups = ['Helen', 'Amanda', 'Ashley'] // list of group names
const mygroup = [1, 2, 3] // list of group names
const stackedData = stack()
	.keys(mygroup as Iterable<string>)
	.value((d, key) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (d as { [index: string]: any }).values[key].n
	})(sumstat as Iterable<{ [key: string]: number }>)

// Add X axis --> it is a date format
const x = scaleLinear()
	.domain(extent(data, (d) => d.year) as Iterable<NumberValue>)
	.range([0, width])
svg
	.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.call(axisBottom(x).ticks(5))

// Add Y axis
const y = scaleLinear()
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	.domain([0, max(data, (d) => d.n) * 1.2])
	.range([height, 0])
svg.append('g').call(axisLeft(y))

// color palette
const color = scaleOrdinal()
	.domain(mygroups)
	.range([
		'#e41a1c',
		'#377eb8',
		'#4daf4a',
		'#984ea3',
		'#ff7f00',
		'#ffff33',
		'#a65628',
		'#f781bf',
		'#999999',
	])

// Show the areas
svg
	.selectAll('mylayers')
	.data(stackedData)
	.enter()
	.append('path')
	.style('fill', (d) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const name = mygroups[(d as { [index: string]: any }).key - 1]
		return color(name) as string
	})
	.attr(
		'd',
		area()
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			.x((d) => x(d.data.key))
			.y0((d) => y(d[0]))
			.y1((d) => y(d[1])) as unknown as string
	)
