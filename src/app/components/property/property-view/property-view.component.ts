import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from '../../../agency/agency.interface';
import { Agent } from '../../../agent/agent.interface';
import { Complex } from '../../../complex/complex.interface';
import { Developer } from '../../../developer/developer.interface';
import { EntityComment } from '../../../comment/comment.interface';
import { Listing } from '../../../listing/listing.interface';
import { PropertyRecord } from '../../../record/record.interface';
import { Property } from '../../../property/property.interface';
import {
	PROPERTY_STATUS_LABELS,
	PROPERTY_TYPE_LABELS,
	PROPERTY_VISIBILITY_LABELS,
} from '../../../property/property-labels';
import { AgencyIconComponent } from '../../agency/agency-icon/agency-icon.component';
import { AgentIconComponent } from '../../agent/agent-icon/agent-icon.component';
import { ComplexIconComponent } from '../../complex/complex-icon/complex-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';
import { RecordShortComponent } from '../../record/record-short/record-short.component';
import { CommentShortComponent } from '../../comment/comment-short/comment-short.component';

const DEFAULT_PHOTO = '/property-default.svg';

@Component({
	selector: 'app-property-view',
	standalone: true,
	imports: [
		CommonModule,
		AgencyIconComponent,
		AgentIconComponent,
		ComplexIconComponent,
		DeveloperIconComponent,
		ListingShortComponent,
		RecordShortComponent,
		CommentShortComponent,
	],
	templateUrl: './property-view.component.html',
	styleUrl: './property-view.component.scss',
})
export class PropertyViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Property;
	@Input() complex?: Complex | null;
	@Input() developer?: Developer | null;
	@Input() agency?: Agency | null;
	@Input() agent?: Agent | null;
	@Input() listings: Listing[] = [];
	@Input() records: PropertyRecord[] = [];
	@Input() comments: EntityComment[] = [];

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly typeLabels = PROPERTY_TYPE_LABELS;
	readonly statusLabels = PROPERTY_STATUS_LABELS;
	readonly visibilityLabels = PROPERTY_VISIBILITY_LABELS;

	get photos(): string[] {
		return this.entity.photos.length ? this.entity.photos : [DEFAULT_PHOTO];
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
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

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}

	viewRecord(record: PropertyRecord): void {
		this._router.navigate(['/records', record._id]);
	}
}
