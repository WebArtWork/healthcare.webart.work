import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { CheckboxModule } from '@wawjs/ngx-prime/checkbox';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { PasswordModule } from '@wawjs/ngx-prime/password';

@Component({
	selector: 'sc-login',
	imports: [FormsModule, ButtonModule, CardModule, CheckboxModule, InputTextModule, PasswordModule, RouterLink],
	templateUrl: './login.html',
	styleUrl: './login.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
	protected readonly email = signal('');
	protected readonly password = signal('');
	protected readonly remember = signal(false);
}
