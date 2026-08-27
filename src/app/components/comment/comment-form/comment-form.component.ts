import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CommentEntityType, EntityComment } from '../../../comment/comment.interface';

const ENTITY_TYPE_OPTIONS: { value: CommentEntityType; label: string }[] = [
	{ value: 'patient', label: 'Пацієнт' },
	{ value: 'appointment', label: 'Прийом' },
	{ value: 'facility', label: 'Заклад' },
	{ value: 'network', label: 'Мережа' },
	{ value: 'department', label: 'Відділення' },
	{ value: 'doctor', label: 'Лікар' },
	{ value: 'user', label: 'Користувач' },
];

@Component({
	selector: 'app-comment-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, SelectModule, InputNumberModule, TextareaModule, ButtonModule, TranslateDirective],
	templateUrl: './comment-form.component.html',
	styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent {
	@Input() entity?: EntityComment;

	readonly form: FormGroup;
	readonly entityTypeOptions = ENTITY_TYPE_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			entityType: ['patient', Validators.required],
			rating: [null, [Validators.min(1), Validators.max(5)]],
			text: ['', [Validators.required, Validators.maxLength(2000)]],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
