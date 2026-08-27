import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';

@Component({
	selector: 'uk-avatar-demo',
	imports: [AvatarModule],
	templateUrl: './avatar-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemo {}
