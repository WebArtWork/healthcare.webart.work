export type UserRole = 'owner' | 'tenant' | 'agent' | 'agency-rep' | 'developer-rep' | 'buyer';

export interface UserContact {
	email: string;
	phone: string;
}

export interface User {
	_id: string;
	name: string;
	photo: string;
	bio: string;
	country: string;
	city: string;
	interests: string[];
	preferredPropertyTypes: string[];
	roles: UserRole[];
	experienceYears: number;
	contact: UserContact;
	ownedPropertyIds: string[];
	listingIds: string[];
	requestIds: string[];
	agentId: string | null;
	agencyId: string | null;
	developerId: string | null;
}
