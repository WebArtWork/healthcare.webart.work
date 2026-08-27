import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleriaModule } from '@wawjs/ngx-prime/galleria';
import { ImageModule } from '@wawjs/ngx-prime/image';

function solidSvg(color: string): string {
	return (
		'data:image/svg+xml;utf8,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="${color}"/></svg>`,
		)
	);
}

@Component({
	selector: 'uk-media-gallery-demo',
	imports: [GalleriaModule, ImageModule],
	templateUrl: './media-gallery-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaGalleryDemo {
	protected readonly images = [
		{ src: solidSvg('#f87171'), alt: 'Photo 1' },
		{ src: solidSvg('#fb923c'), alt: 'Photo 2' },
		{ src: solidSvg('#facc15'), alt: 'Photo 3' },
		{ src: solidSvg('#4ade80'), alt: 'Photo 4' },
		{ src: solidSvg('#60a5fa'), alt: 'Photo 5' },
	];
}
