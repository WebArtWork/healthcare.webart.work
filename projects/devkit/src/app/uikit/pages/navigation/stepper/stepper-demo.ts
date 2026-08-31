import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { StepperModule } from '@wawjs/ngx-prime/stepper';

@Component({
	selector: 'uk-stepper-demo',
	imports: [ButtonModule, StepperModule],
	templateUrl: './stepper-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperDemo {}
