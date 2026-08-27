export type UserRole = 'owner' | 'tenant' | 'doctor' | 'department-rep' | 'network-rep' | 'buyer';

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
	appointmentIds: string[];
	referralIds: string[];
	doctorId: string | null;
	departmentId: string | null;
	networkId: string | null;
}
