import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '@env';
import { HttpService } from '@wawjs/ngx-http';

/**
 * Talks to the it.webart.work/embed/bridge iframe so a login on one
 * *.webart.work app is picked up by the others without logging in again.
 * See it.webart.work/server/user/embed-login.html for the other side.
 */
@Injectable({ providedIn: 'root' })
export class SessionBridgeService {
	private readonly _httpService = inject(HttpService);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly _bridgeOrigin = _tryOrigin(environment.url);

	private _iframe: HTMLIFrameElement | null = null;
	private _ready = false;
	private _pendingPush: string | null = null;

	/** Call once on app start. Silently adopts a session pushed by another app, if any. */
	init(): void {
		// No bridge origin configured (e.g. local dev without an SSO backend) — nothing to pull from.
		if (!this._isBrowser || !this._bridgeOrigin) return;

		// Already have a token locally (e.g. this app's own login) — nothing to pull.
		if (this._httpService.header('token')) return;

		window.addEventListener('message', this._onMessage);

		this._iframe = document.createElement('iframe');
		this._iframe.style.display = 'none';
		this._iframe.src =
			this._bridgeOrigin +
			'/embed/bridge?origin=' +
			encodeURIComponent(window.location.origin);

		document.body.appendChild(this._iframe);
	}

	/** Call right after a successful login/signup in this app. */
	push(token: string): void {
		if (!this._isBrowser || !this._bridgeOrigin || !token) return;

		if (!this._iframe) {
			// init() wasn't called (or returned early because a token already
			// existed) — set up the iframe now so we have somewhere to push to.
			window.addEventListener('message', this._onMessage);

			this._iframe = document.createElement('iframe');
			this._iframe.style.display = 'none';
			this._iframe.src =
				this._bridgeOrigin +
				'/embed/bridge?origin=' +
				encodeURIComponent(window.location.origin);

			document.body.appendChild(this._iframe);
		}

		if (this._ready) {
			this._send({ action: 'store', token });
		} else {
			this._pendingPush = token;
		}
	}

	private _send(data: unknown): void {
		this._iframe?.contentWindow?.postMessage(data, this._bridgeOrigin);
	}

	private _onMessage = (event: MessageEvent): void => {
		// Only trust messages from the bridge itself — anything else could be
		// forged by an unrelated page and would let it plant a fake session.
		if (event.origin !== this._bridgeOrigin) return;
		if (!event.data || event.data.source !== 'it.webart.work') return;

		if (event.data.action === 'ready') {
			this._ready = true;

			if (this._pendingPush) {
				this._send({ action: 'store', token: this._pendingPush });

				this._pendingPush = null;
			} else if (!this._httpService.header('token')) {
				this._send({ action: 'retrieve' });
			}
		} else if (event.data.action === 'token' && event.data.token) {
			this._httpService.set('token', event.data.token);

			window.location.reload();
		}
	};
}

/** `environment.url` is blank in local dev (no SSO backend configured) — treat that as "no bridge". */
function _tryOrigin(url: string): string {
	if (!url) return '';

	try {
		return new URL(url).origin;
	} catch {
		return '';
	}
}
