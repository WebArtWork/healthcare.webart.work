import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldsetModule } from '@wawjs/ngx-prime/fieldset';

@Component({
	selector: 'uk-fieldset-demo',
	imports: [FieldsetModule],
	templateUrl: './fieldset-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetDemo {}
