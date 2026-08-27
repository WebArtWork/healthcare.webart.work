import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { PanelModule } from '@wawjs/ngx-prime/panel';
import { TagModule } from '@wawjs/ngx-prime/tag';

@Component({
	selector: 'uk-panel-composite-demo',
	imports: [ButtonModule, PanelModule, TagModule],
	templateUrl: './panel-composite-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelCompositeDemo {}
