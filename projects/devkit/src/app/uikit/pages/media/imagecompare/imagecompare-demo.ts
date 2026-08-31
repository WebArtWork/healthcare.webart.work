import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageCompareModule } from '@wawjs/ngx-prime/imagecompare';

function solidSvg(color: string): string {
	return (
		'data:image/svg+xml;utf8,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250"><rect width="100%" height="100%" fill="${color}"/></svg>`,
		)
	);
}

@Component({
	selector: 'uk-imagecompare-demo',
	imports: [ImageCompareModule],
	templateUrl: './imagecompare-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCompareDemo {
	protected readonly before = solidSvg('#94a3b8');
	protected readonly after = solidSvg('#4ade80');
}
