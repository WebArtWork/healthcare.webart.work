import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SplitterModule } from '@wawjs/ngx-prime/splitter';

@Component({
	selector: 'uk-splitter-demo',
	imports: [SplitterModule],
	templateUrl: './splitter-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterDemo {}
