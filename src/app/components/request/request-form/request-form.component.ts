import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PropertyRequest } from '../../../request/request.interface';

const TRANSACTION_TYPE_OPTIONS: { value: PropertyRequest['transactionType']; label: string }[] = [
	{ value: 'buy', label: 'Купівля' },
	{ value: 'rent', label: 'Оренда' },
	{ value: 'lease', label: 'Лізинг' },
	{ value: 'find', label: 'Пошук' },
];

const VISIBILITY_OPTIONS: { value: PropertyRequest['visibility']; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-agents', label: 'Спільний з обраними агентами' },
	{ value: 'shared-with-agencies', label: 'Спільний з агенціями' },
];

@Component({
	selector: 'app-request-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TranslateDirective,
	],
	templateUrl: './request-form.component.html',
	styleUrl: './request-form.component.scss',
})
export class RequestFormComponent {
	@Input() entity?: PropertyRequest;

	readonly form: FormGroup;
	readonly transactionTypeOptions = TRANSACTION_TYPE_OPTIONS;
	readonly visibilityOptions = VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			transactionType: ['buy', Validators.required],
			country: ['', Validators.required],
			region: ['', Validators.required],
			city: ['', Validators.required],
			minPrice: [0, [Validators.required, Validators.min(0)]],
			maxPrice: [0, [Validators.required, Validators.min(0)]],
			currency: ['USD', Validators.required],
			preferredSizeSqm: [0, Validators.min(0)],
			roomRequirements: [0, Validators.min(0)],
			conditionRequirements: [''],
			constructionPreferences: [''],
			preferredMoveDate: [''],
			expirationDate: ['', Validators.required],
			visibility: ['public', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
