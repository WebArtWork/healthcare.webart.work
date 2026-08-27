import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';

@Component({
	selector: 'uk-accordion-demo',
	imports: [AccordionModule],
	templateUrl: './accordion-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDemo {}
