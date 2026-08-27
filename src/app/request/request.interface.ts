export type RequestTransactionType = 'buy' | 'rent' | 'lease' | 'find';

export type RequestVisibility = 'public' | 'private' | 'shared-with-selected-agents' | 'shared-with-agencies';

export interface RequestMapArea {
	lat: number;
	lng: number;
	radiusKm: number;
}

export interface PropertyRequest {
	_id: string;
	userId: string;
	transactionType: RequestTransactionType;
	propertyTypes: string[];
	country: string;
	region: string;
	city: string;
	mapArea: RequestMapArea;
	minPrice: number;
	maxPrice: number;
	currency: string;
	preferredSizeSqm: number;
	roomRequirements: number;
	conditionRequirements: string;
	constructionPreferences: string;
	requiredFeatures: string[];
	preferredMoveDate: string;
	contactOptions: string[];
	expirationDate: string;
	visibility: RequestVisibility;
}
