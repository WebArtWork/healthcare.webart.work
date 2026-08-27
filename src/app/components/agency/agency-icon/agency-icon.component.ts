import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Agency } from '../../../agency/agency.interface';

@Component({
	selector: 'app-agency-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './agency-icon.component.html',
	styleUrl: './agency-icon.component.scss',
})
export class AgencyIconComponent {
	@Input() entity!: Agency;
}
