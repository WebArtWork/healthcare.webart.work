import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Facility } from '../../../facility/facility.interface';

@Component({
	selector: 'app-facility-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './facility-short.component.html',
	styleUrl: './facility-short.component.scss',
})
export class FacilityShortComponent {
	@Input() entity!: Facility;
}
