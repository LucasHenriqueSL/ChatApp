import { DrawerPassThrough } from 'primeng/types/drawer';
export * from 'primeng/types/drawer';
import * as _angular_core from '@angular/core';
import { EventEmitter, ElementRef, TemplateRef, QueryList } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { ButtonProps } from 'primeng/button';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Drawer is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://www.primeng.org/drawer)
 *
 * @module drawerstyle
 *
 */
declare enum DrawerClasses {
    /**
     * Class name of the mask element
     */
    mask = "p-drawer-mask",
    /**
     * Class name of the root element
     */
    root = "p-drawer",
    /**
     * Class name of the header element
     */
    header = "p-drawer-header",
    /**
     * Class name of the title element
     */
    title = "p-drawer-title",
    /**
     * Class name of the close button element
     */
    pcCloseButton = "p-drawer-close-button",
    /**
     * Class name of the content element
     */
    content = "p-drawer-content"
}
declare class DrawerStyle extends BaseStyle {
    name: string;
    style: string;
    classes: {
        mask: ({ instance }: {
            instance: any;
        }) => (string | {
            "p-overlay-mask p-overlay-mask-enter-active": any;
            'p-drawer-full'?: undefined;
        } | {
            'p-drawer-full': any;
            "p-overlay-mask p-overlay-mask-enter-active"?: undefined;
        })[];
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-drawer-full': any;
            'p-drawer-open': any;
        })[];
        header: string;
        title: string;
        pcCloseButton: string;
        content: string;
        footer: string;
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DrawerStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<DrawerStyle>;
}
interface DrawerStyle extends BaseStyle {
}

/**
 * Sidebar is a panel component displayed as an overlay at the edges of the screen.
 * @group Components
 */
