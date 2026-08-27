export interface AgencyContact {
	phone: string;
	email: string;
	website: string;
	address: string;
}

export interface Agency {
	_id: string;
	name: string;
	description: string;
	logo: string;
	country: string;
	city: string;
	foundedYear: number;
	agentIds: string[];
	listingIds: string[];
	representedPropertyIds: string[];
	contact: AgencyContact;
	averageRating: number;
	reviewCount: number;
}
