import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { AppointmentRelationType, AppointmentShortComponent } from '../../../components/appointment/appointment-short/appointment-short.component';
import { Appointment, AppointmentStatus, AppointmentType } from '../../../appointment/appointment.interface';
import { appointments } from '../../../appointment/appointment.data';
import { AppointmentRelations, patientForAppointment, relationsForAppointment } from '../../../appointment/appointment-relations';
import { PatientCategory } from '../../../patient/patient.interface';

interface SelectOption<T> {
	label: string;
	value: T;
}

const PATIENT_CATEGORY_LABELS: Record<PatientCategory, string> = {
	inpatient: 'Стаціонарний',
	outpatient: 'Амбулаторний',
	emergency: 'Невідкладна допомога',
	'day-case': 'Денний стаціонар',
	icu: 'Реанімація',
	maternity: 'Пологове відділення',
	pediatric: 'Педіатрія',
	surgical: 'Хірургія',
	psychiatric: 'Психіатрія',
	rehabilitation: 'Реабілітація',
	palliative: 'Паліативна допомога',
	observation: 'Спостереження',
	transfer: 'Переведення',
};

const APPOINTMENT_TYPE_LABELS: Record<AppointmentType, string> = {
	consultation: 'Консультація',
	procedure: 'Процедура',
	'follow-up': 'Повторний прийом',
	emergency: 'Невідкладна допомога',
	screening: 'Обстеження',
	other: 'Інше',
};

const APPOINTMENT_STATUS_LABELS: Record<AppointmentStatus, string> = {
	draft: 'Чернетка',
	'pending-confirmation': 'Очікує підтвердження',
	scheduled: 'Заплановано',
	'checked-in': 'Пацієнт прибув',
	completed: 'Завершено',
	cancelled: 'Скасовано',
	'no-show': 'Неявка',
	rescheduled: 'Перенесено',
};

@Component({
	imports: [
		AppointmentShortComponent,
		FormsModule,
		RouterLink,
		ButtonModule,
		InputTextModule,
		SelectModule,
		MultiSelectModule,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
})
export class ExploreComponent {
	private readonly _router = inject(Router);

	readonly patientCategoryOptions: SelectOption<PatientCategory>[] = Object.entries(
		PATIENT_CATEGORY_LABELS,
	).map(([value, label]) => ({ value: value as PatientCategory, label }));

	readonly appointmentTypeOptions: SelectOption<AppointmentType>[] = Object.entries(
		APPOINTMENT_TYPE_LABELS,
	).map(([value, label]) => ({ value: value as AppointmentType, label }));

	readonly appointmentStatusOptions: SelectOption<AppointmentStatus>[] = Object.entries(
		APPOINTMENT_STATUS_LABELS,
	).map(([value, label]) => ({ value: value as AppointmentStatus, label }));

	readonly searchTerm = signal('');
	readonly selectedPatientCategories = signal<PatientCategory[]>([]);
	readonly selectedAppointmentType = signal<AppointmentType | null>(null);
	readonly selectedStatus = signal<AppointmentStatus | null>(null);

	readonly results = computed<{ appointment: Appointment; relations: AppointmentRelations }[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();
		const types = this.selectedPatientCategories();
		const appointmentType = this.selectedAppointmentType();
		const status = this.selectedStatus();

		return appointments
			.filter((item) => {
				const patient = patientForAppointment(item);

				if (term) {
					const haystack = [
						item.title,
						item.location,
						patient?.city,
						patient?.address,
					]
						.filter(Boolean)
						.join(' ')
						.toLowerCase();
					if (!haystack.includes(term)) {
						return false;
					}
				}

				if (types.length && (!patient || !types.includes(patient.category))) {
					return false;
				}

				if (appointmentType && item.appointmentType !== appointmentType) {
					return false;
				}

				if (status && item.status !== status) {
					return false;
				}

				return true;
			})
			.map((appointment) => ({ appointment, relations: relationsForAppointment(appointment) }));
	});

	view(item: Appointment): void {
		this._router.navigate(['/appointment', item._id]);
	}

	viewRelation(relation: { type: AppointmentRelationType; id: string }): void {
		this._router.navigate(['/', relation.type, relation.id]);
	}
}
