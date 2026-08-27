import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollPanelModule } from '@wawjs/ngx-prime/scrollpanel';

@Component({
	selector: 'uk-scrollpanel-demo',
	imports: [ScrollPanelModule],
	templateUrl: './scrollpanel-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollPanelDemo {}
