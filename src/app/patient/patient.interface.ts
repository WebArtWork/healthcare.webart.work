export type PatientCategory =
	| 'inpatient'
	| 'outpatient'
	| 'emergency'
	| 'day-case'
	| 'icu'
	| 'maternity'
	| 'pediatric'
	| 'surgical'
	| 'psychiatric'
	| 'rehabilitation'
	| 'palliative'
	| 'observation'
	| 'transfer';

export type PatientStatus =
	| 'admitted'
	| 'scheduled'
	| 'discharged'
	| 'in-treatment'
	| 'stable'
	| 'critical'
	| 'under-observation'
	| 'archived'
	| 'unverified';

export type PatientVisibility =
	| 'public'
	| 'summary-only'
	| 'limited-preview'
	| 'private'
	| 'shared'
	| 'managed-by-care-team';

export interface PatientVitals {
	heightCm: number;
	weightKg: number;
	ageYears: number;
	bloodType: string;
	bedNumber: number | null;
	wardFloor: number | null;
	yearOfBirth: number | null;
}

export interface PatientAccess {
	userId: string;
	role: 'primary-doctor' | 'nurse' | 'specialist' | 'case-manager' | 'viewer';
}

export interface Patient {
	_id: string;
	category: PatientCategory;
	fullName: string;
	sex: 'male' | 'female' | 'other';
	country: string;
	city: string;
	address: string;
	coordinates: { lat: number; lng: number };
	buildingUnitInfo: string;
	mrn: string;
	complexId: string | null;
	developerId: string | null;
	departmentId: string | null;
	doctorId: string | null;
	vitals: PatientVitals;
	status: PatientStatus;
	visibility: PatientVisibility;
	access: PatientAccess[];
	listingIds: string[];
	recordIds: string[];
	commentIds: string[];
	photos: string[];
}
