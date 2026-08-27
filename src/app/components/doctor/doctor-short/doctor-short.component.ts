import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Doctor } from '../../../doctor/doctor.interface';

@Component({
	selector: 'app-doctor-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './doctor-short.component.html',
	styleUrl: './doctor-short.component.scss',
})
export class DoctorShortComponent {
	@Input() entity!: Doctor;
}
