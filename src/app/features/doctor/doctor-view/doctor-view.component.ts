import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor.interface';
import { Department } from '../../department/department.interface';
import { departments } from '../../department/department.data';
import { Patient } from '../../patient/patient.interface';
import { patients } from '../../patient/patient.data';
import { Appointment } from '../../appointment/appointment.interface';
import { appointments } from '../../appointment/appointment.data';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { AppointmentShortComponent } from '../../appointment/appointment-short/appointment-short.component';

const _departmentById = new Map<string, Department>(departments.map((a) => [a._id, a]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _appointmentById = new Map<string, Appointment>(appointments.map((l) => [l._id, l]));

@Component({
	selector: 'app-doctor-view',
	standalone: true,
	imports: [CommonModule, DepartmentIconComponent, PatientShortComponent, AppointmentShortComponent],
	templateUrl: './doctor-view.component.html',
	styleUrl: './doctor-view.component.scss',
})
export class DoctorViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Doctor;

	readonly department = computed<Department | null>(
		() => (this.entity.departmentId ? (_departmentById.get(this.entity.departmentId) ?? null) : null),
	);

	readonly relatedPatients = computed<Patient[]>(() =>
		this.entity.representedPatientIds
			.map((id) => _patientById.get(id))
			.filter((p): p is Patient => !!p),
	);

	readonly relatedAppointments = computed<Appointment[]>(() =>
		this.entity.appointmentIds.map((id) => _appointmentById.get(id)).filter((l): l is Appointment => !!l),
	);

	viewDepartment(): void {
		const department = this.department();
		if (department) {
			this._router.navigate(['/department', department._id]);
		}
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewAppointment(appointment: Appointment): void {
		this._router.navigate(['/appointment', appointment._id]);
	}
}
