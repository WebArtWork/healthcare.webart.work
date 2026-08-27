import { Department } from '../department/department.interface';
import { departments } from '../department/department.data';
import { Doctor } from '../doctor/doctor.interface';
import { doctors } from '../doctor/doctor.data';
import { Complex } from '../complex/complex.interface';
import { complexes } from '../complex/complex.data';
import { Developer } from '../developer/developer.interface';
import { developers } from '../developer/developer.data';
import { Patient } from '../patient/patient.interface';
import { patients } from '../patient/patient.data';
import { Listing, ListingStatus, ListingType } from './listing.interface';

/**
 * Ukrainian labels for listing enums, shared across pages/components that
 * render a listing (kept in sync with the copy used on the explore page).
 */
export const LISTING_TYPE_LABELS: Record<ListingType, string> = {
	sale: 'Продаж',
	'long-term-rent': 'Довгострокова оренда',
	'short-term-rent': 'Короткострокова оренда',
	'commercial-lease': 'Комерційна оренда',
	'land-sale': 'Продаж землі',
	other: 'Інше',
};

export const LISTING_STATUS_LABELS: Record<ListingStatus, string> = {
	draft: 'Чернетка',
	'pending-review': 'На розгляді',
	active: 'Активне',
	reserved: 'Заброньоване',
	rented: 'Здано в оренду',
	sold: 'Продано',
	expired: 'Термін минув',
	paused: 'Призупинено',
	rejected: 'Відхилено',
	archived: 'Архівоване',
};

/**
 * A listing's related entities are resolved through its patient — patient
 * carries the authoritative complexId/developerId/departmentId/doctorId, so every
 * listing card can show (and link to) who's actually behind it instead of
 * just the listing in isolation.
 */
export interface ListingRelations {
	patient: Patient | null;
	complex: Complex | null;
	developer: Developer | null;
	department: Department | null;
	doctor: Doctor | null;
}

const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _complexById = new Map<string, Complex>(complexes.map((c) => [c._id, c]));
const _developerById = new Map<string, Developer>(developers.map((d) => [d._id, d]));
const _departmentById = new Map<string, Department>(departments.map((a) => [a._id, a]));
const _doctorById = new Map<string, Doctor>(doctors.map((a) => [a._id, a]));

export function patientForListing(listing: Listing): Patient | null {
	return _patientById.get(listing.patientId) ?? null;
}

export function relationsForListing(listing: Listing): ListingRelations {
	const patient = patientForListing(listing);

	return {
		patient,
		complex: patient?.complexId ? (_complexById.get(patient.complexId) ?? null) : null,
		developer: patient?.developerId ? (_developerById.get(patient.developerId) ?? null) : null,
		department: patient?.departmentId ? (_departmentById.get(patient.departmentId) ?? null) : null,
		doctor: patient?.doctorId ? (_doctorById.get(patient.doctorId) ?? null) : null,
	};
}
