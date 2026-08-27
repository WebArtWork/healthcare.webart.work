export interface Doctor {
	_id: string;
	userId: string;
	departmentId: string | null;
	displayName: string;
	photo: string;
	licenseNumber: string;
	bio: string;
	country: string;
	city: string;
	serviceAreas: string[];
	specializations: string[];
	yearsExperience: number;
	listingIds: string[];
	representedPatientIds: string[];
	contactPhone: string;
	contactEmail: string;
	averageRating: number;
	reviewCount: number;
}
