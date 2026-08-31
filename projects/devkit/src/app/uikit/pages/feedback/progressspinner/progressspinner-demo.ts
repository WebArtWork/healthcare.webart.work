import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressSpinnerModule } from '@wawjs/ngx-prime/progressspinner';

@Component({
	selector: 'uk-progressspinner-demo',
	imports: [ProgressSpinnerModule],
	templateUrl: './progressspinner-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressSpinnerDemo {}
