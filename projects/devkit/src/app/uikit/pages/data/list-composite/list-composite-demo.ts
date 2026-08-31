import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DataViewModule } from '@wawjs/ngx-prime/dataview';
import { TagModule } from '@wawjs/ngx-prime/tag';

interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	color: string;
	inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

@Component({
	selector: 'uk-list-composite-demo',
	imports: [ButtonModule, DataViewModule, TagModule],
	templateUrl: './list-composite-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCompositeDemo {
	protected readonly products = signal<Product[]>([
		{
			id: '1',
			name: 'Bamboo Watch',
			description: 'Product description here',
			price: 65,
			color: '#a3a3a3',
			inventoryStatus: 'INSTOCK',
		},
		{
			id: '2',
			name: 'Black Watch',
			description: 'Product description here',
			price: 72,
			color: '#1f2937',
			inventoryStatus: 'LOWSTOCK',
		},
		{
			id: '3',
			name: 'Blue Band',
			description: 'Product description here',
			price: 79,
			color: '#60a5fa',
			inventoryStatus: 'OUTOFSTOCK',
		},
		{
			id: '4',
			name: 'Blue T-Shirt',
			description: 'Product description here',
			price: 29,
			color: '#3b82f6',
			inventoryStatus: 'INSTOCK',
		},
	]);

	protected severity(status: Product['inventoryStatus']): 'success' | 'warn' | 'danger' {
		if (status === 'INSTOCK') return 'success';
		if (status === 'LOWSTOCK') return 'warn';
		return 'danger';
	}
}
