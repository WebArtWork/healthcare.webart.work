import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { Facility } from '../../../facility/facility.interface';
import { Network } from '../../../network/network.interface';
import { EntityComment } from '../../../comment/comment.interface';
import { Appointment } from '../../../appointment/appointment.interface';
import { PatientRecord } from '../../../record/record.interface';
import { Patient } from '../../../patient/patient.interface';
import {
	PATIENT_STATUS_LABELS,
	PATIENT_CATEGORY_LABELS,
	PATIENT_VISIBILITY_LABELS,
} from '../../../patient/patient-labels';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { FacilityIconComponent } from '../../facility/facility-icon/facility-icon.component';
import { NetworkIconComponent } from '../../network/network-icon/network-icon.component';
import { AppointmentShortComponent } from '../../appointment/appointment-short/appointment-short.component';
import { RecordShortComponent } from '../../record/record-short/record-short.component';
import { CommentShortComponent } from '../../comment/comment-short/comment-short.component';

const DEFAULT_PHOTO = '/patient-default.svg';

@Component({
	selector: 'app-patient-view',
	standalone: true,
	imports: [
		CommonModule,
		DepartmentIconComponent,
		DoctorIconComponent,
		FacilityIconComponent,
		NetworkIconComponent,
		AppointmentShortComponent,
		RecordShortComponent,
		CommentShortComponent,
	],
	templateUrl: './patient-view.component.html',
	styleUrl: './patient-view.component.scss',
})
export class PatientViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Patient;
	@Input() facility?: Facility | null;
	@Input() network?: Network | null;
	@Input() department?: Department | null;
	@Input() doctor?: Doctor | null;
	@Input() appointments: Appointment[] = [];
	@Input() records: PatientRecord[] = [];
	@Input() comments: EntityComment[] = [];

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly categoryLabels = PATIENT_CATEGORY_LABELS;
	readonly statusLabels = PATIENT_STATUS_LABELS;
	readonly visibilityLabels = PATIENT_VISIBILITY_LABELS;

	get photos(): string[] {
		return this.entity.photos.length ? this.entity.photos : [DEFAULT_PHOTO];
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
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

	viewAppointment(appointment: Appointment): void {
		this._router.navigate(['/appointment', appointment._id]);
	}

	viewRecord(record: PatientRecord): void {
		this._router.navigate(['/records', record._id]);
	}
}
