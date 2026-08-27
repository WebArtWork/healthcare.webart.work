import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { DeveloperShortComponent } from '../../../components/developer/developer-short/developer-short.component';
import { Developer } from '../../../developer/developer.interface';
import { developers } from '../../../developer/developer.data';

@Component({
	imports: [DeveloperShortComponent, FormsModule, CardModule, InputTextModule],
	templateUrl: './developers.component.html',
	styleUrl: './developers.component.scss',
})
export class DevelopersComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Developer[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return developers;

		return developers.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Developer): void {
		this._router.navigate(['/developer', item._id]);
	}
}
