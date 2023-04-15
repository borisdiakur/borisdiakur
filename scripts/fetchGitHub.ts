import { Octokit } from 'octokit'
import { User, Organization } from '@octokit/graphql-schema'
import { writeFile } from 'fs/promises'

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
})

// Fetch all repository names.
async function fetchRepos() {
	const { user, organization } = await octokit.graphql<{
		user: User
		organization: Organization
	}>(
		`
			query repoNames {
				user(login: "borisdiakur") {
					login
					repositories(first: 100, privacy: PUBLIC) {
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
				organization(login: "emdgroup-liquid") {
					login
					repositories(first: 100, privacy: PUBLIC) {
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
		repos[user.login + '/' + node.name] = {
			langs: node?.languages?.nodes?.map((node) => node?.name),
		}
	})
	organization.repositories.nodes?.forEach((node) => {
		if (!node?.name) return
		repos[organization.login + '/' + node.name] = {
			langs: node?.languages?.nodes?.map((node) => node?.name),
		}
	})
	return repos
}
const repos = await fetchRepos()

// Fetch all commits for each repository.
async function fetchRepoCommits(repo: string) {
	const owner = repo.split('/').at(0)
	const repoName = repo.split('/').at(-1)
	if (!repoName || !owner) {
		return Promise.reject(new Error('Missing repository name or owner.'))
	}
	const myCommits: { date: string }[] = []
	const iterator = octokit.paginate.iterator(octokit.rest.repos.listCommits, {
		owner,
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
			repos,
			commits,
		},
		null,
		2
	)
)
