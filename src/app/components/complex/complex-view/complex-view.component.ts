import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Complex, ComplexStatus } from '../../../complex/complex.interface';
import { Developer } from '../../../developer/developer.interface';
import { developers } from '../../../developer/developer.data';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { PropertyRecord } from '../../../record/record.interface';
import { records } from '../../../record/record.data';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';
import { PropertyShortComponent } from '../../property/property-short/property-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';
import { RecordShortComponent } from '../../record/record-short/record-short.component';

const STATUS_LABELS: Record<ComplexStatus, string> = {
	planned: 'Заплановано',
	'under-construction': 'Будується',
	completed: 'Завершено',
	archived: 'Архівовано',
};

const _developerById = new Map<string, Developer>(developers.map((d) => [d._id, d]));
const _propertyById = new Map<string, Property>(properties.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));
const _recordById = new Map<string, PropertyRecord>(records.map((r) => [r._id, r]));

@Component({
	selector: 'app-complex-view',
	standalone: true,
	imports: [
		CommonModule,
		DeveloperIconComponent,
		PropertyShortComponent,
		ListingShortComponent,
		RecordShortComponent,
	],
	templateUrl: './complex-view.component.html',
	styleUrl: './complex-view.component.scss',
})
export class ComplexViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Complex;

	readonly statusLabels = STATUS_LABELS;

	readonly developer = computed<Developer | null>(
		() => (this.entity.developerId ? (_developerById.get(this.entity.developerId) ?? null) : null),
	);

	readonly relatedProperties = computed<Property[]>(() =>
		this.entity.propertyIds.map((id) => _propertyById.get(id)).filter((p): p is Property => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	readonly relatedRecords = computed<PropertyRecord[]>(() =>
		this.entity.recordIds.map((id) => _recordById.get(id)).filter((r): r is PropertyRecord => !!r),
	);

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

	viewRecord(record: PropertyRecord): void {
		this._router.navigate(['/records', record._id]);
	}
}
