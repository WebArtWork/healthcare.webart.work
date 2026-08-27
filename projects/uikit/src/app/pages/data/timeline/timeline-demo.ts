import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineModule } from '@wawjs/ngx-prime/timeline';

@Component({
	selector: 'uk-timeline-demo',
	imports: [TimelineModule],
	templateUrl: './timeline-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineDemo {
	protected readonly events = [
		{ status: 'Ordered', date: '15/10/2023 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
		{ status: 'Processing', date: '15/10/2023 14:00', icon: 'pi pi-cog', color: '#673AB7' },
		{ status: 'Shipped', date: '15/10/2023 16:15', icon: 'pi pi-truck', color: '#FF9800' },
		{ status: 'Delivered', date: '16/10/2023 10:00', icon: 'pi pi-check', color: '#607D8B' },
	];
}
