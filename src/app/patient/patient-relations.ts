import { Department } from '../department/department.interface';
import { departments } from '../department/department.data';
import { Doctor } from '../doctor/doctor.interface';
import { doctors } from '../doctor/doctor.data';
import { Complex } from '../complex/complex.interface';
import { complexes } from '../complex/complex.data';
import { Developer } from '../developer/developer.interface';
import { developers } from '../developer/developer.data';
import { Listing } from '../listing/listing.interface';
import { listings } from '../listing/listing.data';
import { PropertyRecord } from '../record/record.interface';
import { records } from '../record/record.data';
import { EntityComment } from '../comment/comment.interface';
import { comments } from '../comment/comment.data';
import { Patient } from './patient.interface';

/**
 * A patient's related entities: it carries the authoritative
 * complexId/developerId/departmentId/doctorId directly, plus arrays of ids
 * pointing at its own listings/records/comments — this resolves all of
 * them so the patient detail page can show (and link to) its full
 * medical record instead of raw ids.
 */
export interface PatientRelations {
	complex: Complex | null;
	developer: Developer | null;
	department: Department | null;
	doctor: Doctor | null;
	listings: Listing[];
	records: PropertyRecord[];
	comments: EntityComment[];
}

const _complexById = new Map<string, Complex>(complexes.map((c) => [c._id, c]));
const _developerById = new Map<string, Developer>(developers.map((d) => [d._id, d]));
const _departmentById = new Map<string, Department>(departments.map((a) => [a._id, a]));
const _doctorById = new Map<string, Doctor>(doctors.map((a) => [a._id, a]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));
const _recordById = new Map<string, PropertyRecord>(records.map((r) => [r._id, r]));
const _commentById = new Map<string, EntityComment>(comments.map((c) => [c._id, c]));

export function relationsForPatient(patient: Patient): PatientRelations {
	return {
		complex: patient.complexId ? (_complexById.get(patient.complexId) ?? null) : null,
		developer: patient.developerId ? (_developerById.get(patient.developerId) ?? null) : null,
		department: patient.departmentId ? (_departmentById.get(patient.departmentId) ?? null) : null,
		doctor: patient.doctorId ? (_doctorById.get(patient.doctorId) ?? null) : null,
		listings: patient.listingIds
			.map((id) => _listingById.get(id))
			.filter((l): l is Listing => !!l),
		records: patient.recordIds
			.map((id) => _recordById.get(id))
			.filter((r): r is PropertyRecord => !!r),
		comments: patient.commentIds
			.map((id) => _commentById.get(id))
			.filter((c): c is EntityComment => !!c),
	};
}
