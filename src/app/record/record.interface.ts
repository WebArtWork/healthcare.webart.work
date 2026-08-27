export type RecordType =
	| 'infrastructure'
	| 'utility'
	| 'maintenance'
	| 'repair'
	| 'renovation'
	| 'expense'
	| 'inspection'
	| 'incident'
	| 'damage'
	| 'improvement'
	| 'equipment-installation'
	| 'meter-replacement'
	| 'document'
	| 'ownership-change'
	| 'tenant-change'
	| 'valuation'
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
	propertyId: string;
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
	locationInsideProperty: string | null;
	visibility: RecordVisibility;
	verified: boolean;
}
