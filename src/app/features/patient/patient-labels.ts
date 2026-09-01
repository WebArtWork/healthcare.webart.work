import { PatientStatus, PatientCategory, PatientVisibility } from './patient.interface';

/**
 * Ukrainian labels for patient enums, shared between the patient form
 * and the patient detail view so both stay in sync.
 */
export const PATIENT_CATEGORY_OPTIONS: { value: PatientCategory; label: string }[] = [
	{ value: 'inpatient', label: 'Стаціонарний' },
	{ value: 'outpatient', label: 'Амбулаторний' },
	{ value: 'emergency', label: 'Невідкладна допомога' },
	{ value: 'day-case', label: 'Денний стаціонар' },
	{ value: 'icu', label: 'Реанімація' },
	{ value: 'maternity', label: 'Пологове відділення' },
	{ value: 'pediatric', label: 'Педіатрія' },
	{ value: 'surgical', label: 'Хірургія' },
	{ value: 'psychiatric', label: 'Психіатрія' },
	{ value: 'rehabilitation', label: 'Реабілітація' },
	{ value: 'palliative', label: 'Паліативна допомога' },
	{ value: 'observation', label: 'Спостереження' },
	{ value: 'transfer', label: 'Переведення' },
];

export const PATIENT_STATUS_OPTIONS: { value: PatientStatus; label: string }[] = [
	{ value: 'admitted', label: 'Госпіталізований' },
	{ value: 'scheduled', label: 'Заплановано' },
	{ value: 'discharged', label: 'Виписаний' },
	{ value: 'in-treatment', label: 'На лікуванні' },
	{ value: 'stable', label: 'Стабільний' },
	{ value: 'critical', label: 'Критичний' },
	{ value: 'under-observation', label: 'Під наглядом' },
	{ value: 'archived', label: 'В архіві' },
	{ value: 'unverified', label: 'Не підтверджено' },
];

export const PATIENT_VISIBILITY_OPTIONS: { value: PatientVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'summary-only', label: 'Лише зведення' },
	{ value: 'limited-preview', label: 'Обмежений перегляд' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared', label: 'Спільний доступ' },
	{ value: 'managed-by-care-team', label: 'Керується лікарською командою' },
];

export const PATIENT_CATEGORY_LABELS: Record<PatientCategory, string> = Object.fromEntries(
	PATIENT_CATEGORY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<PatientCategory, string>;

export const PATIENT_STATUS_LABELS: Record<PatientStatus, string> = Object.fromEntries(
	PATIENT_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<PatientStatus, string>;

export const PATIENT_VISIBILITY_LABELS: Record<PatientVisibility, string> = Object.fromEntries(
	PATIENT_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<PatientVisibility, string>;
