import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TooltipModule } from '@wawjs/ngx-prime/tooltip';
import { DesignLabState } from '../../uikit/layout/design-lab-state';
import { TranslationsState } from '../../translator/translations/translations.state';
import { PagePromptDialog } from '../../shared/page-prompt/page-prompt-dialog';
import { PagePromptService } from '../../shared/page-prompt/page-prompt.service';

const DARK_MODE_KEY = 'sc-dark-mode';

@Component({
	selector: 'sc-topbar',
	imports: [ButtonModule, FormsModule, SelectModule, TooltipModule, PagePromptDialog, RouterLink],
	templateUrl: './showcase-topbar.html',
	styleUrl: './showcase-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseTopbar {
	protected readonly pagePromptService = inject(PagePromptService);
	protected readonly designLabState = inject(DesignLabState);
	protected readonly translationsState = inject(TranslationsState);

	private readonly router = inject(Router);
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	readonly menuToggle = output<void>();

	protected readonly dark = signal(this.isBrowser && localStorage.getItem(DARK_MODE_KEY) === 'true');
	protected readonly promptDialogVisible = signal(false);

	protected readonly isUikitSection = toSignal(
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((event) => event.urlAfterRedirects.startsWith('/uikit')),
			startWith(this.router.url.startsWith('/uikit')),
		),
		{ initialValue: this.router.url.startsWith('/uikit') },
	);

	protected readonly isTranslatorSection = toSignal(
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((event) => event.urlAfterRedirects.startsWith('/translations')),
			startWith(this.router.url.startsWith('/translations')),
		),
		{ initialValue: this.router.url.startsWith('/translations') },
	);

	constructor() {
		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
		}
	}

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);

		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
			localStorage.setItem(DARK_MODE_KEY, String(this.dark()));
		}
	}

	protected openPagePrompt(): void {
		this.promptDialogVisible.set(true);
	}

	protected goToDesignLab(): void {
		this.router.navigate(['/uikit/design-lab']);
	}

	protected downloadSelectedLanguage(): void {
		this.translationsState.downloadLanguage(this.translationsState.selectedLanguage());
	}

	protected canDownloadSelected(): boolean {
		return !this.translationsState.isDefaultLanguageSelected() && this.translationsState.modifiedCount() > 0;
	}

	/**
	 * Downloads the diff-only config: just the Design Lab tokens the user has
	 * actually changed from the base preset, as a small generic JSON handoff.
	 * Live preview always stays separate — this is only a snapshot on demand.
	 */
	protected downloadConfig(): void {
		const diff: Record<string, unknown> = {};

		const preset = this.designLabState.presetName();
		if (preset !== undefined) {
			diff['preset'] = preset;
		}

		const primaryName = this.designLabState.primaryColorName();
		if (primaryName !== undefined) {
			diff['primaryPalette'] = { name: primaryName, color: this.designLabState.primaryColorHex() };
		}

		const surfaceName = this.designLabState.surfaceColorName();
		if (surfaceName !== undefined) {
			diff['surfacePalette'] = { name: surfaceName, color: this.designLabState.surfaceColorHex() };
		}

		const borderRadiusScale = this.designLabState.borderRadiusScale();
		if (borderRadiusScale !== undefined) {
			diff['primitive'] = { borderRadius: borderRadiusScale };
		}

		const focusRingWidth = this.designLabState.focusRingWidth();
		const focusRingStyle = this.designLabState.focusRingStyle();
		const formFieldPaddingX = this.designLabState.formFieldPaddingX();
		const formFieldPaddingY = this.designLabState.formFieldPaddingY();
		if (
			focusRingWidth !== undefined ||
			focusRingStyle !== undefined ||
			formFieldPaddingX !== undefined ||
			formFieldPaddingY !== undefined
		) {
			diff['semantic'] = {
				...(focusRingWidth !== undefined || focusRingStyle !== undefined
					? { focusRing: { width: focusRingWidth, style: focusRingStyle } }
					: {}),
				...(formFieldPaddingX !== undefined || formFieldPaddingY !== undefined
					? { formField: { paddingX: formFieldPaddingX, paddingY: formFieldPaddingY } }
					: {}),
			};
		}

		const componentOverrides = this.designLabState.componentTokenOverrides();
		if (Object.keys(componentOverrides).length > 0) {
			diff['components'] = componentOverrides;
		}

		const globalConfig: Record<string, unknown> = {};
		const ripple = this.designLabState.ripple();
		if (ripple !== undefined) globalConfig['ripple'] = ripple;
		const inputVariant = this.designLabState.inputVariant();
		if (inputVariant !== undefined) globalConfig['inputVariant'] = inputVariant;
		const darkModeSelector = this.designLabState.darkModeSelector();
		if (darkModeSelector !== undefined) globalConfig['darkModeSelector'] = darkModeSelector;
		const rtl = this.designLabState.rtl();
		if (rtl !== undefined) globalConfig['rtl'] = rtl;
		const zIndexModal = this.designLabState.zIndexModal();
		if (zIndexModal !== undefined) globalConfig['zIndex'] = { modal: zIndexModal };
		if (Object.keys(globalConfig).length > 0) {
			diff['globalConfig'] = globalConfig;
		}

		const json = JSON.stringify(diff, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'ngx-prime-theme-config.json';
		link.click();
		URL.revokeObjectURL(url);
	}
}
