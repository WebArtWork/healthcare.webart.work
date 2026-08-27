export type ComplexStatus = 'planned' | 'under-construction' | 'completed' | 'archived';

export interface ComplexBuilding {
	name: string;
	floors: number;
	unitsCount: number;
}

export interface Complex {
	_id: string;
	name: string;
	description: string;
	developerId: string;
	country: string;
	city: string;
	address: string;
	coordinates: { lat: number; lng: number };
	status: ComplexStatus;
	constructionProgressPercent: number;
	buildings: ComplexBuilding[];
	sharedFacilities: string[];
	propertyIds: string[];
	listingIds: string[];
	recordIds: string[];
	coverImage: string;
}
