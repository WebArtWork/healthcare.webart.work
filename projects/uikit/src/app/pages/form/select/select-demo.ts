import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from '@wawjs/ngx-prime/select';

interface City {
	name: string;
	code: string;
}

@Component({
	selector: 'uk-select-demo',
	imports: [SelectModule, FormsModule],
	templateUrl: './select-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDemo {
	protected readonly cities: City[] = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	];

	// Bound via [(ngModel)] (template-driven forms) — plain property, not a signal,
	// since ngModel's two-way binding writes through property assignment.
	protected selectedCity: City | null = null;
}
