import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';

@Component({
	selector: 'uk-multiselect-demo',
	imports: [FormsModule, MultiSelectModule],
	templateUrl: './multiselect-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;

	protected readonly cities = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	];

	protected readonly selectedCities = signal<{ name: string; code: string }[]>([]);
}
