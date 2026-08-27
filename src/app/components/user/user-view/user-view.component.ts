import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../user/user.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { doctors } from '../../../doctor/doctor.data';
import { Department } from '../../../department/department.interface';
import { departments } from '../../../department/department.data';
import { Developer } from '../../../developer/developer.interface';
import { developers } from '../../../developer/developer.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _doctorById = new Map<string, Doctor>(doctors.map((a) => [a._id, a]));
const _departmentById = new Map<string, Department>(departments.map((a) => [a._id, a]));
const _developerById = new Map<string, Developer>(developers.map((d) => [d._id, d]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-user-view',
	standalone: true,
	imports: [
		CommonModule,
		DoctorIconComponent,
		DepartmentIconComponent,
		DeveloperIconComponent,
		PatientShortComponent,
		ListingShortComponent,
	],
	templateUrl: './user-view.component.html',
	styleUrl: './user-view.component.scss',
})
export class UserViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: User;

	readonly doctor = computed<Doctor | null>(
		() => (this.entity.doctorId ? (_doctorById.get(this.entity.doctorId) ?? null) : null),
	);

	readonly department = computed<Department | null>(
		() => (this.entity.departmentId ? (_departmentById.get(this.entity.departmentId) ?? null) : null),
	);

	readonly developer = computed<Developer | null>(
		() => (this.entity.developerId ? (_developerById.get(this.entity.developerId) ?? null) : null),
	);

	readonly ownedPatients = computed<Patient[]>(() =>
		this.entity.ownedPatientIds.map((id) => _patientById.get(id)).filter((p): p is Patient => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewDoctor(): void {
		const doctor = this.doctor();
		if (doctor) {
			this._router.navigate(['/doctor', doctor._id]);
		}
	}

	viewDepartment(): void {
		const department = this.department();
		if (department) {
			this._router.navigate(['/department', department._id]);
		}
	}

	viewDeveloper(): void {
		const developer = this.developer();
		if (developer) {
			this._router.navigate(['/developer', developer._id]);
		}
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
