import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { doctors } from '../../../doctor/doctor.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Appointment } from '../../../appointment/appointment.interface';
import { appointments } from '../../../appointment/appointment.data';
import { Facility } from '../../../facility/facility.interface';
import { facilities } from '../../../facility/facility.data';
import { DoctorShortComponent } from '../../doctor/doctor-short/doctor-short.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { AppointmentShortComponent } from '../../appointment/appointment-short/appointment-short.component';
import { FacilityIconComponent } from '../../facility/facility-icon/facility-icon.component';

const _doctorById = new Map<string, Doctor>(doctors.map((a) => [a._id, a]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _appointmentById = new Map<string, Appointment>(appointments.map((l) => [l._id, l]));
const _facilityById = new Map<string, Facility>(facilities.map((f) => [f._id, f]));

@Component({
	selector: 'app-department-view',
	standalone: true,
	imports: [CommonModule, DoctorShortComponent, PatientShortComponent, AppointmentShortComponent, FacilityIconComponent],
	templateUrl: './department-view.component.html',
	styleUrl: './department-view.component.scss',
})
export class DepartmentViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Department;

	readonly facility = computed<Facility | null>(
		() => (this.entity.facilityId ? (_facilityById.get(this.entity.facilityId) ?? null) : null),
	);

	readonly relatedDoctors = computed<Doctor[]>(() =>
		this.entity.doctorIds.map((id) => _doctorById.get(id)).filter((a): a is Doctor => !!a),
	);

	readonly relatedPatients = computed<Patient[]>(() =>
		this.entity.representedPatientIds
			.map((id) => _patientById.get(id))
			.filter((p): p is Patient => !!p),
	);

	readonly relatedAppointments = computed<Appointment[]>(() =>
		this.entity.appointmentIds.map((id) => _appointmentById.get(id)).filter((l): l is Appointment => !!l),
	);

	viewFacility(): void {
		const facility = this.facility();
		if (facility) {
			this._router.navigate(['/facility', facility._id]);
		}
	}

	viewDoctor(doctor: Doctor): void {
		this._router.navigate(['/doctor', doctor._id]);
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewAppointment(appointment: Appointment): void {
		this._router.navigate(['/appointment', appointment._id]);
	}
}
