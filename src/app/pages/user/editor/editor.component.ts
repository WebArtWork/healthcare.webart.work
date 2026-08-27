import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { AgencyFormComponent } from '../../../components/agency/agency-form/agency-form.component';
import { AgentFormComponent } from '../../../components/agent/agent-form/agent-form.component';
import { ComplexFormComponent } from '../../../components/complex/complex-form/complex-form.component';
import { DeveloperFormComponent } from '../../../components/developer/developer-form/developer-form.component';
import { ListingFormComponent } from '../../../components/listing/listing-form/listing-form.component';
import { PropertyFormComponent } from '../../../components/property/property-form/property-form.component';
import { RecordFormComponent } from '../../../components/record/record-form/record-form.component';

type EntityType =
	| 'property'
	| 'listing'
	| 'record'
	| 'complex'
	| 'developer'
	| 'agency'
	| 'agent';

interface EntityOption {
	label: string;
	value: EntityType;
}

@Component({
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		SelectButtonModule,
		PropertyFormComponent,
		ListingFormComponent,
		RecordFormComponent,
		ComplexFormComponent,
		DeveloperFormComponent,
		AgencyFormComponent,
		AgentFormComponent,
	],
	templateUrl: './editor.component.html',
	styleUrl: './editor.component.scss',
})
export class EditorComponent {
	private readonly _messageService = inject(MessageService);

	readonly options: EntityOption[] = [
		{ label: 'Об’єкт', value: 'property' },
		{ label: 'Оголошення', value: 'listing' },
		{ label: 'Запис історії', value: 'record' },
		{ label: 'Комплекс', value: 'complex' },
		{ label: 'Забудовник', value: 'developer' },
		{ label: 'Агентство', value: 'agency' },
		{ label: 'Агент', value: 'agent' },
	];

	readonly selectedType = signal<EntityType>('property');

	private readonly _propertyForm = viewChild(PropertyFormComponent);
	private readonly _listingForm = viewChild(ListingFormComponent);
	private readonly _recordForm = viewChild(RecordFormComponent);
	private readonly _complexForm = viewChild(ComplexFormComponent);
	private readonly _developerForm = viewChild(DeveloperFormComponent);
	private readonly _agencyForm = viewChild(AgencyFormComponent);
	private readonly _agentForm = viewChild(AgentFormComponent);

	private readonly _activeForm = computed(() => {
		switch (this.selectedType()) {
			case 'property':
				return this._propertyForm()?.form;
			case 'listing':
				return this._listingForm()?.form;
			case 'record':
				return this._recordForm()?.form;
			case 'complex':
				return this._complexForm()?.form;
			case 'developer':
				return this._developerForm()?.form;
			case 'agency':
				return this._agencyForm()?.form;
			case 'agent':
				return this._agentForm()?.form;
			default:
				return undefined;
		}
	});

	wValidate(): void {
		const form = this._activeForm();
		if (!form) {
			return;
		}

		form.markAllAsTouched();
		form.updateValueAndValidity();

		if (form.valid) {
			this._messageService.add({
				severity: 'success',
				summary: 'Форма валідна',
				detail: 'Дані пройшли валідацію. Це демо-режим — нічого не збережено.',
			});
		} else {
			this._messageService.add({
				severity: 'error',
				summary: 'Форма містить помилки',
				detail: 'Перевірте позначені поля та спробуйте ще раз.',
			});
		}
	}
}
