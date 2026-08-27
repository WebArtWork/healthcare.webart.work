import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '../../../network/network.interface';
import { Facility } from '../../../facility/facility.interface';
import { facilities } from '../../../facility/facility.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Appointment } from '../../../appointment/appointment.interface';
import { appointments } from '../../../appointment/appointment.data';
import { FacilityShortComponent } from '../../facility/facility-short/facility-short.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { AppointmentShortComponent } from '../../appointment/appointment-short/appointment-short.component';

const _facilityById = new Map<string, Facility>(facilities.map((c) => [c._id, c]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _appointmentById = new Map<string, Appointment>(appointments.map((l) => [l._id, l]));

@Component({
	selector: 'app-network-view',
	standalone: true,
	imports: [CommonModule, FacilityShortComponent, PatientShortComponent, AppointmentShortComponent],
	templateUrl: './network-view.component.html',
	styleUrl: './network-view.component.scss',
})
export class NetworkViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Network;

	readonly relatedFacilities = computed<Facility[]>(() =>
		this.entity.facilityIds.map((id) => _facilityById.get(id)).filter((c): c is Facility => !!c),
	);

	readonly relatedPatients = computed<Patient[]>(() =>
		this.entity.patientIds.map((id) => _patientById.get(id)).filter((p): p is Patient => !!p),
	);

	readonly relatedAppointments = computed<Appointment[]>(() =>
		this.entity.appointmentIds.map((id) => _appointmentById.get(id)).filter((l): l is Appointment => !!l),
	);

	viewFacility(facility: Facility): void {
		this._router.navigate(['/facility', facility._id]);
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewAppointment(appointment: Appointment): void {
		this._router.navigate(['/appointment', appointment._id]);
	}
}
