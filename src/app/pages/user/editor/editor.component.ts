import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { DepartmentFormComponent } from '../../../features/department/department-form/department-form.component';
import { DoctorFormComponent } from '../../../features/doctor/doctor-form/doctor-form.component';
import { FacilityFormComponent } from '../../../features/facility/facility-form/facility-form.component';
import { NetworkFormComponent } from '../../../features/network/network-form/network-form.component';
import { AppointmentFormComponent } from '../../../features/appointment/appointment-form/appointment-form.component';
import { PatientFormComponent } from '../../../features/patient/patient-form/patient-form.component';
import { RecordFormComponent } from '../../../features/record/record-form/record-form.component';

type EntityType =
	| 'patient'
	| 'appointment'
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
		AppointmentFormComponent,
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
		{ label: 'Запис на прийом', value: 'appointment' },
		{ label: 'Медичний запис', value: 'record' },
		{ label: 'Заклад', value: 'facility' },
		{ label: 'Мережа', value: 'network' },
		{ label: 'Відділення', value: 'department' },
		{ label: 'Лікар', value: 'doctor' },
	];

	readonly selectedType = signal<EntityType>('patient');

	private readonly _patientForm = viewChild(PatientFormComponent);
	private readonly _appointmentForm = viewChild(AppointmentFormComponent);
	private readonly _recordForm = viewChild(RecordFormComponent);
	private readonly _facilityForm = viewChild(FacilityFormComponent);
	private readonly _networkForm = viewChild(NetworkFormComponent);
	private readonly _departmentForm = viewChild(DepartmentFormComponent);
	private readonly _doctorForm = viewChild(DoctorFormComponent);

	private readonly _activeForm = computed(() => {
		switch (this.selectedType()) {
			case 'patient':
				return this._patientForm()?.form;
			case 'appointment':
				return this._appointmentForm()?.form;
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
