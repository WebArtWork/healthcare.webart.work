import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { Complex } from '../../../complex/complex.interface';
import { Developer } from '../../../developer/developer.interface';
import { EntityComment } from '../../../comment/comment.interface';
import { Listing } from '../../../listing/listing.interface';
import { PropertyRecord } from '../../../record/record.interface';
import { Patient } from '../../../patient/patient.interface';
import {
	PATIENT_STATUS_LABELS,
	PATIENT_CATEGORY_LABELS,
	PATIENT_VISIBILITY_LABELS,
} from '../../../patient/patient-labels';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { ComplexIconComponent } from '../../complex/complex-icon/complex-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';
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
		ComplexIconComponent,
		DeveloperIconComponent,
		ListingShortComponent,
		RecordShortComponent,
		CommentShortComponent,
	],
	templateUrl: './patient-view.component.html',
	styleUrl: './patient-view.component.scss',
})
export class PatientViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Patient;
	@Input() complex?: Complex | null;
	@Input() developer?: Developer | null;
	@Input() department?: Department | null;
	@Input() doctor?: Doctor | null;
	@Input() listings: Listing[] = [];
	@Input() records: PropertyRecord[] = [];
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

	viewComplex(): void {
		if (this.complex) this._router.navigate(['/complex', this.complex._id]);
	}

	viewDeveloper(): void {
		if (this.developer) this._router.navigate(['/developer', this.developer._id]);
	}

	viewDepartment(): void {
		if (this.department) this._router.navigate(['/department', this.department._id]);
	}

	viewDoctor(): void {
		if (this.doctor) this._router.navigate(['/doctor', this.doctor._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}

	viewRecord(record: PropertyRecord): void {
		this._router.navigate(['/records', record._id]);
	}
}
