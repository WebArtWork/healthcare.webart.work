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
import { Listing, ListingStatus, ListingType } from '../../../listing/listing.interface';

const LISTING_TYPE_OPTIONS: { value: ListingType; label: string }[] = [
	{ value: 'sale', label: 'Продаж' },
	{ value: 'long-term-rent', label: 'Довгострокова оренда' },
	{ value: 'short-term-rent', label: 'Короткострокова оренда' },
	{ value: 'commercial-lease', label: 'Комерційна оренда' },
	{ value: 'land-sale', label: 'Продаж землі' },
	{ value: 'other', label: 'Інше' },
];

const LISTING_STATUS_OPTIONS: { value: ListingStatus; label: string }[] = [
	{ value: 'draft', label: 'Чернетка' },
	{ value: 'pending-review', label: 'На розгляді' },
	{ value: 'active', label: 'Активне' },
	{ value: 'reserved', label: 'Заброньоване' },
	{ value: 'rented', label: 'Здано в оренду' },
	{ value: 'sold', label: 'Продано' },
	{ value: 'expired', label: 'Термін минув' },
	{ value: 'paused', label: 'Призупинено' },
	{ value: 'rejected', label: 'Відхилено' },
	{ value: 'archived', label: 'Архівоване' },
];

const RENTAL_PERIOD_OPTIONS: { value: 'monthly' | 'weekly' | 'nightly'; label: string }[] = [
	{ value: 'monthly', label: 'Щомісячно' },
	{ value: 'weekly', label: 'Щотижнево' },
	{ value: 'nightly', label: 'За добу' },
];

@Component({
	selector: 'app-listing-form',
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
	templateUrl: './listing-form.component.html',
	styleUrl: './listing-form.component.scss',
})
export class ListingFormComponent {
	@Input() entity?: Listing;

	readonly form: FormGroup;
	readonly listingTypeOptions = LISTING_TYPE_OPTIONS;
	readonly statusOptions = LISTING_STATUS_OPTIONS;
	readonly rentalPeriodOptions = RENTAL_PERIOD_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			listingType: ['sale', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			price: [0, [Validators.required, Validators.min(0)]],
			currency: ['USD', Validators.required],
			rentalPeriod: [null],
			publicLocation: ['', Validators.required],
			availableFrom: ['', Validators.required],
			availableTo: [null],
			status: ['draft', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
