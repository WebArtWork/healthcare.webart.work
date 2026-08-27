import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../user/user.interface';
import { Agent } from '../../../agent/agent.interface';
import { agents } from '../../../agent/agent.data';
import { Agency } from '../../../agency/agency.interface';
import { agencies } from '../../../agency/agency.data';
import { Developer } from '../../../developer/developer.interface';
import { developers } from '../../../developer/developer.data';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { AgentIconComponent } from '../../agent/agent-icon/agent-icon.component';
import { AgencyIconComponent } from '../../agency/agency-icon/agency-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';
import { PropertyShortComponent } from '../../property/property-short/property-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _agentById = new Map<string, Agent>(agents.map((a) => [a._id, a]));
const _agencyById = new Map<string, Agency>(agencies.map((a) => [a._id, a]));
const _developerById = new Map<string, Developer>(developers.map((d) => [d._id, d]));
const _propertyById = new Map<string, Property>(properties.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-user-view',
	standalone: true,
	imports: [
		CommonModule,
		AgentIconComponent,
		AgencyIconComponent,
		DeveloperIconComponent,
		PropertyShortComponent,
		ListingShortComponent,
	],
	templateUrl: './user-view.component.html',
	styleUrl: './user-view.component.scss',
})
export class UserViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: User;

	readonly agent = computed<Agent | null>(
		() => (this.entity.agentId ? (_agentById.get(this.entity.agentId) ?? null) : null),
	);

	readonly agency = computed<Agency | null>(
		() => (this.entity.agencyId ? (_agencyById.get(this.entity.agencyId) ?? null) : null),
	);

	readonly developer = computed<Developer | null>(
		() => (this.entity.developerId ? (_developerById.get(this.entity.developerId) ?? null) : null),
	);

	readonly ownedProperties = computed<Property[]>(() =>
		this.entity.ownedPropertyIds.map((id) => _propertyById.get(id)).filter((p): p is Property => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewAgent(): void {
		const agent = this.agent();
		if (agent) {
			this._router.navigate(['/agent', agent._id]);
		}
	}

	viewAgency(): void {
		const agency = this.agency();
		if (agency) {
			this._router.navigate(['/agency', agency._id]);
		}
	}

	viewDeveloper(): void {
		const developer = this.developer();
		if (developer) {
			this._router.navigate(['/developer', developer._id]);
		}
	}

	viewProperty(property: Property): void {
		this._router.navigate(['/property', property._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
