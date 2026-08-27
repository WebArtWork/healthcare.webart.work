import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DataViewModule } from '@wawjs/ngx-prime/dataview';
import { TagModule } from '@wawjs/ngx-prime/tag';

interface Product {
	id: string;
	name: string;
	price: number;
	inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

@Component({
	selector: 'uk-dataview-demo',
	imports: [ButtonModule, DataViewModule, TagModule],
	templateUrl: './dataview-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataViewDemo {
	protected readonly products = signal<Product[]>([
		{ id: '1', name: 'Bamboo Watch', price: 65, inventoryStatus: 'INSTOCK' },
		{ id: '2', name: 'Black Watch', price: 72, inventoryStatus: 'LOWSTOCK' },
		{ id: '3', name: 'Blue Band', price: 79, inventoryStatus: 'OUTOFSTOCK' },
		{ id: '4', name: 'Blue T-Shirt', price: 29, inventoryStatus: 'INSTOCK' },
		{ id: '5', name: 'Bracelet', price: 15, inventoryStatus: 'INSTOCK' },
	]);

	protected severity(status: Product['inventoryStatus']): 'success' | 'warn' | 'danger' {
		if (status === 'INSTOCK') return 'success';
		if (status === 'LOWSTOCK') return 'warn';
		return 'danger';
	}
}
