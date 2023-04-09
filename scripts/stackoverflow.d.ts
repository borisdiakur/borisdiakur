export type TopTagItem = {
	answer_count: number
	answer_score: number
	question_count: number
	question_score: number
	tag_name: string
	user_id: number
}

export type ReputationHistoryItem = {
	creation_date: number
	post_id?: number
	reputation_change: number
	reputation_history_type:
		| 'asker_accepts_answer'
		| 'asker_unaccept_answer'
		| 'answer_accepted'
		| 'answer_unaccepted'
		| 'voter_downvotes'
		| 'voter_undownvotes'
		| 'post_downvoted'
		| 'post_undownvoted'
		| 'post_upvoted'
		| 'post_unupvoted'
		| 'suggested_edit_approval_received'
		| 'post_flagged_as_spam'
		| 'post_flagged_as_offensive'
		| 'bounty_given'
		| 'bounty_earned'
		| 'bounty_cancelled'
		| 'post_deleted'
		| 'post_undeleted'
		| 'association_bonus'
		| 'arbitrary_reputation_change'
		| 'vote_fraud_reversal'
		| 'post_migrated'
		| 'user_deleted'
		| 'example_upvoted'
		| 'example_unupvoted'
		| 'proposed_change_approved'
		| 'doc_link_upvoted'
		| 'doc_link_unupvoted'
		| 'doc_source_removed'
		| 'suggested_edit_approval_overridden'
	user_id: number
}

export type UserTimelineItem = {
	badge_id?: number
	comment_id?: number
	creation_date: number
	detail?: string
	link: string
	post_id?: number
	post_type: 'question' | 'answer' | 'article'
	suggested_edit_id?: number
	timeline_type:
		| 'commented'
		| 'asked'
		| 'answered'
		| 'badge'
		| 'revision'
		| 'accepted'
		| 'reviewed'
		| 'suggested'
	title?: string
	user_id: number
}

export type QuestionItem = {
	accepted_answer_id?: number
	answer_count: number
	// answers?: AnswerItem[]
	bodystring
	body_markdown: string
	bounty_amount?: number
	bounty_closes_date?: number
	// bounty_user?: ShallowUserItem
	can_answer: boolean
	can_close: boolean
	can_comment: boolean
	can_edit: boolean
	can_flag: boolean
	can_suggest_edit: boolean
	close_vote_count: number
	closed_date?: number
	// closed_details?: ClosedDetailsItem
	closed_reason?: string
	// collectives: CollectivesItem[]
	comment_count: number
	// comments?: CommentItem[]
	community_owned_date?: number
	content_license: string
	creation_date: number
	delete_vote_count: number
	down_vote_count: number
	downvoted: boolean
	favorite_count: number
	favorited: boolean
	is_answered: boolean
	last_activity_date: number
	last_edit_date?: number
	// last_editor: ShallowUserItem
	linkstring
	locked_date?: number
	// migrated_from?: MigrationInfoItem
	// migrated_to?: MigrationInfoItem
	notice: notice
	// owner?: ShallowUserItem
	protected_date?: number
	question_id: number
	reopen_vote_count: number
	score: number
	share_link: string
	tags: string[]
	titlestring
	up_vote_count: number
	upvoted: boolean
	view_count: number
}
