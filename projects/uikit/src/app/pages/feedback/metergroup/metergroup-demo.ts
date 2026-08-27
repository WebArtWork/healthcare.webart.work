import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MeterGroupModule } from '@wawjs/ngx-prime/metergroup';

@Component({
	selector: 'uk-metergroup-demo',
	imports: [MeterGroupModule],
	templateUrl: './metergroup-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeterGroupDemo {
	protected readonly storage = [
		{ label: 'Documents', color: '#34d399', value: 15 },
		{ label: 'Photos', color: '#fbbf24', value: 20 },
		{ label: 'Videos', color: '#60a5fa', value: 30 },
		{ label: 'Other', color: '#a78bfa', value: 10 },
	];
}
