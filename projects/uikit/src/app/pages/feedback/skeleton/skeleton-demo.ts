import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkeletonModule } from '@wawjs/ngx-prime/skeleton';

@Component({
	selector: 'uk-skeleton-demo',
	imports: [SkeletonModule],
	templateUrl: './skeleton-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonDemo {}
