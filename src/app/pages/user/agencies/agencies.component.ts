import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { AgencyShortComponent } from '../../../components/agency/agency-short/agency-short.component';
import { Agency } from '../../../agency/agency.interface';
import { agencies } from '../../../agency/agency.data';

@Component({
	imports: [AgencyShortComponent, FormsModule, CardModule, InputTextModule],
	templateUrl: './agencies.component.html',
	styleUrl: './agencies.component.scss',
})
export class AgenciesComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Agency[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return agencies;

		return agencies.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Agency): void {
		this._router.navigate(['/agency', item._id]);
	}
}
