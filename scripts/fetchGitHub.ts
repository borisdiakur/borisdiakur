import { Octokit } from 'octokit'
import { User } from '@octokit/graphql-schema'
import { writeFile } from 'fs/promises'

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
})

// Fetch all repository names.
async function fetchRepos() {
	const { user } = await octokit.graphql<{ user: User }>(
		`
			query repoNames {
				user(login: "borisdiakur") {
					repositories(first: 100) {
						nodes {
							name
							languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
								nodes {
									name
								}
							}
						}
					}
				}
			}
		`,
		{
			username: 'borisdiakur',
		}
	)
	const repos: {
		[key: string]: { langs?: (string | undefined)[] }
	} = {}
	user.repositories.nodes?.forEach((node) => {
		if (!node?.name) return
		repos[node.name] = {
			langs: node?.languages?.nodes?.map((node) => node?.name),
		}
	})
	return repos
}
const repos = await fetchRepos()

// Fetch all commits for each repository.
async function fetchRepoCommits(repoName: string) {
	const myCommits: { date: string }[] = []
	const iterator = octokit.paginate.iterator(octokit.rest.repos.listCommits, {
		owner: 'borisdiakur',
		repo: repoName,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
		per_page: 100,
	})
	// Iterate through each response.
	for await (const { data: commits } of iterator) {
		for (const { commit } of commits) {
			if (
				!commit.author?.name?.toLowerCase().includes('diakur') &&
				!commit.author?.email?.toLowerCase().includes('borisd')
			) {
				continue
			}
			myCommits.push({ date: commit.author.date as string })
		}
	}
	return myCommits
}
const commits: { [key: string]: { date: string }[] } = {}
for await (const repo of Object.keys(repos) || []) {
	if (!repo) continue
	commits[repo] = await fetchRepoCommits(repo)
}

await writeFile(
	`./src/data/github.json`,
	JSON.stringify(
		{
			commits,
		},
		null,
		2
	)
)
