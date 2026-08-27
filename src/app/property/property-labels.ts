import { PropertyStatus, PropertyType, PropertyVisibility } from './property.interface';

/**
 * Ukrainian labels for property enums, shared between the property form
 * and the property detail view so both stay in sync.
 */
export const PROPERTY_TYPE_OPTIONS: { value: PropertyType; label: string }[] = [
	{ value: 'apartment', label: 'Квартира' },
	{ value: 'house', label: 'Будинок' },
	{ value: 'room', label: 'Кімната' },
	{ value: 'land', label: 'Земельна ділянка' },
	{ value: 'office', label: 'Офіс' },
	{ value: 'retail-space', label: 'Торгове приміщення' },
	{ value: 'warehouse', label: 'Склад' },
	{ value: 'garage', label: 'Гараж' },
	{ value: 'parking-space', label: 'Паркомісце' },
	{ value: 'commercial-building', label: 'Комерційна будівля' },
	{ value: 'industrial-property', label: 'Промислова нерухомість' },
	{ value: 'agricultural-property', label: 'Сільськогосподарська нерухомість' },
	{ value: 'unfinished-construction', label: 'Незавершене будівництво' },
];

export const PROPERTY_STATUS_OPTIONS: { value: PropertyStatus; label: string }[] = [
	{ value: 'active', label: 'Активний' },
	{ value: 'under-construction', label: 'На стадії будівництва' },
	{ value: 'completed', label: 'Завершений' },
	{ value: 'occupied', label: 'Зайнятий' },
	{ value: 'vacant', label: 'Вільний' },
	{ value: 'under-renovation', label: 'На реконструкції' },
	{ value: 'damaged', label: 'Пошкоджений' },
	{ value: 'archived', label: 'В архіві' },
	{ value: 'unverified', label: 'Не перевірений' },
];

export const PROPERTY_VISIBILITY_OPTIONS: { value: PropertyVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'listing-only', label: 'Лише в оголошенні' },
	{ value: 'limited-preview', label: 'Обмежений перегляд' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared', label: 'Спільний доступ' },
	{ value: 'managed-by-representatives', label: 'Керується представниками' },
];

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = Object.fromEntries(
	PROPERTY_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<PropertyType, string>;

export const PROPERTY_STATUS_LABELS: Record<PropertyStatus, string> = Object.fromEntries(
	PROPERTY_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<PropertyStatus, string>;

export const PROPERTY_VISIBILITY_LABELS: Record<PropertyVisibility, string> = Object.fromEntries(
	PROPERTY_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<PropertyVisibility, string>;
