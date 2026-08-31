import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Appointment, AppointmentStatus, AppointmentType } from '../appointment.interface';

const APPOINTMENT_TYPE_OPTIONS: { value: AppointmentType; label: string }[] = [
	{ value: 'consultation', label: 'Консультація' },
	{ value: 'procedure', label: 'Процедура' },
	{ value: 'follow-up', label: 'Повторний прийом' },
	{ value: 'emergency', label: 'Невідкладна допомога' },
	{ value: 'screening', label: 'Обстеження' },
	{ value: 'other', label: 'Інше' },
];

const APPOINTMENT_STATUS_OPTIONS: { value: AppointmentStatus; label: string }[] = [
	{ value: 'draft', label: 'Чернетка' },
	{ value: 'pending-confirmation', label: 'Очікує підтвердження' },
	{ value: 'scheduled', label: 'Заплановано' },
	{ value: 'checked-in', label: 'Пацієнт прибув' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
	{ value: 'no-show', label: 'Неявка' },
	{ value: 'rescheduled', label: 'Перенесено' },
];

const RECURRENCE_OPTIONS: { value: 'one-time' | 'weekly' | 'monthly'; label: string }[] = [
	{ value: 'one-time', label: 'Одноразово' },
	{ value: 'weekly', label: 'Щотижнево' },
	{ value: 'monthly', label: 'Щомісячно' },
];

@Component({
	selector: 'app-appointment-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './appointment-form.component.html',
	styleUrl: './appointment-form.component.scss',
})
export class AppointmentFormComponent {
	@Input() entity?: Appointment;

	readonly form: FormGroup;
	readonly appointmentTypeOptions = APPOINTMENT_TYPE_OPTIONS;
	readonly statusOptions = APPOINTMENT_STATUS_OPTIONS;
	readonly recurrenceOptions = RECURRENCE_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			appointmentType: ['consultation', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			scheduledDate: ['', Validators.required],
			scheduledTime: ['', Validators.required],
			durationMinutes: [30, [Validators.required, Validators.min(5)]],
			recurrence: [null],
			location: ['', Validators.required],
			status: ['draft', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
