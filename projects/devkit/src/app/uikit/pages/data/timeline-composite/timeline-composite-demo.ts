import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TimelineModule } from '@wawjs/ngx-prime/timeline';

@Component({
	selector: 'uk-timeline-composite-demo',
	imports: [ButtonModule, CardModule, TagModule, TimelineModule],
	templateUrl: './timeline-composite-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineCompositeDemo {
	protected readonly events = [
		{
			status: 'Order Placed',
			date: 'Oct 15, 2023 — 10:30',
			icon: 'pi pi-shopping-cart',
			color: '#60a5fa',
			description: 'Your order #10234 has been placed successfully.',
		},
		{
			status: 'Processing',
			date: 'Oct 15, 2023 — 14:00',
			icon: 'pi pi-cog',
			color: '#a78bfa',
			description: 'Your order is being prepared for shipment.',
		},
		{
			status: 'Shipped',
			date: 'Oct 16, 2023 — 09:15',
			icon: 'pi pi-truck',
			color: '#fbbf24',
			description: 'Package handed to the carrier, tracking available.',
		},
		{
			status: 'Delivered',
			date: 'Oct 17, 2023 — 16:45',
			icon: 'pi pi-check',
			color: '#4ade80',
			description: 'Delivered and signed for at the front desk.',
		},
	];
}
