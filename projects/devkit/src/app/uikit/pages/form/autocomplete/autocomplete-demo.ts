import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from '@wawjs/ngx-prime/autocomplete';

@Component({
	selector: 'uk-autocomplete-demo',
	imports: [FormsModule, AutoCompleteModule],
	templateUrl: './autocomplete-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteDemo {
	protected readonly countries = [
		'Australia',
		'Brazil',
		'China',
		'Denmark',
		'Egypt',
		'France',
		'Germany',
		'India',
		'Japan',
		'Kenya',
		'Norway',
		'Portugal',
	];

	protected readonly selectedCountry = signal<string | undefined>(undefined);
	protected readonly selectedCountries = signal<string[]>([]);
	protected readonly filtered = signal<string[]>([]);

	protected search(event: { query: string }): void {
		const query = event.query.toLowerCase();
		this.filtered.set(this.countries.filter((c) => c.toLowerCase().includes(query)));
	}
}
