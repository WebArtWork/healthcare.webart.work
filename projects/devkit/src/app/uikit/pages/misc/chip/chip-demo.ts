import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChipModule } from '@wawjs/ngx-prime/chip';

@Component({
	selector: 'uk-chip-demo',
	imports: [ChipModule],
	templateUrl: './chip-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipDemo {}
