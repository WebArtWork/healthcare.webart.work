import { RecordStatus, RecordType, RecordVisibility } from './record.interface';

/**
 * Ukrainian labels for property-record enums, shared between the record
 * form and the record detail view so both stay in sync.
 */
export const RECORD_TYPE_OPTIONS: { value: RecordType; label: string }[] = [
	{ value: 'infrastructure', label: 'Інфраструктура' },
	{ value: 'utility', label: 'Комунальні послуги' },
	{ value: 'maintenance', label: 'Обслуговування' },
	{ value: 'repair', label: 'Ремонт' },
	{ value: 'renovation', label: 'Реконструкція' },
	{ value: 'expense', label: 'Витрата' },
	{ value: 'inspection', label: 'Огляд' },
	{ value: 'incident', label: 'Інцидент' },
	{ value: 'damage', label: 'Пошкодження' },
	{ value: 'improvement', label: 'Покращення' },
	{ value: 'equipment-installation', label: 'Встановлення обладнання' },
	{ value: 'meter-replacement', label: 'Заміна лічильника' },
	{ value: 'document', label: 'Документ' },
	{ value: 'ownership-change', label: 'Зміна власника' },
	{ value: 'tenant-change', label: 'Зміна орендаря' },
	{ value: 'valuation', label: 'Оцінка' },
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
	{ value: 'shared-with-owners-tenants', label: 'Доступ власникам і орендарям' },
	{ value: 'shared-with-agent-agency-contractor-manager', label: 'Доступ агенту, агенції, підряднику, керуючому' },
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
