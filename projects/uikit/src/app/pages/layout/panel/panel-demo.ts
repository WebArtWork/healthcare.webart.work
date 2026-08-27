import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from '@wawjs/ngx-prime/panel';

@Component({
	selector: 'uk-panel-demo',
	imports: [PanelModule],
	templateUrl: './panel-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelDemo {}
