import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { ButtonGroupModule } from '@wawjs/ngx-prime/buttongroup';

@Component({
	selector: 'uk-buttongroup-demo',
	imports: [ButtonModule, ButtonGroupModule],
	templateUrl: './buttongroup-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupDemo {}
