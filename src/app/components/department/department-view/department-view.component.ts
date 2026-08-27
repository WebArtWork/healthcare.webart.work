import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { doctors } from '../../../doctor/doctor.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { DoctorShortComponent } from '../../doctor/doctor-short/doctor-short.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _doctorById = new Map<string, Doctor>(doctors.map((a) => [a._id, a]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-department-view',
	standalone: true,
	imports: [CommonModule, DoctorShortComponent, PatientShortComponent, ListingShortComponent],
	templateUrl: './department-view.component.html',
	styleUrl: './department-view.component.scss',
})
export class DepartmentViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Department;

	readonly relatedDoctors = computed<Doctor[]>(() =>
		this.entity.doctorIds.map((id) => _doctorById.get(id)).filter((a): a is Doctor => !!a),
	);

	readonly relatedPatients = computed<Patient[]>(() =>
		this.entity.representedPatientIds
			.map((id) => _patientById.get(id))
			.filter((p): p is Patient => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewDoctor(doctor: Doctor): void {
		this._router.navigate(['/doctor', doctor._id]);
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
