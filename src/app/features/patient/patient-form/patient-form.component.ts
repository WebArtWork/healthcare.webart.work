import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Patient } from '../patient.interface';
import {
	PATIENT_STATUS_OPTIONS,
	PATIENT_CATEGORY_OPTIONS,
	PATIENT_VISIBILITY_OPTIONS,
} from '../patient-labels';

@Component({
	selector: 'app-patient-form',
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
	templateUrl: './patient-form.component.html',
	styleUrl: './patient-form.component.scss',
})
export class PatientFormComponent {
	@Input() entity?: Patient;

	readonly form: FormGroup;
	readonly categoryOptions = PATIENT_CATEGORY_OPTIONS;
	readonly statusOptions = PATIENT_STATUS_OPTIONS;
	readonly visibilityOptions = PATIENT_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			category: ['inpatient', Validators.required],
			fullName: ['', Validators.required],
			sex: ['female', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			buildingUnitInfo: [''],
			mrn: [''],
			heightCm: [0, [Validators.required, Validators.min(1)]],
			weightKg: [0, [Validators.required, Validators.min(0)]],
			ageYears: [0, [Validators.required, Validators.min(0)]],
			bloodType: [''],
			bedNumber: [null],
			wardFloor: [null],
			yearOfBirth: [null],
			status: ['admitted', Validators.required],
			visibility: ['private', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue({
				...this.entity,
				...this.entity.vitals,
			});
		}
	}
}
