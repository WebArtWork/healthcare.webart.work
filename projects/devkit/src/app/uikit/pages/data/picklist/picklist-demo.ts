import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PickListModule } from '@wawjs/ngx-prime/picklist';

@Component({
	selector: 'uk-picklist-demo',
	imports: [FormsModule, PickListModule],
	templateUrl: './picklist-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickListDemo {
	protected readonly source = signal([
		{ id: '1', name: 'Bamboo Watch' },
		{ id: '2', name: 'Black Watch' },
		{ id: '3', name: 'Blue Band' },
	]);

	protected readonly target = signal([
		{ id: '4', name: 'Blue T-Shirt' },
		{ id: '5', name: 'Bracelet' },
	]);
}
