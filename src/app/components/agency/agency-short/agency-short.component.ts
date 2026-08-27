import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Agency } from '../../../agency/agency.interface';

@Component({
	selector: 'app-agency-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './agency-short.component.html',
	styleUrl: './agency-short.component.scss',
})
export class AgencyShortComponent {
	@Input() entity!: Agency;
}
