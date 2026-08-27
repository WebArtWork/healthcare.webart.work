import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Property } from '../../../property/property.interface';

@Component({
	selector: 'app-property-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './property-icon.component.html',
	styleUrl: './property-icon.component.scss',
})
export class PropertyIconComponent {
	@Input() entity!: Property;
}
