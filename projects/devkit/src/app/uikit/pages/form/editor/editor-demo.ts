import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@wawjs/ngx-prime/editor';

@Component({
	selector: 'uk-editor-demo',
	imports: [FormsModule, EditorModule],
	templateUrl: './editor-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorDemo {
	protected readonly text = signal('<p>Hello <strong>World</strong>!</p>');
}
