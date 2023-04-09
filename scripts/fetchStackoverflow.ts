import type {
	QuestionItem,
	ReputationHistoryItem,
	TopTagItem,
	UserTimelineItem,
} from './stackoverflow'

const query = async <Item>(
	endpoint: string,
	searchParams?: URLSearchParams,
	page = 1
): Promise<{
	items: Item[]
	has_more: boolean
	quota_max: number
	quota_remaining: number
}> => {
	const url = new URL(`https://api.stackexchange.com/2.3/${endpoint}`)
	if (process.env.STACKEXCHANGE_KEY) {
		url.searchParams.set('key', process.env.STACKEXCHANGE_KEY)
	} else {
		console.warn('STACKEXCHANGE_KEY is not set in env!')
	}
	if (process.env.STACKEXCHANGE_TOKEN) {
		url.searchParams.set('access_token', process.env.STACKEXCHANGE_TOKEN)
	} else {
		console.warn('STACKEXCHANGE_TOKEN is not set in env!')
	}
	url.searchParams.set('site', 'stackoverflow')
	url.searchParams.set('pagesize', '100')
	url.searchParams.set('page', page.toString())
	url.searchParams.set('order', 'desc')
	if (searchParams) {
		for (const [key, value] of searchParams) {
			url.searchParams.set(key, value)
		}
	}
	const body = await (await fetch(url)).json()
	if (body.has_more) {
		const more = await query<Item>(endpoint, searchParams, page + 1)
		more.items = body.items.concat(more.items)
		return more
	} else {
		return body
	}
}

const topTags = await query<TopTagItem>('me/top-tags')
console.info('me/top-tags', topTags)

const repHistory = await query<ReputationHistoryItem>('me/reputation-history')
console.info('me/reputation-history', repHistory)

interface ExtendedTimelineItem extends UserTimelineItem {
	tags?: QuestionItem['tags']
}
const timeline = await query<ExtendedTimelineItem>('me/timeline')

const questionPostIds = timeline.items
	.filter((item) => item.post_type === 'question')
	.map((item) => {
		item.post_id
	})

const answerPostIds = timeline.items
	.filter((item) => item.post_type === 'answer')
	.map((item) => {
		item.post_id
	})

for (let i = 0; i < questionPostIds.length; i += 100) {
	const batch = questionPostIds.slice(i, i + 100)
	const questionPostIdsPath = batch.join(';')
	const questions = await query<QuestionItem>(
		`me/questions/${questionPostIdsPath}`
	)
	questions.items.forEach((question) => {
		const timelineItem = timeline.items.find(
			(item) => item.post_id === question.question_id
		)
		if (timelineItem) {
			timelineItem.tags = question.tags
		}
	})
}

for (let i = 0; i < answerPostIds.length; i += 100) {
	const batch = answerPostIds.slice(i, i + 100)
	const answerPostIdsPath = batch.join(';')
	const questions = await query<QuestionItem>(
		`me/answers/${answerPostIdsPath}/questions`
	)
	batch.forEach((answerPostId, index) => {
		const timelineItem = timeline.items.find(
			(item) => item.post_id === answerPostId
		)
		if (timelineItem) {
			timelineItem.tags = questions.items.at(index)?.tags
		}
	})
}

console.info('me/timeline', timeline)

export {}
