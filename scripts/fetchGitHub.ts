import { Octokit } from 'octokit'
import { User, Organization } from '@octokit/graphql-schema'
import { writeFile } from 'fs/promises'

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
})

// Fetch all repository names and the languages used.
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
		[key: string]: {
			langs?: (string | undefined)[]
			commits?: {
				createdAt?: string
				deletions?: number
				additions?: number
			}[]
		}
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

// Fetch all commits.
async function fetchRepoCommits(
	repo: string,
	cursor?: string
): Promise<
	{
		committedDate: string
		deletions: number
		additions: number
	}[]
> {
	const owner = repo.split('/').at(0)
	const repoName = repo.split('/').at(-1)
	if (!repoName || !owner) {
		return Promise.reject(new Error('Missing repository name or owner.'))
	}

	const data = await octokit.graphql<{
		repository: {
			defaultBranchRef: {
				target: {
					history: {
						nodes: {
							committedDate: string
							deletions: number
							additions: number
						}[]
						pageInfo: {
							hasNextPage: boolean
							endCursor: string
						}
					}
				}
			}
		}
	}>(
		`
			query commits($owner: String!, $repoName: String!, $cursor: String) {
				repository(owner: $owner, name: $repoName) {
					... on Repository {
						defaultBranchRef {
							target {
								... on Commit {
									history(first: 100, after: $cursor) {
										nodes {
											... on Commit {
												committedDate
												deletions
												additions
											}
										}
										pageInfo {
											hasNextPage
											endCursor
										}
									}
								}
							}
						}
					}
				}
			}
		`,
		{
			owner,
			repoName,
			cursor,
		}
	)

	const { repository } = data
	const commits = repository.defaultBranchRef.target.history.nodes
	if (repository.defaultBranchRef.target.history.pageInfo.hasNextPage) {
		return [
			...commits,
			...(await fetchRepoCommits(
				repo,
				repository.defaultBranchRef.target.history.pageInfo.endCursor
			)),
		]
	} else {
		return commits
	}
}
for await (const repo of Object.keys(repos) || []) {
	if (!repo) continue
	repos[repo].commits = await fetchRepoCommits(repo)
}

await writeFile(
	`./src/data/github.json`,
	JSON.stringify(
		{
			repos,
		},
		null,
		2
	)
)
