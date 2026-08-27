export type UserRole = 'owner' | 'tenant' | 'doctor' | 'department-rep' | 'developer-rep' | 'buyer';

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
	preferredPatientCategories: string[];
	roles: UserRole[];
	experienceYears: number;
	contact: UserContact;
	ownedPatientIds: string[];
	listingIds: string[];
	requestIds: string[];
	doctorId: string | null;
	departmentId: string | null;
	developerId: string | null;
}
