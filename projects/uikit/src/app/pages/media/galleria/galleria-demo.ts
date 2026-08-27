import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleriaModule } from '@wawjs/ngx-prime/galleria';

@Component({
	selector: 'uk-galleria-demo',
	imports: [GalleriaModule],
	templateUrl: './galleria-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleriaDemo {
	protected readonly images = [
		{ color: '#f87171', alt: 'Image 1' },
		{ color: '#fb923c', alt: 'Image 2' },
		{ color: '#facc15', alt: 'Image 3' },
		{ color: '#4ade80', alt: 'Image 4' },
	];
}
