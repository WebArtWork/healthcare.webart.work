import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from '../../../agency/agency.interface';
import { Agent } from '../../../agent/agent.interface';
import { Complex } from '../../../complex/complex.interface';
import { Developer } from '../../../developer/developer.interface';
import { Listing } from '../../../listing/listing.interface';
import { LISTING_STATUS_LABELS, LISTING_TYPE_LABELS } from '../../../listing/listing-relations';
import { Property } from '../../../property/property.interface';
import { AgencyIconComponent } from '../../agency/agency-icon/agency-icon.component';
import { AgentIconComponent } from '../../agent/agent-icon/agent-icon.component';
import { ComplexIconComponent } from '../../complex/complex-icon/complex-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';
import { PropertyShortComponent } from '../../property/property-short/property-short.component';

@Component({
	selector: 'app-listing-view',
	standalone: true,
	imports: [
		CommonModule,
		AgencyIconComponent,
		AgentIconComponent,
		ComplexIconComponent,
		DeveloperIconComponent,
		PropertyShortComponent,
	],
	templateUrl: './listing-view.component.html',
	styleUrl: './listing-view.component.scss',
})
export class ListingViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Listing;
	@Input() property?: Property | null;
	@Input() complex?: Complex | null;
	@Input() developer?: Developer | null;
	@Input() agency?: Agency | null;
	@Input() agent?: Agent | null;

	readonly typeLabels = LISTING_TYPE_LABELS;
	readonly statusLabels = LISTING_STATUS_LABELS;

	viewProperty(): void {
		if (this.property) this._router.navigate(['/property', this.property._id]);
	}

	viewComplex(): void {
		if (this.complex) this._router.navigate(['/complex', this.complex._id]);
	}

	viewDeveloper(): void {
		if (this.developer) this._router.navigate(['/developer', this.developer._id]);
	}

	viewAgency(): void {
		if (this.agency) this._router.navigate(['/agency', this.agency._id]);
	}

	viewAgent(): void {
		if (this.agent) this._router.navigate(['/agent', this.agent._id]);
	}
}
