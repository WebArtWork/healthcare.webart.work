import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselModule } from '@wawjs/ngx-prime/carousel';

@Component({
	selector: 'uk-carousel-demo',
	imports: [CarouselModule],
	templateUrl: './carousel-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDemo {
	protected readonly items = [
		{ name: 'Slide 1', color: '#f87171' },
		{ name: 'Slide 2', color: '#fb923c' },
		{ name: 'Slide 3', color: '#facc15' },
		{ name: 'Slide 4', color: '#4ade80' },
		{ name: 'Slide 5', color: '#60a5fa' },
	];

	protected readonly responsiveOptions = [
		{ breakpoint: '768px', numVisible: 2, numScroll: 1 },
		{ breakpoint: '480px', numVisible: 1, numScroll: 1 },
	];
}
