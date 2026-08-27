import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { Complex } from '../../../complex/complex.interface';
import { Developer } from '../../../developer/developer.interface';
import { Listing } from '../../../listing/listing.interface';
import { LISTING_STATUS_LABELS, LISTING_TYPE_LABELS } from '../../../listing/listing-relations';
import { Patient } from '../../../patient/patient.interface';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { ComplexIconComponent } from '../../complex/complex-icon/complex-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';

@Component({
	selector: 'app-listing-view',
	standalone: true,
	imports: [
		CommonModule,
		DepartmentIconComponent,
		DoctorIconComponent,
		ComplexIconComponent,
		DeveloperIconComponent,
		PatientShortComponent,
	],
	templateUrl: './listing-view.component.html',
	styleUrl: './listing-view.component.scss',
})
export class ListingViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Listing;
	@Input() patient?: Patient | null;
	@Input() complex?: Complex | null;
	@Input() developer?: Developer | null;
	@Input() department?: Department | null;
	@Input() doctor?: Doctor | null;

	readonly typeLabels = LISTING_TYPE_LABELS;
	readonly statusLabels = LISTING_STATUS_LABELS;

	viewPatient(): void {
		if (this.patient) this._router.navigate(['/patient', this.patient._id]);
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
}
