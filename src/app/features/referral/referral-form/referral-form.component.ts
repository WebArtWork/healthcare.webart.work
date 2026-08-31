import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Referral } from '../referral.interface';

const URGENCY_OPTIONS: { value: Referral['urgency']; label: string }[] = [
	{ value: 'routine', label: 'Планово' },
	{ value: 'urgent', label: 'Терміново' },
	{ value: 'emergency', label: 'Невідкладно' },
];

const SOURCE_OPTIONS: { value: Referral['source']; label: string }[] = [
	{ value: 'self', label: 'Самозвернення' },
	{ value: 'gp', label: 'Сімейний лікар' },
	{ value: 'specialist', label: 'Лікар-спеціаліст' },
	{ value: 'other-doctor', label: 'Інший лікар' },
];

const VISIBILITY_OPTIONS: { value: Referral['visibility']; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-doctors', label: 'Спільний з обраними лікарями' },
	{ value: 'shared-with-departments', label: 'Спільний з відділеннями' },
];

const STATUS_OPTIONS: { value: Referral['status']; label: string }[] = [
	{ value: 'pending', label: 'Очікує' },
	{ value: 'matched', label: 'Підібрано лікаря' },
	{ value: 'scheduled', label: 'Заплановано' },
	{ value: 'closed', label: 'Закрито' },
	{ value: 'declined', label: 'Відхилено' },
];

@Component({
	selector: 'app-referral-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './referral-form.component.html',
	styleUrl: './referral-form.component.scss',
})
export class ReferralFormComponent {
	@Input() entity?: Referral;

	readonly form: FormGroup;
	readonly urgencyOptions = URGENCY_OPTIONS;
	readonly sourceOptions = SOURCE_OPTIONS;
	readonly visibilityOptions = VISIBILITY_OPTIONS;
	readonly statusOptions = STATUS_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			urgency: ['routine', Validators.required],
			reason: ['', Validators.required],
			symptoms: [''],
			requestedSpecialties: [[]],
			source: ['self', Validators.required],
			preferredAppointmentDate: [''],
			expirationDate: ['', Validators.required],
			visibility: ['public', Validators.required],
			status: ['pending', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
