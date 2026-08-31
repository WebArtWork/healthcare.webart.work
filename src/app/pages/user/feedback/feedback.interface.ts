export type FeedbackKind = 'feedback' | 'bug';

export type WouldUse = 'yes' | 'maybe' | 'no';

export interface FeedbackModel {
	overallImpression: string;
	liked: string;
	confused: string;
	disliked: string;
	ideas: string;
	missing: string;
	wouldUse: WouldUse | null;
	wouldUseWhy: string;
	other: string;
}

export interface BugReportModel {
	whatHappened: string;
	whatExpected: string;
	steps: string[];
	files: string[];
}

export interface ContactModel {
	fullName: string;
	email: string;
}

export type FeedbackSubmission =
	| ({ kind: 'feedback' } & FeedbackModel & Partial<ContactModel>)
	| ({ kind: 'bug' } & BugReportModel & Partial<ContactModel>);

export function emptyFeedbackModel(): FeedbackModel {
	return {
		overallImpression: '',
		liked: '',
		confused: '',
		disliked: '',
		ideas: '',
		missing: '',
		wouldUse: null,
		wouldUseWhy: '',
		other: '',
	};
}

export function emptyBugReportModel(): BugReportModel {
	return {
		whatHappened: '',
		whatExpected: '',
		steps: [''],
		files: [],
	};
}

export function emptyContactModel(): ContactModel {
	return {
		fullName: '',
		email: '',
	};
}
