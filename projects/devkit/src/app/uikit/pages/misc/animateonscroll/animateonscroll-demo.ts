import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScroll } from '@wawjs/ngx-prime/animateonscroll';

@Component({
	selector: 'uk-animateonscroll-demo',
	imports: [AnimateOnScroll],
	templateUrl: './animateonscroll-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimateOnScrollDemo {}
