import { RecordStatus, RecordType, RecordVisibility } from './record.interface';

/**
 * Ukrainian labels for medical-record enums, shared between the record
 * form and the record detail view so both stay in sync.
 */
export const RECORD_TYPE_OPTIONS: { value: RecordType; label: string }[] = [
	{ value: 'diagnosis', label: 'Діагноз' },
	{ value: 'symptom', label: 'Симптом' },
	{ value: 'medication', label: 'Призначення ліків' },
	{ value: 'lab-result', label: 'Результат аналізу' },
	{ value: 'vitals', label: 'Життєві показники' },
	{ value: 'procedure', label: 'Процедура' },
	{ value: 'imaging', label: 'Візуалізація' },
	{ value: 'vaccination', label: 'Вакцинація' },
	{ value: 'allergy', label: 'Алергія' },
	{ value: 'referral', label: 'Направлення' },
	{ value: 'admission', label: 'Госпіталізація' },
	{ value: 'discharge-summary', label: 'Виписний епікриз' },
	{ value: 'follow-up', label: 'Повторний огляд' },
	{ value: 'consultation', label: 'Консультація' },
	{ value: 'document', label: 'Документ' },
	{ value: 'insurance-update', label: 'Оновлення страхування' },
	{ value: 'care-team-change', label: 'Зміна лікуючої команди' },
	{ value: 'note', label: 'Примітка' },
];

export const RECORD_STATUS_OPTIONS: { value: RecordStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-progress', label: 'В процесі' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

export const RECORD_VISIBILITY_OPTIONS: { value: RecordVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'public-summary-private-details', label: 'Публічний огляд, приватні деталі' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-users', label: 'Доступ вибраним користувачам' },
	{ value: 'shared-with-patient-family', label: 'Доступ пацієнту та родині' },
	{ value: 'shared-with-doctor-department-insurer-coordinator', label: 'Доступ лікарю, клініці, страховику, куратору' },
];

export const RECORD_TYPE_LABELS: Record<RecordType, string> = Object.fromEntries(
	RECORD_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordType, string>;

export const RECORD_STATUS_LABELS: Record<RecordStatus, string> = Object.fromEntries(
	RECORD_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordStatus, string>;

export const RECORD_VISIBILITY_LABELS: Record<RecordVisibility, string> = Object.fromEntries(
	RECORD_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordVisibility, string>;
