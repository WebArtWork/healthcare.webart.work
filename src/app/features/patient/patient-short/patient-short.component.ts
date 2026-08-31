import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Patient } from '../patient.interface';

const DEFAULT_PHOTO = '/patient-default.svg';

@Component({
	selector: 'app-patient-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './patient-short.component.html',
	styleUrl: './patient-short.component.scss',
})
export class PatientShortComponent {
	@Input() entity!: Patient;

	readonly defaultPhoto = DEFAULT_PHOTO;

	get photo(): string {
		return this.entity.photos[0] || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
