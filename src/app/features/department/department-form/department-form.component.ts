import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Department } from '../department.interface';

@Component({
	selector: 'app-department-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputNumberModule, InputTextModule, TextareaModule, TranslateDirective],
	templateUrl: './department-form.component.html',
	styleUrl: './department-form.component.scss',
})
export class DepartmentFormComponent {
	@Input() entity?: Department;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			logo: [''],
			country: ['', Validators.required],
			city: ['', Validators.required],
			foundedYear: [null, [Validators.min(1800), Validators.max(2100)]],
			phone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
			email: ['', [Validators.required, Validators.email]],
			website: [''],
			address: [''],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue({ ...this.entity, ...this.entity.contact });
		}
	}
}
