import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from '@wawjs/ngx-prime/listbox';

@Component({
	selector: 'uk-listbox-demo',
	imports: [FormsModule, ListboxModule],
	templateUrl: './listbox-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListboxDemo {
	protected readonly cities = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	];

	protected readonly selectedCity = signal<{ name: string; code: string } | undefined>(undefined);
	protected readonly selectedCities = signal<{ name: string; code: string }[]>([]);
}
