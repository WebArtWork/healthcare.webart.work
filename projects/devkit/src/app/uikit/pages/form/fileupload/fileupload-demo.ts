import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';

@Component({
	selector: 'uk-fileupload-demo',
	imports: [FileUploadModule],
	templateUrl: './fileupload-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadDemo {
	protected onUpload(): void {
		// demo only — no backend endpoint wired up
	}
}
