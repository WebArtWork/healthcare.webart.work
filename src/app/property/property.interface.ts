export type PropertyType =
	| 'apartment'
	| 'house'
	| 'room'
	| 'land'
	| 'office'
	| 'retail-space'
	| 'warehouse'
	| 'garage'
	| 'parking-space'
	| 'commercial-building'
	| 'industrial-property'
	| 'agricultural-property'
	| 'unfinished-construction';

export type PropertyStatus =
	| 'active'
	| 'under-construction'
	| 'completed'
	| 'occupied'
	| 'vacant'
	| 'under-renovation'
	| 'damaged'
	| 'archived'
	| 'unverified';

export type PropertyVisibility =
	| 'public'
	| 'listing-only'
	| 'limited-preview'
	| 'private'
	| 'shared'
	| 'managed-by-representatives';

export interface PropertyCharacteristics {
	sizeSqm: number;
	rooms: number;
	bedrooms: number;
	bathrooms: number;
	floor: number | null;
	totalFloors: number | null;
	yearBuilt: number | null;
}

export interface PropertyAccess {
	userId: string;
	role: 'owner' | 'tenant' | 'agent' | 'manager' | 'viewer';
}

export interface Property {
	_id: string;
	type: PropertyType;
	country: string;
	city: string;
	address: string;
	coordinates: { lat: number; lng: number };
	buildingUnitInfo: string;
	cadastralId: string;
	complexId: string | null;
	developerId: string | null;
	agencyId: string | null;
	agentId: string | null;
	characteristics: PropertyCharacteristics;
	status: PropertyStatus;
	visibility: PropertyVisibility;
	access: PropertyAccess[];
	listingIds: string[];
	recordIds: string[];
	commentIds: string[];
	photos: string[];
}
