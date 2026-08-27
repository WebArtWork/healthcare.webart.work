import {
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import {
	FormField,
	form,
	pattern,
	required,
	schema,
	submit,
} from '@angular/forms/signals';
import { Router } from '@angular/router';
import { environment } from '@env';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { User, UserService } from '@wawjs/ngx-bos';
import { HttpService } from '@wawjs/ngx-http';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { PasswordModule } from '@wawjs/ngx-prime/password';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { SessionBridgeService } from '../../../auth/session-bridge.service';
import { FieldErrorComponent } from '../../../shared/field-error/field-error.component';
import { ThemeState } from '../../../theme/theme-state';
import { RespStatus, SignModel } from './sign.interface';

const signSchema = schema<SignModel>((path) => {
	required(path.email, { message: 'Введіть email...' });

	pattern(path.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

	required(path.password, { message: 'Введіть пароль...' });
});

@Component({
	imports: [
		SpiderComponent,
		FormField,
		ButtonModule,
		InputTextModule,
		PasswordModule,
		FieldErrorComponent,
		TranslateDirective,
	],
	templateUrl: './sign.component.html',
})
export class SignComponent {
	themeService = inject(ThemeState);
	userService = inject(UserService);
	readonly translateService = inject(TranslateService);
	private _messageService = inject(MessageService);
	private _httpService = inject(HttpService);
	private _sessionBridge = inject(SessionBridgeService);
	private _router = inject(Router);

	readonly logo = environment.sign.logo;

	// Signal form model
	signModel = signal<SignModel>({
		email: environment.sign.email,
		password: environment.sign.password,
		resetPin: '',
	});

	// Signal form tree (used by [field])
	signForm = form(this.signModel, signSchema);

	showCode = signal(false);
	readonly isSubmitting = signal(false);

	readonly isSubmitDisabled = computed(() => {
		if (this.isSubmitting()) {
			return true;
		}

		const formInvalid = this.signForm().invalid();

		if (!this.showCode()) {
			return formInvalid;
		}

		const resetPinField = this.signForm.resetPin();
		return formInvalid || resetPinField.invalid();
	});

	wFormSubmit() {
		submit(this.signForm, (formTree) => {
			const payload = formTree().value() as SignModel;

			if (this.showCode()) {
				this._change(payload);
			} else {
				this._submit(payload);
			}

			return Promise.resolve({} as any);
		});
	}

	private _submit(payload: SignModel) {
		this.isSubmitting.set(true);
		this._httpService.post(
			'/api/user/status?test=test',
			payload,
			(resp: RespStatus) => {
				if (resp.email && resp.pass) this._login(payload);
				else if (resp.email) this._request(payload);
				else this._sign(payload);
			},
			this._handleRequestError.bind(this),
		);
	}

	private _login(payload: SignModel) {
		this._httpService.post(
			'/api/user/login',
			payload,
			this._set.bind(this),
			this._handleRequestError.bind(this),
		);
	}

	private _sign(payload: SignModel) {
		this._httpService.post(
			'/api/user/sign',
			payload,
			this._set.bind(this),
			this._handleRequestError.bind(this),
		);
	}

	private _request(payload: SignModel) {
		this._httpService.post('/api/user/request', payload, () => {
			this.isSubmitting.set(false);
			this.showCode.set(true);

			this._messageService.add({
				severity: 'info',
				detail: this.translateService.translate('Лист буде надіслано на ваш email')(),
			});
		}, this._handleRequestError.bind(this));
	}

	private _change(payload: SignModel) {
		this._httpService.post('/api/user/change', payload, (resp: boolean) => {
			if (resp) {
				this._messageService.add({
					severity: 'info',
					detail: this.translateService.translate('Пароль успішно змінено')(),
				});
			} else {
				this._messageService.add({
					severity: 'error',
					detail: this.translateService.translate('Неправильний код')(),
				});
			}

			this._login(payload);
		}, this._handleRequestError.bind(this));
	}

	private _set(user: User) {
		if (!user) {
			this.isSubmitting.set(false);
			this._messageService.add({
				severity: 'error',
				detail: this.translateService.translate('Щось пішло не так')(),
			});
			return;
		}

		const token = (user as unknown as { token: string }).token || '';
		if (token) {
			this._httpService.set('token', token);
			this._sessionBridge.push(token);
		}

		localStorage.setItem('waw_user', JSON.stringify(user));
		this.userService.setUser(user);
		this.userService.get();
		this._router.navigateByUrl('/profile');
	}

	private _handleRequestError(): void {
		this.isSubmitting.set(false);
		this._messageService.add({
			severity: 'error',
			detail: this.translateService.translate('Щось пішло не так')(),
		});
	}
}
