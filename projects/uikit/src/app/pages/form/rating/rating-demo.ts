import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from '@wawjs/ngx-prime/rating';

@Component({
	selector: 'uk-rating-demo',
	imports: [FormsModule, RatingModule],
	templateUrl: './rating-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingDemo {
	protected readonly value = signal(3);
}
