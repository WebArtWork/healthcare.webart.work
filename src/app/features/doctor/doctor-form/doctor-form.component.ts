import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Doctor } from '../doctor.interface';

@Component({
	selector: 'app-doctor-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './doctor-form.component.html',
	styleUrl: './doctor-form.component.scss',
})
export class DoctorFormComponent {
	@Input() entity?: Doctor;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			displayName: ['', Validators.required],
			photo: [''],
			licenseNumber: ['', Validators.required],
			bio: [''],
			country: ['', Validators.required],
			city: ['', Validators.required],
			yearsExperience: [0, [Validators.min(0), Validators.max(80)]],
			contactPhone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
			contactEmail: ['', [Validators.required, Validators.email]],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
