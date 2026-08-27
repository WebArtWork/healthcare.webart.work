import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Property } from '../../../property/property.interface';
import {
	PROPERTY_STATUS_OPTIONS,
	PROPERTY_TYPE_OPTIONS,
	PROPERTY_VISIBILITY_OPTIONS,
} from '../../../property/property-labels';

@Component({
	selector: 'app-property-form',
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
	templateUrl: './property-form.component.html',
	styleUrl: './property-form.component.scss',
})
export class PropertyFormComponent {
	@Input() entity?: Property;

	readonly form: FormGroup;
	readonly typeOptions = PROPERTY_TYPE_OPTIONS;
	readonly statusOptions = PROPERTY_STATUS_OPTIONS;
	readonly visibilityOptions = PROPERTY_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			type: ['apartment', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			buildingUnitInfo: [''],
			cadastralId: [''],
			sizeSqm: [0, [Validators.required, Validators.min(1)]],
			rooms: [1, [Validators.required, Validators.min(0)]],
			bedrooms: [0, [Validators.required, Validators.min(0)]],
			bathrooms: [0, [Validators.required, Validators.min(0)]],
			floor: [null],
			totalFloors: [null],
			yearBuilt: [null],
			status: ['active', Validators.required],
			visibility: ['public', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue({
				...this.entity,
				...this.entity.characteristics,
			});
		}
	}
}
