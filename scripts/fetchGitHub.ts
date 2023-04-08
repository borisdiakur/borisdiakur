import { Octokit } from 'octokit'
import { User } from '@octokit/graphql-schema'

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
})

// Fetch all repository names.
async function fetchRepoNames() {
	const { user } = await octokit.graphql<{ user: User }>(
		`
			query repoNames {
				user(login: "borisdiakur") {
					repositories(first: 100) {
						nodes {
							name
						}
					}
				}
			}
		`,
		{
			username: 'borisdiakur',
		}
	)
	return user.repositories.nodes?.map((node) => node?.name)
}
const repositoryNames = await fetchRepoNames()

// Fetch all commits for each repository.
async function fetchRepoCommits(repoName: string) {
	const myCommits: string[] = []
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
			myCommits.push(commit.author.date as string)
		}
	}
	return myCommits
}
const commits: { [key: string]: string[] | undefined } = {}
for await (const repoName of repositoryNames || []) {
	if (!repoName) continue

	commits[repoName] = await fetchRepoCommits(repoName)
}
console.info('commits', commits)

export {}
