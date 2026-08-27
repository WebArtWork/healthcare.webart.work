import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { PropertyShortComponent } from '../../../components/property/property-short/property-short.component';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';

@Component({
	imports: [PropertyShortComponent, FormsModule, RouterLink, ButtonModule, InputTextModule],
	templateUrl: './properties.component.html',
	styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Property[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return properties;

		return properties.filter((item) => {
			const haystack = [item.address, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Property): void {
		this._router.navigate(['/property', item._id]);
	}
}
