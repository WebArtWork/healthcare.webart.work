import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TooltipModule } from '@wawjs/ngx-prime/tooltip';

@Component({
	selector: 'uk-tooltip-demo',
	imports: [ButtonModule, TooltipModule],
	templateUrl: './tooltip-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemo {}
