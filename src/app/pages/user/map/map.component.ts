import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { PatientShortComponent } from '../../../features/patient/patient-short/patient-short.component';
import { LeafletMapComponent, LeafletMapMarker } from '../../../shared/leaflet-map/leaflet-map.component';
import { Patient } from '../../../features/patient/patient.interface';
import { patients } from '../../../features/patient/patient.data';

type MapCategory = 'patients' | 'departments' | 'networks';

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
	imports: [ButtonModule, CardModule, PatientShortComponent, LeafletMapComponent],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
	private readonly _router = inject(Router);

	readonly categories: { value: MapCategory; label: string }[] = [
		{ value: 'patients', label: 'Пацієнти' },
		{ value: 'departments', label: 'Відділення' },
		{ value: 'networks', label: 'Мережі' },
	];

	readonly activeCategory = signal<MapCategory>('patients');

	readonly selected = signal<Patient | null>(null);
	private readonly _focusCenter = signal<{ lat: number; lng: number } | null>(null);

	readonly patientsWithCoords = computed(() => patients.filter((item) => item.coordinates));

	private readonly _defaultCenter = computed<{ lat: number; lng: number }>(() => {
		const withCoords = this.patientsWithCoords();
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
		this.patientsWithCoords().map((patient) => ({
			id: patient._id,
			position: patient.coordinates,
			title: patient.address,
		})),
	);

	selectCategory(category: MapCategory): void {
		this.activeCategory.set(category);
		this.selected.set(null);
	}

	onMarkerSelected(marker: LeafletMapMarker): void {
		const patient = patients.find((item) => item._id === marker.id) ?? null;
		this.selected.set(patient);
	}

	closePanel(): void {
		this.selected.set(null);
	}

	view(patient: Patient): void {
		this._router.navigate(['/patient', patient._id]);
	}
}
