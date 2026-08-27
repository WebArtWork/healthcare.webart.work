export type CommentEntityType = 'property' | 'listing' | 'complex' | 'developer' | 'agency' | 'agent' | 'user';

export type CommentModerationStatus = 'pending' | 'approved' | 'rejected' | 'flagged';

export type VerifiedReviewerStatus = 'verified-resident' | 'verified-tenant' | 'verified-buyer' | 'verified-owner' | null;

export interface EntityComment {
	_id: string;
	entityType: CommentEntityType;
	entityId: string;
	authorUserId: string;
	rating: number | null;
	text: string;
	verifiedReviewerStatus: VerifiedReviewerStatus;
	helpfulVotes: number;
	moderationStatus: CommentModerationStatus;
	date: string;
}
