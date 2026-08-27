import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SortableColumn, SortIcon, Table } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';

interface Product {
	code: string;
	name: string;
	category: string;
	price: number;
	status: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

@Component({
	selector: 'uk-table-demo',
	imports: [Table, SortableColumn, SortIcon, TagModule, CurrencyPipe],
	templateUrl: './table-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDemo {
	protected readonly products: Product[] = [
		{ code: 'P001', name: 'Desk Lamp', category: 'Home', price: 29.99, status: 'INSTOCK' },
		{ code: 'P002', name: 'Mechanical Keyboard', category: 'Electronics', price: 89.5, status: 'LOWSTOCK' },
		{ code: 'P003', name: 'Standing Mat', category: 'Office', price: 45, status: 'OUTOFSTOCK' },
		{ code: 'P004', name: 'Monitor Stand', category: 'Office', price: 39.99, status: 'INSTOCK' },
	];

	protected severity(status: Product['status']): 'success' | 'warn' | 'danger' {
		if (status === 'INSTOCK') return 'success';
		if (status === 'LOWSTOCK') return 'warn';
		return 'danger';
	}
}
