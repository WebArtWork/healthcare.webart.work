export type CommentEntityType = 'patient' | 'appointment' | 'facility' | 'network' | 'department' | 'doctor' | 'user';

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
