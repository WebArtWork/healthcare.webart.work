import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	PLATFORM_ID,
	effect,
	inject,
	input,
	viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Renders a QR code onto a canvas. No API key/server needed — encodes client-side. */
@Component({
	selector: 'app-qr-code',
	template: `<canvas #canvas class="qr-code"></canvas>`,
	styles: [
		`
			:host {
				display: inline-block;
			}

			.qr-code {
				display: block;
				max-width: 100%;
				height: auto;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrCodeComponent implements AfterViewInit {
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

	readonly value = input.required<string>();
	readonly size = input(220);

	private _viewReady = false;

	constructor() {
		effect(() => {
			// Track value()/size() so re-renders happen on change; bail until the view exists.
			const value = this.value();
			const size = this.size();
			if (!this._viewReady) return;
			this._render(value, size);
		});
	}

	ngAfterViewInit(): void {
		this._viewReady = true;
		this._render(this.value(), this.size());
	}

	private async _render(value: string, size: number): Promise<void> {
		if (!isPlatformBrowser(this._platformId) || !value) return;

		try {
			// `qrcode` is CommonJS; depending on bundler interop the exports can land
			// directly on the namespace or under `.default` — handle both.
			const mod: unknown = await import('qrcode');
			const toCanvas = (mod as { toCanvas?: typeof import('qrcode').toCanvas; default?: typeof import('qrcode') })
				.toCanvas ?? (mod as { default?: typeof import('qrcode') }).default?.toCanvas;
			if (!toCanvas) throw new Error('qrcode module did not expose toCanvas');

			await toCanvas(this._canvas().nativeElement, value, { width: size, margin: 1 });
		} catch (error) {
			console.error('Failed to render QR code', error);
		}
	}
}
