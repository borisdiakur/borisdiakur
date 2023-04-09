const query = async (
	endpoint: string,
	searchParams?: URLSearchParams,
	page = 1
): Promise<{
	items: unknown[]
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
		const more = await query(endpoint, searchParams, page + 1)
		more.items = body.items.concat(more.items)
		return more
	} else {
		return body
	}
}

const topTags = await query('me/top-tags')
console.info('me/top-tags', topTags)

export {}
