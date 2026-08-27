import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { ListingRelationType, ListingShortComponent } from '../../../components/listing/listing-short/listing-short.component';
import { Listing, ListingStatus, ListingType } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { ListingRelations, patientForListing, relationsForListing } from '../../../listing/listing-relations';
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

const LISTING_TYPE_LABELS: Record<ListingType, string> = {
	sale: 'Продаж',
	'long-term-rent': 'Довгострокова оренда',
	'short-term-rent': 'Короткострокова оренда',
	'commercial-lease': 'Комерційна оренда',
	'land-sale': 'Продаж землі',
	other: 'Інше',
};

const LISTING_STATUS_LABELS: Record<ListingStatus, string> = {
	draft: 'Чернетка',
	'pending-review': 'На розгляді',
	active: 'Активне',
	reserved: 'Заброньоване',
	rented: 'Здано в оренду',
	sold: 'Продано',
	expired: 'Термін минув',
	paused: 'Призупинено',
	rejected: 'Відхилено',
	archived: 'Архівоване',
};

@Component({
	imports: [
		ListingShortComponent,
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

	readonly listingTypeOptions: SelectOption<ListingType>[] = Object.entries(
		LISTING_TYPE_LABELS,
	).map(([value, label]) => ({ value: value as ListingType, label }));

	readonly listingStatusOptions: SelectOption<ListingStatus>[] = Object.entries(
		LISTING_STATUS_LABELS,
	).map(([value, label]) => ({ value: value as ListingStatus, label }));

	readonly searchTerm = signal('');
	readonly selectedPatientCategories = signal<PatientCategory[]>([]);
	readonly selectedListingType = signal<ListingType | null>(null);
	readonly selectedStatus = signal<ListingStatus | null>(null);

	readonly results = computed<{ listing: Listing; relations: ListingRelations }[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();
		const types = this.selectedPatientCategories();
		const listingType = this.selectedListingType();
		const status = this.selectedStatus();

		return listings
			.filter((item) => {
				const patient = patientForListing(item);

				if (term) {
					const haystack = [
						item.title,
						item.publicLocation,
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

				if (listingType && item.listingType !== listingType) {
					return false;
				}

				if (status && item.status !== status) {
					return false;
				}

				return true;
			})
			.map((listing) => ({ listing, relations: relationsForListing(listing) }));
	});

	view(item: Listing): void {
		this._router.navigate(['/listing', item._id]);
	}

	viewRelation(relation: { type: ListingRelationType; id: string }): void {
		this._router.navigate(['/', relation.type, relation.id]);
	}
}
