import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../../agent/agent.interface';
import { Agency } from '../../../agency/agency.interface';
import { agencies } from '../../../agency/agency.data';
import { Patient } from '../../../patient/patient.interface';
import { patients } from '../../../patient/patient.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { AgencyIconComponent } from '../../agency/agency-icon/agency-icon.component';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _agencyById = new Map<string, Agency>(agencies.map((a) => [a._id, a]));
const _patientById = new Map<string, Patient>(patients.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-agent-view',
	standalone: true,
	imports: [CommonModule, AgencyIconComponent, PatientShortComponent, ListingShortComponent],
	templateUrl: './agent-view.component.html',
	styleUrl: './agent-view.component.scss',
})
export class AgentViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Agent;

	readonly agency = computed<Agency | null>(
		() => (this.entity.agencyId ? (_agencyById.get(this.entity.agencyId) ?? null) : null),
	);

	readonly relatedPatients = computed<Patient[]>(() =>
		this.entity.representedPatientIds
			.map((id) => _patientById.get(id))
			.filter((p): p is Patient => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewAgency(): void {
		const agency = this.agency();
		if (agency) {
			this._router.navigate(['/agency', agency._id]);
		}
	}

	viewPatient(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
