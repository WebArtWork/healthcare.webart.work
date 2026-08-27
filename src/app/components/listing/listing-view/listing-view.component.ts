import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { Facility } from '../../../facility/facility.interface';
import { Network } from '../../../network/network.interface';
import { Listing } from '../../../listing/listing.interface';
import { LISTING_STATUS_LABELS, LISTING_TYPE_LABELS } from '../../../listing/listing-relations';
import { Patient } from '../../../patient/patient.interface';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { FacilityIconComponent } from '../../facility/facility-icon/facility-icon.component';
import { NetworkIconComponent } from '../../network/network-icon/network-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';

@Component({
	selector: 'app-listing-view',
	standalone: true,
	imports: [
		CommonModule,
		DepartmentIconComponent,
		DoctorIconComponent,
		FacilityIconComponent,
		NetworkIconComponent,
		PatientShortComponent,
	],
	templateUrl: './listing-view.component.html',
	styleUrl: './listing-view.component.scss',
})
export class ListingViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Listing;
	@Input() patient?: Patient | null;
	@Input() facility?: Facility | null;
	@Input() network?: Network | null;
	@Input() department?: Department | null;
	@Input() doctor?: Doctor | null;

	readonly typeLabels = LISTING_TYPE_LABELS;
	readonly statusLabels = LISTING_STATUS_LABELS;

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
