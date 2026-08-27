export interface DeveloperContact {
	phone: string;
	email: string;
	website: string;
}

export interface Developer {
	_id: string;
	name: string;
	description: string;
	logo: string;
	country: string;
	city: string;
	foundedYear: number;
	isClaimed: boolean;
	complexIds: string[];
	patientIds: string[];
	listingIds: string[];
	contact: DeveloperContact;
}
