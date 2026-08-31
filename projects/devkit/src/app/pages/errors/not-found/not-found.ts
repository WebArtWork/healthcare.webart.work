import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';

@Component({
	selector: 'sc-not-found',
	imports: [ButtonModule, RouterLink],
	templateUrl: './not-found.html',
	styleUrl: './not-found.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {}
