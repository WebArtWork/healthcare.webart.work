import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageModule } from '@wawjs/ngx-prime/image';

const SAMPLE_IMAGE =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%2360a5fa"/></svg>'.replace(
			/%23/g,
			'#',
		),
	);

@Component({
	selector: 'uk-image-demo',
	imports: [ImageModule],
	templateUrl: './image-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDemo {
	protected readonly sampleImage = SAMPLE_IMAGE;
}
