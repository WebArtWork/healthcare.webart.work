import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Doctor } from '../doctor.interface';

@Component({
	selector: 'app-doctor-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './doctor-icon.component.html',
	styleUrl: './doctor-icon.component.scss',
})
export class DoctorIconComponent {
	@Input() entity!: Doctor;
}
