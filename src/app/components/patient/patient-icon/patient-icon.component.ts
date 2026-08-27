import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Patient } from '../../../patient/patient.interface';

@Component({
	selector: 'app-patient-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './patient-icon.component.html',
	styleUrl: './patient-icon.component.scss',
})
export class PatientIconComponent {
	@Input() entity!: Patient;
}
