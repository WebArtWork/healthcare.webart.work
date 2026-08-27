import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from '../../../agency/agency.interface';
import { Agent } from '../../../agent/agent.interface';
import { agents } from '../../../agent/agent.data';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { AgentShortComponent } from '../../agent/agent-short/agent-short.component';
import { PropertyShortComponent } from '../../property/property-short/property-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _agentById = new Map<string, Agent>(agents.map((a) => [a._id, a]));
const _propertyById = new Map<string, Property>(properties.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-agency-view',
	standalone: true,
	imports: [CommonModule, AgentShortComponent, PropertyShortComponent, ListingShortComponent],
	templateUrl: './agency-view.component.html',
	styleUrl: './agency-view.component.scss',
})
export class AgencyViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Agency;

	readonly relatedAgents = computed<Agent[]>(() =>
		this.entity.agentIds.map((id) => _agentById.get(id)).filter((a): a is Agent => !!a),
	);

	readonly relatedProperties = computed<Property[]>(() =>
		this.entity.representedPropertyIds
			.map((id) => _propertyById.get(id))
			.filter((p): p is Property => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewAgent(agent: Agent): void {
		this._router.navigate(['/agent', agent._id]);
	}

	viewProperty(property: Property): void {
		this._router.navigate(['/property', property._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
