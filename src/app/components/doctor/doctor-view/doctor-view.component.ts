import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../../../doctor/doctor.interface';
import { Department } from '../../../department/department.interface';
import { departments } from '../../../department/department.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _departmentById = new Map<string, Department>(departments.map((a) => [a._id, a]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-doctor-view',
	standalone: true,
	imports: [CommonModule, DepartmentIconComponent, PatientShortComponent, ListingShortComponent],
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

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
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

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
