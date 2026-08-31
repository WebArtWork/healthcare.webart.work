import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Facility } from '../facility.interface';

@Component({
	selector: 'app-facility-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './facility-icon.component.html',
	styleUrl: './facility-icon.component.scss',
})
export class FacilityIconComponent {
	@Input() entity!: Facility;
}
