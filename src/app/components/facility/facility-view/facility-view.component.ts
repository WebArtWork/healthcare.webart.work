import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Facility, FacilityStatus } from '../../../facility/facility.interface';
import { Network } from '../../../network/network.interface';
import { networks } from '../../../network/network.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { PropertyRecord } from '../../../record/record.interface';
import { records } from '../../../record/record.data';
import { NetworkIconComponent } from '../../network/network-icon/network-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';
import { RecordShortComponent } from '../../record/record-short/record-short.component';

const STATUS_LABELS: Record<FacilityStatus, string> = {
	planned: 'Заплановано',
	'under-construction': 'Будується',
	completed: 'Завершено',
	archived: 'Архівовано',
};

const _networkById = new Map<string, Network>(networks.map((d) => [d._id, d]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));
const _recordById = new Map<string, PropertyRecord>(records.map((r) => [r._id, r]));

@Component({
	selector: 'app-facility-view',
	standalone: true,
	imports: [
		CommonModule,
		NetworkIconComponent,
		PatientShortComponent,
		ListingShortComponent,
		RecordShortComponent,
	],
	templateUrl: './facility-view.component.html',
	styleUrl: './facility-view.component.scss',
})
export class FacilityViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Facility;

	readonly statusLabels = STATUS_LABELS;

	readonly network = computed<Network | null>(
		() => (this.entity.networkId ? (_networkById.get(this.entity.networkId) ?? null) : null),
	);

	readonly relatedPatients = computed<Patient[]>(() =>
		this.entity.patientIds.map((id) => _patientById.get(id)).filter((p): p is Patient => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	readonly relatedRecords = computed<PropertyRecord[]>(() =>
		this.entity.recordIds.map((id) => _recordById.get(id)).filter((r): r is PropertyRecord => !!r),
	);

	viewNetwork(): void {
		const network = this.network();
		if (network) {
			this._router.navigate(['/network', network._id]);
		}
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}

	viewRecord(record: PropertyRecord): void {
		this._router.navigate(['/records', record._id]);
	}
}
