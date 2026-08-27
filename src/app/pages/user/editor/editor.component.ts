import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { DepartmentFormComponent } from '../../../components/department/department-form/department-form.component';
import { DoctorFormComponent } from '../../../components/doctor/doctor-form/doctor-form.component';
import { FacilityFormComponent } from '../../../components/facility/facility-form/facility-form.component';
import { NetworkFormComponent } from '../../../components/network/network-form/network-form.component';
import { ListingFormComponent } from '../../../components/listing/listing-form/listing-form.component';
import { PatientFormComponent } from '../../../components/patient/patient-form/patient-form.component';
import { RecordFormComponent } from '../../../components/record/record-form/record-form.component';

type EntityType =
	| 'patient'
	| 'listing'
	| 'record'
	| 'facility'
	| 'network'
	| 'department'
	| 'doctor';

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
		PatientFormComponent,
		ListingFormComponent,
		RecordFormComponent,
		FacilityFormComponent,
		NetworkFormComponent,
		DepartmentFormComponent,
		DoctorFormComponent,
	],
	templateUrl: './editor.component.html',
	styleUrl: './editor.component.scss',
})
export class EditorComponent {
	private readonly _messageService = inject(MessageService);

	readonly options: EntityOption[] = [
		{ label: 'Пацієнт', value: 'patient' },
		{ label: 'Оголошення', value: 'listing' },
		{ label: 'Медичний запис', value: 'record' },
		{ label: 'Заклад', value: 'facility' },
		{ label: 'Мережа', value: 'network' },
		{ label: 'Відділення', value: 'department' },
		{ label: 'Лікар', value: 'doctor' },
	];

	readonly selectedType = signal<EntityType>('patient');

	private readonly _patientForm = viewChild(PatientFormComponent);
	private readonly _listingForm = viewChild(ListingFormComponent);
	private readonly _recordForm = viewChild(RecordFormComponent);
	private readonly _facilityForm = viewChild(FacilityFormComponent);
	private readonly _networkForm = viewChild(NetworkFormComponent);
	private readonly _departmentForm = viewChild(DepartmentFormComponent);
	private readonly _doctorForm = viewChild(DoctorFormComponent);

	private readonly _activeForm = computed(() => {
		switch (this.selectedType()) {
			case 'patient':
				return this._patientForm()?.form;
			case 'listing':
				return this._listingForm()?.form;
			case 'record':
				return this._recordForm()?.form;
			case 'facility':
				return this._facilityForm()?.form;
			case 'network':
				return this._networkForm()?.form;
			case 'department':
				return this._departmentForm()?.form;
			case 'doctor':
				return this._doctorForm()?.form;
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
