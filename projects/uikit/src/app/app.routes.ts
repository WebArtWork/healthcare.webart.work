import { Routes } from '@angular/router';
import { UikitShell } from './layout/shell/uikit-shell';

export const routes: Routes = [
	{
		path: '',
		component: UikitShell,
		children: [
			{ path: '', redirectTo: 'button/button', pathMatch: 'full' },
			{
				path: 'form/input',
				loadComponent: () => import('./pages/form/input/input-demo').then((m) => m.InputDemo),
			},
			{
				path: 'form/select',
				loadComponent: () => import('./pages/form/select/select-demo').then((m) => m.SelectDemo),
			},
			{
				path: 'form/checkbox',
				loadComponent: () => import('./pages/form/checkbox/checkbox-demo').then((m) => m.CheckboxDemo),
			},
			{
				path: 'form/radiobutton',
				loadComponent: () =>
					import('./pages/form/radiobutton/radiobutton-demo').then((m) => m.RadioButtonDemo),
			},
			{
				path: 'form/rating',
				loadComponent: () => import('./pages/form/rating/rating-demo').then((m) => m.RatingDemo),
			},
			{
				path: 'form/slider',
				loadComponent: () => import('./pages/form/slider/slider-demo').then((m) => m.SliderDemo),
			},
			{
				path: 'form/textarea',
				loadComponent: () => import('./pages/form/textarea/textarea-demo').then((m) => m.TextareaDemo),
			},
			{
				path: 'form/togglebutton',
				loadComponent: () =>
					import('./pages/form/togglebutton/togglebutton-demo').then((m) => m.ToggleButtonDemo),
			},
			{
				path: 'form/toggleswitch',
				loadComponent: () =>
					import('./pages/form/toggleswitch/toggleswitch-demo').then((m) => m.ToggleSwitchDemo),
			},
			{
				path: 'form/floatlabel',
				loadComponent: () => import('./pages/form/floatlabel/floatlabel-demo').then((m) => m.FloatLabelDemo),
			},
			{
				path: 'form/inputnumber',
				loadComponent: () =>
					import('./pages/form/inputnumber/inputnumber-demo').then((m) => m.InputNumberDemo),
			},
			{
				path: 'form/password',
				loadComponent: () => import('./pages/form/password/password-demo').then((m) => m.PasswordDemo),
			},
			{
				path: 'form/selectbutton',
				loadComponent: () =>
					import('./pages/form/selectbutton/selectbutton-demo').then((m) => m.SelectButtonDemo),
			},
			{
				path: 'form/autocomplete',
				loadComponent: () =>
					import('./pages/form/autocomplete/autocomplete-demo').then((m) => m.AutoCompleteDemo),
			},
			{
				path: 'form/cascadeselect',
				loadComponent: () =>
					import('./pages/form/cascadeselect/cascadeselect-demo').then((m) => m.CascadeSelectDemo),
			},
			{
				path: 'form/colorpicker',
				loadComponent: () =>
					import('./pages/form/colorpicker/colorpicker-demo').then((m) => m.ColorPickerDemo),
			},
			{
				path: 'form/datepicker',
				loadComponent: () =>
					import('./pages/form/datepicker/datepicker-demo').then((m) => m.DatePickerDemo),
			},
			{
				path: 'form/editor',
				loadComponent: () => import('./pages/form/editor/editor-demo').then((m) => m.EditorDemo),
			},
			{
				path: 'form/fieldset',
				loadComponent: () => import('./pages/form/fieldset/fieldset-demo').then((m) => m.FieldsetDemo),
			},
			{
				path: 'form/iconfield',
				loadComponent: () => import('./pages/form/iconfield/iconfield-demo').then((m) => m.IconFieldDemo),
			},
			{
				path: 'form/inputgroup',
				loadComponent: () =>
					import('./pages/form/inputgroup/inputgroup-demo').then((m) => m.InputGroupDemo),
			},
			{
				path: 'form/inputmask',
				loadComponent: () =>
					import('./pages/form/inputmask/inputmask-demo').then((m) => m.InputMaskDemo),
			},
			{
				path: 'form/inputotp',
				loadComponent: () => import('./pages/form/inputotp/inputotp-demo').then((m) => m.InputOtpDemo),
			},
			{
				path: 'form/keyfilter',
				loadComponent: () =>
					import('./pages/form/keyfilter/keyfilter-demo').then((m) => m.KeyFilterDemo),
			},
			{
				path: 'form/listbox',
				loadComponent: () => import('./pages/form/listbox/listbox-demo').then((m) => m.ListboxDemo),
			},
			{
				path: 'form/multiselect',
				loadComponent: () =>
					import('./pages/form/multiselect/multiselect-demo').then((m) => m.MultiSelectDemo),
			},
			{
				path: 'form/treeselect',
				loadComponent: () =>
					import('./pages/form/treeselect/treeselect-demo').then((m) => m.TreeSelectDemo),
			},
			{
				path: 'form/fileupload',
				loadComponent: () =>
					import('./pages/form/fileupload/fileupload-demo').then((m) => m.FileUploadDemo),
			},
			{
				path: 'button/button',
				loadComponent: () => import('./pages/button/button/button-demo').then((m) => m.ButtonDemo),
			},
			{
				path: 'button/buttongroup',
				loadComponent: () =>
					import('./pages/button/buttongroup/buttongroup-demo').then((m) => m.ButtonGroupDemo),
			},
			{
				path: 'button/splitbutton',
				loadComponent: () =>
					import('./pages/button/splitbutton/splitbutton-demo').then((m) => m.SplitButtonDemo),
			},
			{
				path: 'button/speeddial',
				loadComponent: () =>
					import('./pages/button/speeddial/speeddial-demo').then((m) => m.SpeedDialDemo),
			},
			{
				path: 'data/table',
				loadComponent: () => import('./pages/data/table/table-demo').then((m) => m.TableDemo),
			},
			{
				path: 'data/dataview',
				loadComponent: () => import('./pages/data/dataview/dataview-demo').then((m) => m.DataViewDemo),
			},
			{
				path: 'data/orderlist',
				loadComponent: () => import('./pages/data/orderlist/orderlist-demo').then((m) => m.OrderListDemo),
			},
			{
				path: 'data/organizationchart',
				loadComponent: () =>
					import('./pages/data/organizationchart/organizationchart-demo').then(
						(m) => m.OrganizationChartDemo,
					),
			},
			{
				path: 'data/paginator',
				loadComponent: () => import('./pages/data/paginator/paginator-demo').then((m) => m.PaginatorDemo),
			},
			{
				path: 'data/picklist',
				loadComponent: () => import('./pages/data/picklist/picklist-demo').then((m) => m.PickListDemo),
			},
			{
				path: 'data/timeline',
				loadComponent: () => import('./pages/data/timeline/timeline-demo').then((m) => m.TimelineDemo),
			},
			{
				path: 'data/tree',
				loadComponent: () => import('./pages/data/tree/tree-demo').then((m) => m.TreeDemo),
			},
			{
				path: 'data/treetable',
				loadComponent: () => import('./pages/data/treetable/treetable-demo').then((m) => m.TreeTableDemo),
			},
			{
				path: 'overlay/dialog',
				loadComponent: () => import('./pages/overlay/dialog/dialog-demo').then((m) => m.DialogDemo),
			},
			{
				path: 'overlay/dynamicdialog',
				loadComponent: () =>
					import('./pages/overlay/dynamicdialog/dynamicdialog-demo').then((m) => m.DynamicDialogDemo),
			},
			{
				path: 'overlay/drawer',
				loadComponent: () => import('./pages/overlay/drawer/drawer-demo').then((m) => m.DrawerDemo),
			},
			{
				path: 'overlay/popover',
				loadComponent: () => import('./pages/overlay/popover/popover-demo').then((m) => m.PopoverDemo),
			},
			{
				path: 'overlay/confirmdialog',
				loadComponent: () =>
					import('./pages/overlay/confirmdialog/confirmdialog-demo').then((m) => m.ConfirmDialogDemo),
			},
			{
				path: 'overlay/confirmpopup',
				loadComponent: () =>
					import('./pages/overlay/confirmpopup/confirmpopup-demo').then((m) => m.ConfirmPopupDemo),
			},
			{
				path: 'overlay/contextmenu',
				loadComponent: () =>
					import('./pages/overlay/contextmenu/contextmenu-demo').then((m) => m.ContextMenuDemo),
			},
			{
				path: 'overlay/tooltip',
				loadComponent: () => import('./pages/overlay/tooltip/tooltip-demo').then((m) => m.TooltipDemo),
			},
			{
				path: 'overlay/blockui',
				loadComponent: () => import('./pages/overlay/blockui/blockui-demo').then((m) => m.BlockUIDemo),
			},
			{
				path: 'layout/card',
				loadComponent: () => import('./pages/layout/card/card-demo').then((m) => m.CardDemo),
			},
			{
				path: 'layout/accordion',
				loadComponent: () => import('./pages/layout/accordion/accordion-demo').then((m) => m.AccordionDemo),
			},
			{
				path: 'layout/divider',
				loadComponent: () => import('./pages/layout/divider/divider-demo').then((m) => m.DividerDemo),
			},
			{
				path: 'layout/panel',
				loadComponent: () => import('./pages/layout/panel/panel-demo').then((m) => m.PanelDemo),
			},
			{
				path: 'layout/scrollpanel',
				loadComponent: () =>
					import('./pages/layout/scrollpanel/scrollpanel-demo').then((m) => m.ScrollPanelDemo),
			},
			{
				path: 'layout/splitter',
				loadComponent: () => import('./pages/layout/splitter/splitter-demo').then((m) => m.SplitterDemo),
			},
			{
				path: 'layout/toolbar',
				loadComponent: () => import('./pages/layout/toolbar/toolbar-demo').then((m) => m.ToolbarDemo),
			},
			{
				path: 'layout/inplace',
				loadComponent: () => import('./pages/layout/inplace/inplace-demo').then((m) => m.InplaceDemo),
			},
			{
				path: 'navigation/breadcrumb',
				loadComponent: () =>
					import('./pages/navigation/breadcrumb/breadcrumb-demo').then((m) => m.BreadcrumbDemo),
			},
			{
				path: 'navigation/menu',
				loadComponent: () => import('./pages/navigation/menu/menu-demo').then((m) => m.MenuDemo),
			},
			{
				path: 'navigation/menubar',
				loadComponent: () => import('./pages/navigation/menubar/menubar-demo').then((m) => m.MenubarDemo),
			},
			{
				path: 'navigation/megamenu',
				loadComponent: () => import('./pages/navigation/megamenu/megamenu-demo').then((m) => m.MegaMenuDemo),
			},
			{
				path: 'navigation/panelmenu',
				loadComponent: () =>
					import('./pages/navigation/panelmenu/panelmenu-demo').then((m) => m.PanelMenuDemo),
			},
			{
				path: 'navigation/steps',
				loadComponent: () => import('./pages/navigation/steps/steps-demo').then((m) => m.StepsDemo),
			},
			{
				path: 'navigation/stepper',
				loadComponent: () => import('./pages/navigation/stepper/stepper-demo').then((m) => m.StepperDemo),
			},
			{
				path: 'navigation/tabs',
				loadComponent: () => import('./pages/navigation/tabs/tabs-demo').then((m) => m.TabsDemo),
			},
			{
				path: 'navigation/tieredmenu',
				loadComponent: () =>
					import('./pages/navigation/tieredmenu/tieredmenu-demo').then((m) => m.TieredMenuDemo),
			},
			{
				path: 'navigation/dock',
				loadComponent: () => import('./pages/navigation/dock/dock-demo').then((m) => m.DockDemo),
			},
			{
				path: 'feedback/message',
				loadComponent: () => import('./pages/feedback/message/message-demo').then((m) => m.MessageDemo),
			},
			{
				path: 'feedback/toast',
				loadComponent: () => import('./pages/feedback/toast/toast-demo').then((m) => m.ToastDemo),
			},
			{
				path: 'feedback/progressbar',
				loadComponent: () =>
					import('./pages/feedback/progressbar/progressbar-demo').then((m) => m.ProgressBarDemo),
			},
			{
				path: 'feedback/progressspinner',
				loadComponent: () =>
					import('./pages/feedback/progressspinner/progressspinner-demo').then(
						(m) => m.ProgressSpinnerDemo,
					),
			},
			{
				path: 'feedback/skeleton',
				loadComponent: () => import('./pages/feedback/skeleton/skeleton-demo').then((m) => m.SkeletonDemo),
			},
			{
				path: 'feedback/badge',
				loadComponent: () => import('./pages/feedback/badge/badge-demo').then((m) => m.BadgeDemo),
			},
			{
				path: 'feedback/tag',
				loadComponent: () => import('./pages/feedback/tag/tag-demo').then((m) => m.TagDemo),
			},
			{
				path: 'feedback/metergroup',
				loadComponent: () =>
					import('./pages/feedback/metergroup/metergroup-demo').then((m) => m.MeterGroupDemo),
			},
			{
				path: 'media/avatar',
				loadComponent: () => import('./pages/media/avatar/avatar-demo').then((m) => m.AvatarDemo),
			},
			{
				path: 'media/avatargroup',
				loadComponent: () =>
					import('./pages/media/avatargroup/avatargroup-demo').then((m) => m.AvatarGroupDemo),
			},
			{
				path: 'media/carousel',
				loadComponent: () => import('./pages/media/carousel/carousel-demo').then((m) => m.CarouselDemo),
			},
			{
				path: 'media/chart',
				loadComponent: () => import('./pages/media/chart/chart-demo').then((m) => m.ChartDemo),
			},
			{
				path: 'media/galleria',
				loadComponent: () => import('./pages/media/galleria/galleria-demo').then((m) => m.GalleriaDemo),
			},
			{
				path: 'media/image',
				loadComponent: () => import('./pages/media/image/image-demo').then((m) => m.ImageDemo),
			},
			{
				path: 'media/imagecompare',
				loadComponent: () =>
					import('./pages/media/imagecompare/imagecompare-demo').then((m) => m.ImageCompareDemo),
			},
			{
				path: 'misc/chip',
				loadComponent: () => import('./pages/misc/chip/chip-demo').then((m) => m.ChipDemo),
			},
			{
				path: 'misc/knob',
				loadComponent: () => import('./pages/misc/knob/knob-demo').then((m) => m.KnobDemo),
			},
			{
				path: 'misc/terminal',
				loadComponent: () => import('./pages/misc/terminal/terminal-demo').then((m) => m.TerminalDemo),
			},
			{
				path: 'misc/animateonscroll',
				loadComponent: () =>
					import('./pages/misc/animateonscroll/animateonscroll-demo').then(
						(m) => m.AnimateOnScrollDemo,
					),
			},
			{
				path: 'form/form-layout',
				loadComponent: () =>
					import('./pages/form/form-layout/form-layout-demo').then((m) => m.FormLayoutDemo),
			},
			{
				path: 'form/file-composite',
				loadComponent: () =>
					import('./pages/form/file-composite/file-composite-demo').then((m) => m.FileCompositeDemo),
			},
			{
				path: 'data/list-composite',
				loadComponent: () =>
					import('./pages/data/list-composite/list-composite-demo').then((m) => m.ListCompositeDemo),
			},
			{
				path: 'data/tree-composite',
				loadComponent: () =>
					import('./pages/data/tree-composite/tree-composite-demo').then((m) => m.TreeCompositeDemo),
			},
			{
				path: 'data/timeline-composite',
				loadComponent: () =>
					import('./pages/data/timeline-composite/timeline-composite-demo').then(
						(m) => m.TimelineCompositeDemo,
					),
			},
			{
				path: 'navigation/menu-in-context',
				loadComponent: () =>
					import('./pages/navigation/menu-in-context/menu-in-context-demo').then(
						(m) => m.MenuInContextDemo,
					),
			},
			{
				path: 'feedback/message-toast-stack',
				loadComponent: () =>
					import('./pages/feedback/message-toast-stack/message-toast-stack-demo').then(
						(m) => m.MessageToastStackDemo,
					),
			},
			{
				path: 'layout/panel-composite',
				loadComponent: () =>
					import('./pages/layout/panel-composite/panel-composite-demo').then(
						(m) => m.PanelCompositeDemo,
					),
			},
			{
				path: 'media/media-gallery',
				loadComponent: () =>
					import('./pages/media/media-gallery/media-gallery-demo').then((m) => m.MediaGalleryDemo),
			},
			{
				path: 'media/chart-dashboard',
				loadComponent: () =>
					import('./pages/media/chart-dashboard/chart-dashboard-demo').then(
						(m) => m.ChartDashboardDemo,
					),
			},
			{
				path: 'design-lab',
				loadComponent: () => import('./pages/design-lab/design-lab').then((m) => m.DesignLab),
			},
		],
	},
	{ path: '**', redirectTo: '' },
];
