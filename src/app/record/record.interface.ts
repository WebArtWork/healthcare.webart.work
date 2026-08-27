export type RecordType =
	| 'diagnosis'
	| 'symptom'
	| 'medication'
	| 'lab-result'
	| 'vitals'
	| 'procedure'
	| 'imaging'
	| 'vaccination'
	| 'allergy'
	| 'referral'
	| 'admission'
	| 'discharge-summary'
	| 'follow-up'
	| 'consultation'
	| 'document'
	| 'insurance-update'
	| 'care-team-change'
	| 'note';

export type RecordStatus = 'planned' | 'in-progress' | 'completed' | 'cancelled';

export type RecordVisibility =
	| 'public'
	| 'public-summary-private-details'
	| 'private'
	| 'shared-with-selected-users'
	| 'shared-with-owners-tenants'
	| 'shared-with-agent-agency-contractor-manager';

export interface RecordAttachment {
	type: 'photo' | 'video' | 'invoice' | 'receipt' | 'plan' | 'diagram' | 'document';
	url: string;
}

export interface PropertyRecord {
	_id: string;
	patientId: string;
	recordType: RecordType;
	title: string;
	description: string;
	eventDate: string;
	creationDate: string;
	authorUserId: string;
	involvedUserIds: string[];
	serviceProvider: string | null;
	cost: number | null;
	currency: string | null;
	quantity: number | null;
	units: string | null;
	status: RecordStatus;
	attachments: RecordAttachment[];
	bodySite: string | null;
	visibility: RecordVisibility;
	verified: boolean;
}
