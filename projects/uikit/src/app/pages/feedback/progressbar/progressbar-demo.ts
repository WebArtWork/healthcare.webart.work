import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressBarModule } from '@wawjs/ngx-prime/progressbar';

@Component({
	selector: 'uk-progressbar-demo',
	imports: [ProgressBarModule],
	templateUrl: './progressbar-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarDemo {}
