import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '../../../network/network.interface';
import { Facility } from '../../../facility/facility.interface';
import { facilities } from '../../../facility/facility.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { FacilityShortComponent } from '../../facility/facility-short/facility-short.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _facilityById = new Map<string, Facility>(facilities.map((c) => [c._id, c]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-network-view',
	standalone: true,
	imports: [CommonModule, FacilityShortComponent, PatientShortComponent, ListingShortComponent],
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

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewFacility(facility: Facility): void {
		this._router.navigate(['/facility', facility._id]);
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
