import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsModule } from '@wawjs/ngx-prime/tabs';

@Component({
	selector: 'uk-tabs-demo',
	imports: [TabsModule],
	templateUrl: './tabs-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemo {}
