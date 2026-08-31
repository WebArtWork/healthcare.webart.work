import { Routes } from '@angular/router';
import { ShowcaseShell } from './layout/shell/showcase-shell';

export const routes: Routes = [
	{
		path: '',
		component: ShowcaseShell,
		children: [
			{ path: '', loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing) },
			{
				path: 'dashboards/default',
				loadComponent: () =>
					import('./pages/dashboards/default/dashboard').then((m) => m.Dashboard),
			},
			{
				path: 'dashboards/analytics',
				loadComponent: () =>
					import('./pages/dashboards/analytics/analytics').then((m) => m.Analytics),
			},
			{
				path: 'users/list',
				loadComponent: () => import('./pages/users/list/users').then((m) => m.Users),
			},
			{
				path: 'users/profile',
				loadComponent: () => import('./pages/users/profile/profile').then((m) => m.Profile),
			},
			{
				path: 'users/create-edit',
				loadComponent: () =>
					import('./pages/users/create-edit/user-create-edit').then((m) => m.UserCreateEdit),
			},
			{
				path: 'ecommerce/products',
				loadComponent: () =>
					import('./pages/ecommerce/products/products').then((m) => m.Products),
			},
			{
				path: 'ecommerce/product-create-edit',
				loadComponent: () =>
					import('./pages/ecommerce/product-create-edit/product-create-edit').then(
						(m) => m.ProductCreateEdit,
					),
			},
			{
				path: 'ecommerce/orders',
				loadComponent: () => import('./pages/ecommerce/orders/orders').then((m) => m.Orders),
			},
			{
				path: 'ecommerce/order-details',
				loadComponent: () =>
					import('./pages/ecommerce/order-details/order-details').then((m) => m.OrderDetails),
			},
			{
				path: 'projects/list',
				loadComponent: () =>
					import('./pages/projects/list/project-list').then((m) => m.ProjectList),
			},
			{
				path: 'projects/project-details',
				loadComponent: () =>
					import('./pages/projects/project-details/project-details').then(
						(m) => m.ProjectDetails,
					),
			},
			{
				path: 'projects/tasks',
				loadComponent: () => import('./pages/projects/tasks/tasks').then((m) => m.Tasks),
			},
			{
				path: 'applications/calendar',
				loadComponent: () =>
					import('./pages/applications/calendar/calendar').then((m) => m.CalendarPage),
			},
			{
				path: 'applications/chat',
				loadComponent: () => import('./pages/applications/chat/chat').then((m) => m.Chat),
			},
			{
				path: 'applications/files',
				loadComponent: () => import('./pages/applications/files/files').then((m) => m.Files),
			},
			{
				path: 'account/settings',
				loadComponent: () =>
					import('./pages/account/settings/settings').then((m) => m.AccountSettings),
			},
		],
	},
	{
		path: 'uikit',
		component: ShowcaseShell,
		children: [
			{ path: '', redirectTo: 'button/button', pathMatch: 'full' },
			{
				path: 'form/input',
				loadComponent: () => import('./uikit/pages/form/input/input-demo').then((m) => m.InputDemo),
			},
			{
				path: 'form/select',
				loadComponent: () => import('./uikit/pages/form/select/select-demo').then((m) => m.SelectDemo),
			},
			{
				path: 'form/checkbox',
				loadComponent: () =>
					import('./uikit/pages/form/checkbox/checkbox-demo').then((m) => m.CheckboxDemo),
			},
			{
				path: 'form/radiobutton',
				loadComponent: () =>
					import('./uikit/pages/form/radiobutton/radiobutton-demo').then((m) => m.RadioButtonDemo),
			},
			{
				path: 'form/rating',
				loadComponent: () => import('./uikit/pages/form/rating/rating-demo').then((m) => m.RatingDemo),
			},
			{
				path: 'form/slider',
				loadComponent: () => import('./uikit/pages/form/slider/slider-demo').then((m) => m.SliderDemo),
			},
			{
				path: 'form/textarea',
				loadComponent: () =>
					import('./uikit/pages/form/textarea/textarea-demo').then((m) => m.TextareaDemo),
			},
			{
				path: 'form/togglebutton',
				loadComponent: () =>
					import('./uikit/pages/form/togglebutton/togglebutton-demo').then((m) => m.ToggleButtonDemo),
			},
			{
				path: 'form/toggleswitch',
				loadComponent: () =>
					import('./uikit/pages/form/toggleswitch/toggleswitch-demo').then((m) => m.ToggleSwitchDemo),
			},
			{
				path: 'form/floatlabel',
				loadComponent: () =>
					import('./uikit/pages/form/floatlabel/floatlabel-demo').then((m) => m.FloatLabelDemo),
			},
			{
				path: 'form/inputnumber',
				loadComponent: () =>
					import('./uikit/pages/form/inputnumber/inputnumber-demo').then((m) => m.InputNumberDemo),
			},
			{
				path: 'form/password',
				loadComponent: () =>
					import('./uikit/pages/form/password/password-demo').then((m) => m.PasswordDemo),
			},
			{
				path: 'form/selectbutton',
				loadComponent: () =>
					import('./uikit/pages/form/selectbutton/selectbutton-demo').then((m) => m.SelectButtonDemo),
			},
			{
				path: 'form/autocomplete',
				loadComponent: () =>
					import('./uikit/pages/form/autocomplete/autocomplete-demo').then((m) => m.AutoCompleteDemo),
			},
			{
				path: 'form/cascadeselect',
				loadComponent: () =>
					import('./uikit/pages/form/cascadeselect/cascadeselect-demo').then(
						(m) => m.CascadeSelectDemo,
					),
			},
			{
				path: 'form/colorpicker',
				loadComponent: () =>
					import('./uikit/pages/form/colorpicker/colorpicker-demo').then((m) => m.ColorPickerDemo),
			},
			{
				path: 'form/datepicker',
				loadComponent: () =>
					import('./uikit/pages/form/datepicker/datepicker-demo').then((m) => m.DatePickerDemo),
			},
			{
				path: 'form/editor',
				loadComponent: () => import('./uikit/pages/form/editor/editor-demo').then((m) => m.EditorDemo),
			},
			{
				path: 'form/fieldset',
				loadComponent: () =>
					import('./uikit/pages/form/fieldset/fieldset-demo').then((m) => m.FieldsetDemo),
			},
			{
				path: 'form/iconfield',
				loadComponent: () =>
					import('./uikit/pages/form/iconfield/iconfield-demo').then((m) => m.IconFieldDemo),
			},
			{
				path: 'form/inputgroup',
				loadComponent: () =>
					import('./uikit/pages/form/inputgroup/inputgroup-demo').then((m) => m.InputGroupDemo),
			},
			{
				path: 'form/inputmask',
				loadComponent: () =>
					import('./uikit/pages/form/inputmask/inputmask-demo').then((m) => m.InputMaskDemo),
			},
			{
				path: 'form/inputotp',
				loadComponent: () =>
					import('./uikit/pages/form/inputotp/inputotp-demo').then((m) => m.InputOtpDemo),
			},
			{
				path: 'form/keyfilter',
				loadComponent: () =>
					import('./uikit/pages/form/keyfilter/keyfilter-demo').then((m) => m.KeyFilterDemo),
			},
			{
				path: 'form/listbox',
				loadComponent: () => import('./uikit/pages/form/listbox/listbox-demo').then((m) => m.ListboxDemo),
			},
			{
				path: 'form/multiselect',
				loadComponent: () =>
					import('./uikit/pages/form/multiselect/multiselect-demo').then((m) => m.MultiSelectDemo),
			},
			{
				path: 'form/treeselect',
				loadComponent: () =>
					import('./uikit/pages/form/treeselect/treeselect-demo').then((m) => m.TreeSelectDemo),
			},
			{
				path: 'form/fileupload',
				loadComponent: () =>
					import('./uikit/pages/form/fileupload/fileupload-demo').then((m) => m.FileUploadDemo),
			},
			{
				path: 'button/button',
				loadComponent: () => import('./uikit/pages/button/button/button-demo').then((m) => m.ButtonDemo),
			},
			{
				path: 'button/buttongroup',
				loadComponent: () =>
					import('./uikit/pages/button/buttongroup/buttongroup-demo').then((m) => m.ButtonGroupDemo),
			},
			{
				path: 'button/splitbutton',
				loadComponent: () =>
					import('./uikit/pages/button/splitbutton/splitbutton-demo').then((m) => m.SplitButtonDemo),
			},
			{
				path: 'button/speeddial',
				loadComponent: () =>
					import('./uikit/pages/button/speeddial/speeddial-demo').then((m) => m.SpeedDialDemo),
			},
			{
				path: 'data/table',
				loadComponent: () => import('./uikit/pages/data/table/table-demo').then((m) => m.TableDemo),
			},
			{
				path: 'data/dataview',
				loadComponent: () =>
					import('./uikit/pages/data/dataview/dataview-demo').then((m) => m.DataViewDemo),
			},
			{
				path: 'data/orderlist',
				loadComponent: () =>
					import('./uikit/pages/data/orderlist/orderlist-demo').then((m) => m.OrderListDemo),
			},
			{
				path: 'data/organizationchart',
				loadComponent: () =>
					import('./uikit/pages/data/organizationchart/organizationchart-demo').then(
						(m) => m.OrganizationChartDemo,
					),
			},
			{
				path: 'data/paginator',
				loadComponent: () =>
					import('./uikit/pages/data/paginator/paginator-demo').then((m) => m.PaginatorDemo),
			},
			{
				path: 'data/picklist',
				loadComponent: () =>
					import('./uikit/pages/data/picklist/picklist-demo').then((m) => m.PickListDemo),
			},
			{
				path: 'data/timeline',
				loadComponent: () =>
					import('./uikit/pages/data/timeline/timeline-demo').then((m) => m.TimelineDemo),
			},
			{
				path: 'data/tree',
				loadComponent: () => import('./uikit/pages/data/tree/tree-demo').then((m) => m.TreeDemo),
			},
			{
				path: 'data/treetable',
				loadComponent: () =>
					import('./uikit/pages/data/treetable/treetable-demo').then((m) => m.TreeTableDemo),
			},
			{
				path: 'overlay/dialog',
				loadComponent: () =>
					import('./uikit/pages/overlay/dialog/dialog-demo').then((m) => m.DialogDemo),
			},
			{
				path: 'overlay/dynamicdialog',
				loadComponent: () =>
					import('./uikit/pages/overlay/dynamicdialog/dynamicdialog-demo').then(
						(m) => m.DynamicDialogDemo,
					),
			},
			{
				path: 'overlay/drawer',
				loadComponent: () =>
					import('./uikit/pages/overlay/drawer/drawer-demo').then((m) => m.DrawerDemo),
			},
			{
				path: 'overlay/popover',
				loadComponent: () =>
					import('./uikit/pages/overlay/popover/popover-demo').then((m) => m.PopoverDemo),
			},
			{
				path: 'overlay/confirmdialog',
				loadComponent: () =>
					import('./uikit/pages/overlay/confirmdialog/confirmdialog-demo').then(
						(m) => m.ConfirmDialogDemo,
					),
			},
			{
				path: 'overlay/confirmpopup',
				loadComponent: () =>
					import('./uikit/pages/overlay/confirmpopup/confirmpopup-demo').then(
						(m) => m.ConfirmPopupDemo,
					),
			},
			{
				path: 'overlay/contextmenu',
				loadComponent: () =>
					import('./uikit/pages/overlay/contextmenu/contextmenu-demo').then((m) => m.ContextMenuDemo),
			},
			{
				path: 'overlay/tooltip',
				loadComponent: () =>
					import('./uikit/pages/overlay/tooltip/tooltip-demo').then((m) => m.TooltipDemo),
			},
			{
				path: 'overlay/blockui',
				loadComponent: () =>
					import('./uikit/pages/overlay/blockui/blockui-demo').then((m) => m.BlockUIDemo),
			},
			{
				path: 'layout/card',
				loadComponent: () => import('./uikit/pages/layout/card/card-demo').then((m) => m.CardDemo),
			},
			{
				path: 'layout/accordion',
				loadComponent: () =>
					import('./uikit/pages/layout/accordion/accordion-demo').then((m) => m.AccordionDemo),
			},
			{
				path: 'layout/divider',
				loadComponent: () =>
					import('./uikit/pages/layout/divider/divider-demo').then((m) => m.DividerDemo),
			},
			{
				path: 'layout/panel',
				loadComponent: () => import('./uikit/pages/layout/panel/panel-demo').then((m) => m.PanelDemo),
			},
			{
				path: 'layout/scrollpanel',
				loadComponent: () =>
					import('./uikit/pages/layout/scrollpanel/scrollpanel-demo').then((m) => m.ScrollPanelDemo),
			},
			{
				path: 'layout/splitter',
				loadComponent: () =>
					import('./uikit/pages/layout/splitter/splitter-demo').then((m) => m.SplitterDemo),
			},
			{
				path: 'layout/toolbar',
				loadComponent: () =>
					import('./uikit/pages/layout/toolbar/toolbar-demo').then((m) => m.ToolbarDemo),
			},
			{
				path: 'layout/inplace',
				loadComponent: () =>
					import('./uikit/pages/layout/inplace/inplace-demo').then((m) => m.InplaceDemo),
			},
			{
				path: 'navigation/breadcrumb',
				loadComponent: () =>
					import('./uikit/pages/navigation/breadcrumb/breadcrumb-demo').then((m) => m.BreadcrumbDemo),
			},
			{
				path: 'navigation/menu',
				loadComponent: () =>
					import('./uikit/pages/navigation/menu/menu-demo').then((m) => m.MenuDemo),
			},
			{
				path: 'navigation/menubar',
				loadComponent: () =>
					import('./uikit/pages/navigation/menubar/menubar-demo').then((m) => m.MenubarDemo),
			},
			{
				path: 'navigation/megamenu',
				loadComponent: () =>
					import('./uikit/pages/navigation/megamenu/megamenu-demo').then((m) => m.MegaMenuDemo),
			},
			{
				path: 'navigation/panelmenu',
				loadComponent: () =>
					import('./uikit/pages/navigation/panelmenu/panelmenu-demo').then((m) => m.PanelMenuDemo),
			},
			{
				path: 'navigation/steps',
				loadComponent: () =>
					import('./uikit/pages/navigation/steps/steps-demo').then((m) => m.StepsDemo),
			},
			{
				path: 'navigation/stepper',
				loadComponent: () =>
					import('./uikit/pages/navigation/stepper/stepper-demo').then((m) => m.StepperDemo),
			},
			{
				path: 'navigation/tabs',
				loadComponent: () =>
					import('./uikit/pages/navigation/tabs/tabs-demo').then((m) => m.TabsDemo),
			},
			{
				path: 'navigation/tieredmenu',
				loadComponent: () =>
					import('./uikit/pages/navigation/tieredmenu/tieredmenu-demo').then((m) => m.TieredMenuDemo),
			},
			{
				path: 'navigation/dock',
				loadComponent: () =>
					import('./uikit/pages/navigation/dock/dock-demo').then((m) => m.DockDemo),
			},
			{
				path: 'feedback/message',
				loadComponent: () =>
					import('./uikit/pages/feedback/message/message-demo').then((m) => m.MessageDemo),
			},
			{
				path: 'feedback/toast',
				loadComponent: () =>
					import('./uikit/pages/feedback/toast/toast-demo').then((m) => m.ToastDemo),
			},
			{
				path: 'feedback/progressbar',
				loadComponent: () =>
					import('./uikit/pages/feedback/progressbar/progressbar-demo').then((m) => m.ProgressBarDemo),
			},
			{
				path: 'feedback/progressspinner',
				loadComponent: () =>
					import('./uikit/pages/feedback/progressspinner/progressspinner-demo').then(
						(m) => m.ProgressSpinnerDemo,
					),
			},
			{
				path: 'feedback/skeleton',
				loadComponent: () =>
					import('./uikit/pages/feedback/skeleton/skeleton-demo').then((m) => m.SkeletonDemo),
			},
			{
				path: 'feedback/badge',
				loadComponent: () =>
					import('./uikit/pages/feedback/badge/badge-demo').then((m) => m.BadgeDemo),
			},
			{
				path: 'feedback/tag',
				loadComponent: () => import('./uikit/pages/feedback/tag/tag-demo').then((m) => m.TagDemo),
			},
			{
				path: 'feedback/metergroup',
				loadComponent: () =>
					import('./uikit/pages/feedback/metergroup/metergroup-demo').then((m) => m.MeterGroupDemo),
			},
			{
				path: 'media/avatar',
				loadComponent: () => import('./uikit/pages/media/avatar/avatar-demo').then((m) => m.AvatarDemo),
			},
			{
				path: 'media/avatargroup',
				loadComponent: () =>
					import('./uikit/pages/media/avatargroup/avatargroup-demo').then((m) => m.AvatarGroupDemo),
			},
			{
				path: 'media/carousel',
				loadComponent: () =>
					import('./uikit/pages/media/carousel/carousel-demo').then((m) => m.CarouselDemo),
			},
			{
				path: 'media/chart',
				loadComponent: () => import('./uikit/pages/media/chart/chart-demo').then((m) => m.ChartDemo),
			},
			{
				path: 'media/galleria',
				loadComponent: () =>
					import('./uikit/pages/media/galleria/galleria-demo').then((m) => m.GalleriaDemo),
			},
			{
				path: 'media/image',
				loadComponent: () => import('./uikit/pages/media/image/image-demo').then((m) => m.ImageDemo),
			},
			{
				path: 'media/imagecompare',
				loadComponent: () =>
					import('./uikit/pages/media/imagecompare/imagecompare-demo').then((m) => m.ImageCompareDemo),
			},
			{
				path: 'misc/chip',
				loadComponent: () => import('./uikit/pages/misc/chip/chip-demo').then((m) => m.ChipDemo),
			},
			{
				path: 'misc/knob',
				loadComponent: () => import('./uikit/pages/misc/knob/knob-demo').then((m) => m.KnobDemo),
			},
			{
				path: 'misc/terminal',
				loadComponent: () =>
					import('./uikit/pages/misc/terminal/terminal-demo').then((m) => m.TerminalDemo),
			},
			{
				path: 'misc/animateonscroll',
				loadComponent: () =>
					import('./uikit/pages/misc/animateonscroll/animateonscroll-demo').then(
						(m) => m.AnimateOnScrollDemo,
					),
			},
			{
				path: 'form/form-layout',
				loadComponent: () =>
					import('./uikit/pages/form/form-layout/form-layout-demo').then((m) => m.FormLayoutDemo),
			},
			{
				path: 'form/file-composite',
				loadComponent: () =>
					import('./uikit/pages/form/file-composite/file-composite-demo').then(
						(m) => m.FileCompositeDemo,
					),
			},
			{
				path: 'data/list-composite',
				loadComponent: () =>
					import('./uikit/pages/data/list-composite/list-composite-demo').then(
						(m) => m.ListCompositeDemo,
					),
			},
			{
				path: 'data/tree-composite',
				loadComponent: () =>
					import('./uikit/pages/data/tree-composite/tree-composite-demo').then(
						(m) => m.TreeCompositeDemo,
					),
			},
			{
				path: 'data/timeline-composite',
				loadComponent: () =>
					import('./uikit/pages/data/timeline-composite/timeline-composite-demo').then(
						(m) => m.TimelineCompositeDemo,
					),
			},
			{
				path: 'navigation/menu-in-context',
				loadComponent: () =>
					import('./uikit/pages/navigation/menu-in-context/menu-in-context-demo').then(
						(m) => m.MenuInContextDemo,
					),
			},
			{
				path: 'feedback/message-toast-stack',
				loadComponent: () =>
					import('./uikit/pages/feedback/message-toast-stack/message-toast-stack-demo').then(
						(m) => m.MessageToastStackDemo,
					),
			},
			{
				path: 'layout/panel-composite',
				loadComponent: () =>
					import('./uikit/pages/layout/panel-composite/panel-composite-demo').then(
						(m) => m.PanelCompositeDemo,
					),
			},
			{
				path: 'media/media-gallery',
				loadComponent: () =>
					import('./uikit/pages/media/media-gallery/media-gallery-demo').then(
						(m) => m.MediaGalleryDemo,
					),
			},
			{
				path: 'media/chart-dashboard',
				loadComponent: () =>
					import('./uikit/pages/media/chart-dashboard/chart-dashboard-demo').then(
						(m) => m.ChartDashboardDemo,
					),
			},
			{
				path: 'design-lab',
				loadComponent: () => import('./uikit/pages/design-lab/design-lab').then((m) => m.DesignLab),
			},
		],
	},
	{
		path: 'translations',
		component: ShowcaseShell,
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./translator/pages/translations/translations-page').then(
						(m) => m.TranslationsPage,
					),
			},
		],
	},
	{
		path: 'authentication/login',
		loadComponent: () => import('./pages/authentication/login/login').then((m) => m.Login),
	},
	{
		path: 'authentication/register',
		loadComponent: () =>
			import('./pages/authentication/register/register').then((m) => m.Register),
	},
	{
		path: '404',
		loadComponent: () => import('./pages/errors/not-found/not-found').then((m) => m.NotFound),
	},
	{ path: '**', redirectTo: '404' },
];
