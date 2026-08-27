export type ListingType = 'sale' | 'long-term-rent' | 'short-term-rent' | 'commercial-lease' | 'land-sale' | 'other';

export type ListingStatus =
	| 'draft'
	| 'pending-review'
	| 'active'
	| 'reserved'
	| 'rented'
	| 'sold'
	| 'expired'
	| 'paused'
	| 'rejected'
	| 'archived';

export type ListingOwnerRole = 'owner' | 'tenant' | 'agent' | 'agency-rep' | 'developer-rep' | 'neryxomka-team';

export interface ListingOwner {
	userId: string;
	role: ListingOwnerRole;
}

export interface Listing {
	_id: string;
	propertyId: string;
	listingType: ListingType;
	title: string;
	description: string;
	price: number;
	currency: string;
	rentalPeriod: 'monthly' | 'weekly' | 'nightly' | null;
	publicLocation: string;
	photos: string[];
	availableFrom: string;
	availableTo: string | null;
	creatorUserId: string;
	owner: ListingOwner;
	contactOptions: string[];
	publicationDate: string;
	expirationDate: string | null;
	status: ListingStatus;
	sourceVerified: boolean;
}
