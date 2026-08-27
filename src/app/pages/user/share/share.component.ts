import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { MessageService } from '@wawjs/ngx-prime/api';
import { TranslateService } from '@wawjs/ngx-translate';
import { QrCodeComponent } from '../../../shared/qr-code/qr-code.component';
import { companyProfile } from '../../../company/company.data';

export type ShareKind = 'app' | 'profile';

@Component({
	selector: 'app-share',
	imports: [ButtonModule, QrCodeComponent, RouterLink],
	templateUrl: './share.component.html',
	styleUrl: './share.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharePageComponent {
	private readonly _messageService = inject(MessageService);
	private readonly _activatedRoute = inject(ActivatedRoute);
	readonly translateService = inject(TranslateService);

	readonly kind = toSignal(
		this._activatedRoute.data.pipe(map((data) => (data['shareKind'] as ShareKind) ?? 'app')),
		{
			initialValue: (this._activatedRoute.snapshot.data['shareKind'] as ShareKind) ?? 'app',
		},
	);

	readonly shareUrl = computed(() => {
		if (this.kind() === 'profile') {
			return `${companyProfile.siteUrl}/profile`;
		}
		return `${companyProfile.siteUrl}/sign`;
	});

	readonly title = computed(() =>
		this.kind() === 'profile'
			? this.translateService.translate('Поділитися профілем')()
			: this.translateService.translate('Поділитися Neryxomka')(),
	);

	readonly description = computed(() =>
		this.kind() === 'profile'
			? this.translateService.translate('Дайте людям відсканувати цей код, щоб відкрити мій профіль Neryxomka.')()
			: this.translateService.translate('Відскануйте код, щоб приєднатися до Neryxomka за кілька секунд.')(),
	);

	copyLink(): void {
		navigator.clipboard?.writeText(this.shareUrl()).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
