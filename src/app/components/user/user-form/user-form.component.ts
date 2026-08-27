import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-form',
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
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
	@Input() entity?: User;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: ['', Validators.required],
			photo: [''],
			bio: [''],
			country: ['', Validators.required],
			city: ['', Validators.required],
			experienceYears: [0, Validators.min(0)],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue({ ...this.entity, ...this.entity.contact });
		}
	}
}
