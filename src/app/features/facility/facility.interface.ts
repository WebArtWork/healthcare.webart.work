export type FacilityStatus = 'planned' | 'under-construction' | 'completed' | 'archived';

export interface FacilityBuilding {
	name: string;
	floors: number;
	unitsCount: number;
}

export interface Facility {
	_id: string;
	name: string;
	description: string;
	networkId: string;
	country: string;
	city: string;
	address: string;
	coordinates: { lat: number; lng: number };
	status: FacilityStatus;
	constructionProgressPercent: number;
	buildings: FacilityBuilding[];
	sharedFacilities: string[];
	bedCapacity: number;
	departmentIds: string[];
	patientIds: string[];
	appointmentIds: string[];
	recordIds: string[];
	coverImage: string;
}
