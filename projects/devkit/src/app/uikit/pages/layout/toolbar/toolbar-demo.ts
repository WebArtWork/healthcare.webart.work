import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { ToolbarModule } from '@wawjs/ngx-prime/toolbar';

@Component({
	selector: 'uk-toolbar-demo',
	imports: [ButtonModule, ToolbarModule],
	templateUrl: './toolbar-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarDemo {}
