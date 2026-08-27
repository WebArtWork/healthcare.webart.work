import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from '@wawjs/ngx-prime/iconfield';
import { InputIconModule } from '@wawjs/ngx-prime/inputicon';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';

@Component({
	selector: 'uk-iconfield-demo',
	imports: [FormsModule, IconFieldModule, InputIconModule, InputTextModule],
	templateUrl: './iconfield-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFieldDemo {}
