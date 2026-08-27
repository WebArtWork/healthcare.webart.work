export interface Agent {
	_id: string;
	userId: string;
	agencyId: string | null;
	displayName: string;
	photo: string;
	bio: string;
	country: string;
	city: string;
	serviceAreas: string[];
	specializations: string[];
	yearsExperience: number;
	listingIds: string[];
	representedPropertyIds: string[];
	contactPhone: string;
	contactEmail: string;
	averageRating: number;
	reviewCount: number;
}
