import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../../agent/agent.interface';
import { Agency } from '../../../agency/agency.interface';
import { agencies } from '../../../agency/agency.data';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { AgencyIconComponent } from '../../agency/agency-icon/agency-icon.component';
import { PropertyShortComponent } from '../../property/property-short/property-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _agencyById = new Map<string, Agency>(agencies.map((a) => [a._id, a]));
const _propertyById = new Map<string, Property>(properties.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-agent-view',
	standalone: true,
	imports: [CommonModule, AgencyIconComponent, PropertyShortComponent, ListingShortComponent],
	templateUrl: './agent-view.component.html',
	styleUrl: './agent-view.component.scss',
})
export class AgentViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Agent;

	readonly agency = computed<Agency | null>(
		() => (this.entity.agencyId ? (_agencyById.get(this.entity.agencyId) ?? null) : null),
	);

	readonly relatedProperties = computed<Property[]>(() =>
		this.entity.representedPropertyIds
			.map((id) => _propertyById.get(id))
			.filter((p): p is Property => !!p),
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

	viewProperty(property: Property): void {
		this._router.navigate(['/property', property._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
