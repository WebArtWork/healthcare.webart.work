import { Department } from '../department/department.interface';
import { departments } from '../department/department.data';
import { Doctor } from '../doctor/doctor.interface';
import { doctors } from '../doctor/doctor.data';
import { Facility } from '../facility/facility.interface';
import { facilities } from '../facility/facility.data';
import { Network } from '../network/network.interface';
import { networks } from '../network/network.data';
import { Appointment } from '../appointment/appointment.interface';
import { appointments } from '../appointment/appointment.data';
import { PatientRecord } from '../record/record.interface';
import { records } from '../record/record.data';
import { EntityComment } from '../comment/comment.interface';
import { comments } from '../comment/comment.data';
import { Patient } from './patient.interface';

/**
 * A patient's related entities: it carries the authoritative
 * facilityId/networkId/departmentId/doctorId directly, plus arrays of ids
 * pointing at its own appointments/records/comments — this resolves all of
 * them so the patient detail page can show (and link to) its full
 * medical record instead of raw ids.
 */
export interface PatientRelations {
	facility: Facility | null;
	network: Network | null;
	department: Department | null;
	doctor: Doctor | null;
	appointments: Appointment[];
	records: PatientRecord[];
	comments: EntityComment[];
}

const _facilityById = new Map<string, Facility>(facilities.map((c) => [c._id, c]));
const _networkById = new Map<string, Network>(networks.map((d) => [d._id, d]));
const _departmentById = new Map<string, Department>(departments.map((a) => [a._id, a]));
const _doctorById = new Map<string, Doctor>(doctors.map((a) => [a._id, a]));
const _appointmentById = new Map<string, Appointment>(appointments.map((l) => [l._id, l]));
const _recordById = new Map<string, PatientRecord>(records.map((r) => [r._id, r]));
const _commentById = new Map<string, EntityComment>(comments.map((c) => [c._id, c]));

export function relationsForPatient(patient: Patient): PatientRelations {
	return {
		facility: patient.facilityId ? (_facilityById.get(patient.facilityId) ?? null) : null,
		network: patient.networkId ? (_networkById.get(patient.networkId) ?? null) : null,
		department: patient.departmentId ? (_departmentById.get(patient.departmentId) ?? null) : null,
		doctor: patient.doctorId ? (_doctorById.get(patient.doctorId) ?? null) : null,
		appointments: patient.appointmentIds
			.map((id) => _appointmentById.get(id))
			.filter((l): l is Appointment => !!l),
		records: patient.recordIds
			.map((id) => _recordById.get(id))
			.filter((r): r is PatientRecord => !!r),
		comments: patient.commentIds
			.map((id) => _commentById.get(id))
			.filter((c): c is EntityComment => !!c),
	};
}
