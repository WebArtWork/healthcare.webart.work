import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../../../developer/developer.interface';
import { Complex } from '../../../complex/complex.interface';
import { complexes } from '../../../complex/complex.data';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { ComplexShortComponent } from '../../complex/complex-short/complex-short.component';
import { PropertyShortComponent } from '../../property/property-short/property-short.component';
import { ListingShortComponent } from '../../listing/listing-short/listing-short.component';

const _complexById = new Map<string, Complex>(complexes.map((c) => [c._id, c]));
const _propertyById = new Map<string, Property>(properties.map((p) => [p._id, p]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));

@Component({
	selector: 'app-developer-view',
	standalone: true,
	imports: [CommonModule, ComplexShortComponent, PropertyShortComponent, ListingShortComponent],
	templateUrl: './developer-view.component.html',
	styleUrl: './developer-view.component.scss',
})
export class DeveloperViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Developer;

	readonly relatedComplexes = computed<Complex[]>(() =>
		this.entity.complexIds.map((id) => _complexById.get(id)).filter((c): c is Complex => !!c),
	);

	readonly relatedProperties = computed<Property[]>(() =>
		this.entity.propertyIds.map((id) => _propertyById.get(id)).filter((p): p is Property => !!p),
	);

	readonly relatedListings = computed<Listing[]>(() =>
		this.entity.listingIds.map((id) => _listingById.get(id)).filter((l): l is Listing => !!l),
	);

	viewComplex(complex: Complex): void {
		this._router.navigate(['/complex', complex._id]);
	}

	viewProperty(property: Property): void {
		this._router.navigate(['/property', property._id]);
	}

	viewListing(listing: Listing): void {
		this._router.navigate(['/listing', listing._id]);
	}
}
