export interface DepartmentContact {
	phone: string;
	email: string;
	website: string;
	address: string;
}

export interface Department {
	_id: string;
	name: string;
	description: string;
	logo: string;
	country: string;
	city: string;
	foundedYear: number;
	doctorIds: string[];
	listingIds: string[];
	representedPatientIds: string[];
	contact: DepartmentContact;
	averageRating: number;
	reviewCount: number;
}
