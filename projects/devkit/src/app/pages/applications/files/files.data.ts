export interface FileRow {
	name: string;
	type: 'folder' | 'file';
	size: string;
	modified: string;
	icon: string;
}

export const FILE_ROWS: FileRow[] = [
	{ name: 'Design Assets', type: 'folder', size: '—', modified: 'Aug 20, 2026', icon: 'pi pi-folder' },
	{ name: 'Contracts', type: 'folder', size: '—', modified: 'Aug 18, 2026', icon: 'pi pi-folder' },
	{ name: 'Q3 Report.pdf', type: 'file', size: '2.4 MB', modified: 'Aug 22, 2026', icon: 'pi pi-file-pdf' },
	{ name: 'Roadmap.xlsx', type: 'file', size: '580 KB', modified: 'Aug 21, 2026', icon: 'pi pi-file-excel' },
	{ name: 'logo-final.png', type: 'file', size: '1.1 MB', modified: 'Aug 19, 2026', icon: 'pi pi-image' },
];
