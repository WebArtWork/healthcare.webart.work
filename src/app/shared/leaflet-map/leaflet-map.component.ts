import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnDestroy,
	PLATFORM_ID,
	effect,
	inject,
	input,
	output,
	viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type * as Leaflet from 'leaflet';

export interface LeafletMapMarker {
	id: string;
	position: { lat: number; lng: number };
	title?: string;
	label?: string;
}

const DEFAULT_ICON_URL = 'assets/leaflet/marker-icon.png';
const DEFAULT_ICON_RETINA_URL = 'assets/leaflet/marker-icon-2x.png';
const DEFAULT_SHADOW_URL = 'assets/leaflet/marker-shadow.png';

/**
 * Thin OpenStreetMap/Leaflet wrapper — no API key required, unlike the
 * Google Maps-backed `lib-map` from `@wawjs/ngx-map`.
 */
@Component({
	selector: 'app-leaflet-map',
	template: `<div #mapHost class="leaflet-map-host"></div>`,
	styles: [
		`
			:host {
				display: block;
				height: 100%;
				width: 100%;
			}

			.leaflet-map-host {
				height: 100%;
				width: 100%;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeafletMapComponent implements AfterViewInit, OnDestroy {
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _mapHost = viewChild.required<ElementRef<HTMLElement>>('mapHost');

	readonly center = input.required<{ lat: number; lng: number }>();
	readonly zoom = input(13);
	readonly markers = input<LeafletMapMarker[]>([]);

	readonly markerSelected = output<LeafletMapMarker>();

	private _leaflet: typeof Leaflet | null = null;
	private _map: Leaflet.Map | null = null;
	private _markerLayer: Leaflet.LayerGroup | null = null;

	constructor() {
		effect(() => {
			const center = this.center();
			this._map?.panTo([center.lat, center.lng]);
		});

		effect(() => {
			this._renderMarkers(this.markers());
		});
	}

	async ngAfterViewInit(): Promise<void> {
		if (!isPlatformBrowser(this._platformId)) return;

		const leaflet = await import('leaflet');
		this._leaflet = leaflet;

		// Angular's build doesn't resolve Leaflet's default marker image imports; point them at the
		// copies served from src/assets/leaflet (see the `assets` glob in angular.json).
		leaflet.Icon.Default.mergeOptions({
			iconUrl: DEFAULT_ICON_URL,
			iconRetinaUrl: DEFAULT_ICON_RETINA_URL,
			shadowUrl: DEFAULT_SHADOW_URL,
		});

		const center = this.center();
		this._map = leaflet.map(this._mapHost().nativeElement, {
			center: [center.lat, center.lng],
			zoom: this.zoom(),
		});

		leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors',
			maxZoom: 19,
		}).addTo(this._map);

		this._markerLayer = leaflet.layerGroup().addTo(this._map);
		this._renderMarkers(this.markers());
	}

	ngOnDestroy(): void {
		this._map?.remove();
		this._map = null;
	}

	private _renderMarkers(markers: LeafletMapMarker[]): void {
		const leaflet = this._leaflet;
		const layer = this._markerLayer;
		if (!leaflet || !layer) return;

		layer.clearLayers();

		for (const marker of markers) {
			const leafletMarker = leaflet.marker([marker.position.lat, marker.position.lng], {
				title: marker.title,
			});

			if (marker.label) {
				leafletMarker.bindTooltip(marker.label, { permanent: false });
			}

			leafletMarker.on('click', () => this.markerSelected.emit(marker));
			leafletMarker.addTo(layer);
		}
	}
}
