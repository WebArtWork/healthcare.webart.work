import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../../../developer/developer.interface';
import { Complex } from '../../../complex/complex.interface';
import { complexes } from '../../../complex/complex.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { ComplexShortComponent } from '../../complex/complex-short/complex-short.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _complexById = new Map<string, Complex>(complexes.map((c) => [c._id, c]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-developer-view',
	standalone: true,
	imports: [CommonModule, ComplexShortComponent, PatientShortComponent, ListingShortComponent],
	templateUrl: './developer-view.component.html',
	styleUrl: './developer-view.component.scss',
})
export class DeveloperViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Developer;

	readonly relatedComplexes = computed<Complex[]>(() =>
		this.entity.complexIds.map((id) => _complexById.get(id)).filter((c): c is Complex => !!c),
	);

	readonly relatedPatients = computed<Patient[]>(() =>
		this.entity.patientIds.map((id) => _patientById.get(id)).filter((p): p is Patient => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewComplex(complex: Complex): void {
		this._router.navigate(['/complex', complex._id]);
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