declare class Drawer extends BaseComponent<DrawerPassThrough> {
    componentName: string;
    $pcDrawer: Drawer | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @defaultValue 'self'
     * @group Props
     */
    appendTo: _angular_core.InputSignal<any>;
    /**
     * The motion options.
     * @group Props
     */
    motionOptions: _angular_core.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: _angular_core.Signal<MotionOptions>;
    /**
     * Whether to block scrolling of the document when drawer is active.
     * @group Props
     */
    blockScroll: boolean;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Aria label of the close icon.
     * @group Props
     */
    ariaCloseLabel: string | undefined;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex: boolean;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex: number;
    /**
     * Whether an overlay mask is displayed behind the drawer.
     * @group Props
     */
    modal: boolean;
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @group Props
     */
    closeButtonProps: ButtonProps;
    /**
     * Whether to dismiss drawer on click of the mask.
     * @group Props
     */
    dismissible: boolean;
    /**
     * Whether to display the close icon.
     * @group Props
     * @deprecated use 'closable' instead.
     */
    showCloseIcon: boolean;
    /**
     * Specifies if pressing escape key should hide the drawer.
     * @group Props
     */
    closeOnEscape: boolean;
    /**
     * Transition options of the animation.
     * @group Props
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     */
    transitionOptions: string;
    /**
     * The visible property is an input that determines the visibility of the component.
     * @defaultValue false
     * @group Props
     */
    get visible(): boolean;
    set visible(value: boolean);
    /**
     * Specifies the position of the drawer, valid values are "left", "right", "bottom" and "top".
     * @defaultValue 'left'
     * @group Props
     */
    position: _angular_core.InputSignal<"left" | "right" | "bottom" | "top" | "full">;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @defaultValue false
     * @group Props
     */
    fullScreen: _angular_core.InputSignal<boolean>;
    $enterAnimation: _angular_core.Signal<string>;
    $leaveAnimation: _angular_core.Signal<string>;
    /**
     * Title content of the dialog.
     * @group Props
     */
    header: string | undefined;
    /**
     * Style of the mask.
     * @group Props
     */
    maskStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Whether to display close button.
     * @group Props
     * @defaultValue true
     */
    closable: boolean;
    /**
     * Callback to invoke when dialog is shown.
     * @group Emits
     */
    onShow: EventEmitter<any>;
    /**
     * Callback to invoke when dialog is hidden.
     * @group Emits
     */
    onHide: EventEmitter<any>;
    /**
     * Callback to invoke when dialog visibility is changed.
     * @param {boolean} value - Visible value.
     * @group Emits
     */
    visibleChange: EventEmitter<boolean>;
    containerViewChild: ElementRef | undefined;
    closeButtonViewChild: ElementRef | undefined;
    initialized: boolean | undefined;
    _visible: boolean | undefined;
    _position: string;
    _fullScreen: boolean;
    modalVisible: boolean;
    container: Nullable<HTMLDivElement>;
    mask: Nullable<HTMLDivElement>;
    maskClickListener: VoidListener;
    documentEscapeListener: VoidListener;
    animationEndListener: VoidListener;
    _componentStyle: DrawerStyle;
    onAfterViewInit(): void;
    /**
     * Custom header template.
     * @group Templates
     */
    headerTemplate: TemplateRef<void> | undefined;
    /**
     * Custom footer template.
     * @group Templates
     */
    footerTemplate: TemplateRef<void> | undefined;
    /**
     * Custom content template.
     * @group Templates
     */
    contentTemplate: TemplateRef<void> | undefined;
    /**
     * Custom close icon template.
     * @group Templates
     */
    closeIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom headless template to replace the entire drawer content.
     * @group Templates
     */
    headlessTemplate: TemplateRef<void> | undefined;
    $appendTo: _angular_core.Signal<any>;
    _headerTemplate: TemplateRef<void> | undefined;
    _footerTemplate: TemplateRef<void> | undefined;
    _contentTemplate: TemplateRef<void> | undefined;
    _closeIconTemplate: TemplateRef<void> | undefined;
    _headlessTemplate: TemplateRef<void> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    onAfterContentInit(): void;
    onKeyDown(event: KeyboardEvent): void;
    show(): void;
    hide(emit?: boolean): void;
    close(event: Event): void;
    enableModality(): void;
    getMaskStyle(): string;
    disableModality(): void;
    destroyModal(): void;
    onBeforeEnter(event: MotionEvent): void;
    onAfterLeave(): void;
    appendContainer(): void;
    bindDocumentEscapeListener(): void;
    unbindDocumentEscapeListener(): void;
    unbindMaskClickListener(): void;
    unbindGlobalListeners(): void;
    unbindAnimationEndListener(): void;
    onDestroy(): void;
    get dataP(): string | undefined;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Drawer, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Drawer, "p-drawer", never, { "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; "blockScroll": { "alias": "blockScroll"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "ariaCloseLabel": { "alias": "ariaCloseLabel"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "modal": { "alias": "modal"; "required": false; }; "closeButtonProps": { "alias": "closeButtonProps"; "required": false; }; "dismissible": { "alias": "dismissible"; "required": false; }; "showCloseIcon": { "alias": "showCloseIcon"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; "fullScreen": { "alias": "fullScreen"; "required": false; "isSignal": true; }; "header": { "alias": "header"; "required": false; }; "maskStyle": { "alias": "maskStyle"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; "visibleChange": "visibleChange"; }, ["headerTemplate", "footerTemplate", "contentTemplate", "closeIconTemplate", "headlessTemplate", "templates"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_blockScroll: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_modal: unknown;
    static ngAcceptInputType_dismissible: unknown;
    static ngAcceptInputType_showCloseIcon: unknown;
    static ngAcceptInputType_closeOnEscape: unknown;
    static ngAcceptInputType_closable: unknown;
}
declare class DrawerModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DrawerModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<DrawerModule, never, [typeof Drawer, typeof i2.SharedModule], [typeof Drawer, typeof i2.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<DrawerModule>;
}

export { Drawer, DrawerClasses, DrawerModule, DrawerStyle };
