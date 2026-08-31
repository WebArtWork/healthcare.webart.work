export interface NetworkContact {
	phone: string;
	email: string;
	website: string;
}

export interface Network {
	_id: string;
	name: string;
	description: string;
	logo: string;
	country: string;
	city: string;
	foundedYear: number;
	isClaimed: boolean;
	facilityIds: string[];
	patientIds: string[];
	appointmentIds: string[];
	contact: NetworkContact;
}
