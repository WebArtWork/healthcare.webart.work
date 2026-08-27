import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { AvatarGroupModule } from '@wawjs/ngx-prime/avatargroup';

@Component({
	selector: 'uk-avatargroup-demo',
	imports: [AvatarModule, AvatarGroupModule],
	templateUrl: './avatargroup-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupDemo {}
