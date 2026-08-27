import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { PropertyShortComponent } from '../../../components/property/property-short/property-short.component';
import { LeafletMapComponent, LeafletMapMarker } from '../../../shared/leaflet-map/leaflet-map.component';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';

type MapCategory = 'properties' | 'agencies' | 'developers';

/**
 * Deviation note: `@wawjs/ngx-map`'s `MapComponent` (`lib-map`) wraps
 * `@angular/google-maps` and requires a Google Maps JS API key/loader plus
 * network access to Google's tile servers. This repo has no key configured
 * anywhere (`environment.ts`, `app.config.ts`, `index.html`) and no
 * `provideNgxMap(...)` call. Rather than introduce an unconfigured external
 * dependency, this page renders a real interactive map using `leaflet` +
 * OpenStreetMap tiles via the shared `LeafletMapComponent` wrapper, which
 * needs no API key at all.
 */
@Component({
	imports: [ButtonModule, CardModule, PropertyShortComponent, LeafletMapComponent],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
	private readonly _router = inject(Router);

	readonly categories: { value: MapCategory; label: string }[] = [
		{ value: 'properties', label: 'Об’єкти' },
		{ value: 'agencies', label: 'Агенції' },
		{ value: 'developers', label: 'Розробники' },
	];

	readonly activeCategory = signal<MapCategory>('properties');

	readonly selected = signal<Property | null>(null);
	private readonly _focusCenter = signal<{ lat: number; lng: number } | null>(null);

	readonly propertiesWithCoords = computed(() => properties.filter((item) => item.coordinates));

	private readonly _defaultCenter = computed<{ lat: number; lng: number }>(() => {
		const withCoords = this.propertiesWithCoords();
		if (!withCoords.length) {
			return { lat: 50.4501, lng: 30.5234 }; // Kyiv, as a sensible default
		}

		const lats = withCoords.map((item) => item.coordinates.lat);
		const lngs = withCoords.map((item) => item.coordinates.lng);
		return {
			lat: (Math.min(...lats) + Math.max(...lats)) / 2,
			lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
		};
	});

	readonly center = computed<{ lat: number; lng: number }>(() => this._focusCenter() ?? this._defaultCenter());

	readonly zoom = 12;

	readonly markers = computed<LeafletMapMarker[]>(() =>
		this.propertiesWithCoords().map((property) => ({
			id: property._id,
			position: property.coordinates,
			title: property.address,
		})),
	);

	selectCategory(category: MapCategory): void {
		this.activeCategory.set(category);
		this.selected.set(null);
	}

	onMarkerSelected(marker: LeafletMapMarker): void {
		const property = properties.find((item) => item._id === marker.id) ?? null;
		this.selected.set(property);
	}

	closePanel(): void {
		this.selected.set(null);
	}

	view(property: Property): void {
		this._router.navigate(['/property', property._id]);
	}
}
