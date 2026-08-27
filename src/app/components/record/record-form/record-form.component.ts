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
import { PropertyRecord } from '../../../record/record.interface';
import {
	RECORD_STATUS_OPTIONS,
	RECORD_TYPE_OPTIONS,
	RECORD_VISIBILITY_OPTIONS,
} from '../../../record/record-labels';

@Component({
	selector: 'app-record-form',
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
	templateUrl: './record-form.component.html',
	styleUrl: './record-form.component.scss',
})
export class RecordFormComponent {
	@Input() entity?: PropertyRecord;

	readonly form: FormGroup;
	readonly recordTypeOptions = RECORD_TYPE_OPTIONS;
	readonly statusOptions = RECORD_STATUS_OPTIONS;
	readonly visibilityOptions = RECORD_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			recordType: ['maintenance', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			eventDate: ['', Validators.required],
			serviceProvider: [''],
			cost: [null],
			currency: [null],
			quantity: [null],
			units: [''],
			status: ['planned', Validators.required],
			locationInsideProperty: [''],
			visibility: ['private', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
