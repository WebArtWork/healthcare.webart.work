import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Appointment } from '../../../appointment/appointment.interface';

@Component({
	selector: 'app-appointment-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './appointment-icon.component.html',
	styleUrl: './appointment-icon.component.scss',
})
export class AppointmentIconComponent {
	@Input() entity!: Appointment;
}
