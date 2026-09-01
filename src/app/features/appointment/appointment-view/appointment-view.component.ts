import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../department/department.interface';
import { Doctor } from '../../doctor/doctor.interface';
import { Facility } from '../../facility/facility.interface';
import { Network } from '../../network/network.interface';
import { Appointment } from '../appointment.interface';
import { APPOINTMENT_STATUS_LABELS, APPOINTMENT_TYPE_LABELS } from '../appointment-relations';
import { Patient } from '../../patient/patient.interface';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { FacilityIconComponent } from '../../facility/facility-icon/facility-icon.component';
import { NetworkIconComponent } from '../../network/network-icon/network-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';

@Component({
	selector: 'app-appointment-view',
	standalone: true,
	imports: [
		CommonModule,
		DepartmentIconComponent,
		DoctorIconComponent,
		FacilityIconComponent,
		NetworkIconComponent,
		PatientShortComponent,
	],
	templateUrl: './appointment-view.component.html',
	styleUrl: './appointment-view.component.scss',
})
export class AppointmentViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Appointment;
	@Input() patient?: Patient | null;
	@Input() facility?: Facility | null;
	@Input() network?: Network | null;
	@Input() department?: Department | null;
	@Input() doctor?: Doctor | null;

	readonly typeLabels = APPOINTMENT_TYPE_LABELS;
	readonly statusLabels = APPOINTMENT_STATUS_LABELS;

	viewPatient(): void {
		if (this.patient) this._router.navigate(['/patient', this.patient._id]);
	}

	viewFacility(): void {
		if (this.facility) this._router.navigate(['/facility', this.facility._id]);
	}

	viewNetwork(): void {
		if (this.network) this._router.navigate(['/network', this.network._id]);
	}

	viewDepartment(): void {
		if (this.department) this._router.navigate(['/department', this.department._id]);
	}

	viewDoctor(): void {
		if (this.doctor) this._router.navigate(['/doctor', this.doctor._id]);
	}
}
