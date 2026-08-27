import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TooltipModule } from '@wawjs/ngx-prime/tooltip';
import { TranslationsState } from '../../translations/translations.state';

const DARK_MODE_STORAGE_KEY = 'translator-dark-mode';

@Component({
	selector: 'tr-topbar',
	imports: [ButtonModule, FormsModule, SelectModule, TooltipModule],
	templateUrl: './tr-topbar.html',
	styleUrl: './tr-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrTopbar {
	protected readonly translationsState = inject(TranslationsState);

	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	protected readonly dark = signal(this.isBrowser && this.readInitialDarkMode());

	constructor() {
		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
		}
	}

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);

		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
			localStorage.setItem(DARK_MODE_STORAGE_KEY, String(this.dark()));
		}
	}

	protected downloadSelectedLanguage(): void {
		this.translationsState.downloadLanguage(this.translationsState.selectedLanguage());
	}

	protected canDownloadSelected(): boolean {
		return !this.translationsState.isDefaultLanguageSelected() && this.translationsState.modifiedCount() > 0;
	}

	private readInitialDarkMode(): boolean {
		const stored = localStorage.getItem(DARK_MODE_STORAGE_KEY);
		if (stored !== null) {
			return stored === 'true';
		}
		return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
	}
}
