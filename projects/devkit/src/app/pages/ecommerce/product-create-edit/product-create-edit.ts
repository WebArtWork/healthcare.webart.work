import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { EditorModule } from '@wawjs/ngx-prime/editor';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';

interface CategoryOption {
	label: string;
	value: string;
}

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Create / Edit Product',
	sourcePath: 'projects/devkit/src/app/pages/ecommerce/product-create-edit',
	description: 'A form for creating or editing a product, with a rich-text description and image upload.',
	elements: [
		{
			id: 'form-fields',
			label: 'Name / Category / Price / Stock fields',
			description:
				'A two-column grid with a pInputText for Name, a p-select for Category, and p-inputnumber fields for Price (currency) and Stock.',
			selectedByDefault: true,
		},
		{
			id: 'description-editor',
			label: 'Description editor',
			description: 'A full-width p-editor rich-text field for the product description.',
			selectedByDefault: true,
		},
		{
			id: 'image-upload',
			label: 'Image upload',
			description: 'A full-width p-fileUpload drag-and-drop area supporting multiple images.',
			selectedByDefault: true,
		},
		{
			id: 'form-actions',
			label: 'Form actions',
			description: 'Cancel (outlined, secondary) and Save (primary) p-button actions.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-product-create-edit',
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		EditorModule,
		FileUploadModule,
	],
	templateUrl: './product-create-edit.html',
	styleUrl: './product-create-edit.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreateEdit implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly categories: CategoryOption[] = [
		{ label: 'Audio', value: 'audio' },
		{ label: 'Accessories', value: 'accessories' },
		{ label: 'Displays', value: 'displays' },
		{ label: 'Furniture', value: 'furniture' },
	];

	protected readonly name = signal('');
	protected readonly category = signal<CategoryOption | null>(null);
	protected readonly price = signal(0);
	protected readonly stock = signal(0);
	protected readonly description = signal('');

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected onImageUpload(): void {
		// Demo-only handler — a real app would upload to its own API.
	}
}
