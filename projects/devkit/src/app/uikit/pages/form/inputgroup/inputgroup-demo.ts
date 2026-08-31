import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputGroupModule } from '@wawjs/ngx-prime/inputgroup';
import { InputGroupAddonModule } from '@wawjs/ngx-prime/inputgroupaddon';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';

@Component({
	selector: 'uk-inputgroup-demo',
	imports: [FormsModule, ButtonModule, InputGroupModule, InputGroupAddonModule, InputTextModule],
	templateUrl: './inputgroup-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputGroupDemo {}
