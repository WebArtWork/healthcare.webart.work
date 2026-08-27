import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';
import { TagModule } from '@wawjs/ngx-prime/tag';

@Component({
	selector: 'uk-file-composite-demo',
	imports: [ButtonModule, FileUploadModule, TagModule],
	templateUrl: './file-composite-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileCompositeDemo {
	protected readonly files = signal([
		{ name: 'Invoice-0231.pdf', size: '212 KB' },
		{ name: 'Contract-Final.docx', size: '58 KB' },
		{ name: 'Logo.png', size: '34 KB' },
	]);

	protected remove(name: string): void {
		this.files.update((list) => list.filter((f) => f.name !== name));
	}
}
