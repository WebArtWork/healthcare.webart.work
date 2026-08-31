import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerModule } from '@wawjs/ngx-prime/divider';

@Component({
	selector: 'uk-divider-demo',
	imports: [DividerModule],
	templateUrl: './divider-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerDemo {}
