import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Property } from '../../../property/property.interface';

const DEFAULT_PHOTO = '/property-default.svg';

@Component({
	selector: 'app-property-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './property-short.component.html',
	styleUrl: './property-short.component.scss',
})
export class PropertyShortComponent {
	@Input() entity!: Property;

	readonly defaultPhoto = DEFAULT_PHOTO;

	get photo(): string {
		return this.entity.photos[0] || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
