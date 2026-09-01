import { Department } from '../department/department.interface';
import { departments } from '../department/department.data';
import { Doctor } from '../doctor/doctor.interface';
import { doctors } from '../doctor/doctor.data';
import { Facility } from '../facility/facility.interface';
import { facilities } from '../facility/facility.data';
import { Network } from '../network/network.interface';
import { networks } from '../network/network.data';
import { Patient } from '../patient/patient.interface';
import { patients } from '../patient/patient.data';
import { Appointment, AppointmentStatus, AppointmentType } from './appointment.interface';

/**
 * Ukrainian labels for appointment enums, shared across pages/components that
 * render an appointment (kept in sync with the copy used on the explore page).
 */
export const APPOINTMENT_TYPE_LABELS: Record<AppointmentType, string> = {
	consultation: 'Консультація',
	procedure: 'Процедура',
	'follow-up': 'Повторний прийом',
	emergency: 'Невідкладна допомога',
	screening: 'Обстеження',
	other: 'Інше',
};

export const APPOINTMENT_STATUS_LABELS: Record<AppointmentStatus, string> = {
	draft: 'Чернетка',
	'pending-confirmation': 'Очікує підтвердження',
	scheduled: 'Заплановано',
	'checked-in': 'Пацієнт прибув',
	completed: 'Завершено',
	cancelled: 'Скасовано',
	'no-show': 'Неявка',
	rescheduled: 'Перенесено',
};

/**
 * An appointment's related entities are resolved primarily from its own
 * doctorId/departmentId/facilityId, falling back to the patient's own
 * facilityId/networkId/departmentId/doctorId when the appointment doesn't
 * carry one directly, so every appointment card can show (and link to) who's
 * actually behind it instead of just the appointment in isolation.
 */
export interface AppointmentRelations {
	patient: Patient | null;
	facility: Facility | null;
	network: Network | null;
	department: Department | null;
	doctor: Doctor | null;
}

const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _facilityById = new Map<string, Facility>(facilities.map((c) => [c._id, c]));
const _networkById = new Map<string, Network>(networks.map((d) => [d._id, d]));
const _departmentById = new Map<string, Department>(departments.map((a) => [a._id, a]));
const _doctorById = new Map<string, Doctor>(doctors.map((a) => [a._id, a]));

export function patientForAppointment(appointment: Appointment): Patient | null {
	return _patientById.get(appointment.patientId) ?? null;
}

export function relationsForAppointment(appointment: Appointment): AppointmentRelations {
	const patient = patientForAppointment(appointment);

	return {
		patient,
		facility: _facilityById.get(appointment.facilityId) ?? (patient?.facilityId ? (_facilityById.get(patient.facilityId) ?? null) : null),
		network: patient?.networkId ? (_networkById.get(patient.networkId) ?? null) : null,
		department: _departmentById.get(appointment.departmentId) ?? (patient?.departmentId ? (_departmentById.get(patient.departmentId) ?? null) : null),
		doctor: _doctorById.get(appointment.doctorId) ?? (patient?.doctorId ? (_doctorById.get(patient.doctorId) ?? null) : null),
	};
}
