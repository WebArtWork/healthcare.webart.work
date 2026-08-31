import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';

@Component({
	selector: 'uk-card-demo',
	imports: [CardModule, ButtonModule],
	templateUrl: './card-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDemo {}
