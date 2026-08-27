import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TooltipModule } from '@wawjs/ngx-prime/tooltip';
import { DesignLabState } from '../design-lab-state';

@Component({
	selector: 'uk-topbar',
	imports: [ButtonModule, TooltipModule],
	templateUrl: './uikit-topbar.html',
	styleUrl: './uikit-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitTopbar {
	protected readonly designLabState = inject(DesignLabState);
	private readonly router = inject(Router);

	readonly menuToggle = output<void>();

	protected goToDesignLab(): void {
		this.router.navigate(['/design-lab']);
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
