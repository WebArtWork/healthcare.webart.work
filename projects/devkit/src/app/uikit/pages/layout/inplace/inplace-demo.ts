import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InplaceModule } from '@wawjs/ngx-prime/inplace';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';

@Component({
	selector: 'uk-inplace-demo',
	imports: [InplaceModule, InputTextModule],
	templateUrl: './inplace-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InplaceDemo {}
