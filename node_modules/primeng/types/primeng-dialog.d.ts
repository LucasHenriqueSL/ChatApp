import { DialogPassThrough } from 'primeng/types/dialog';
export * from 'primeng/types/dialog';
import * as _angular_core from '@angular/core';
import { OnInit, AfterContentInit, OnDestroy, EventEmitter, ElementRef, TemplateRef, NgZone, QueryList } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { ButtonProps } from 'primeng/button';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primeng.org/dialog)
 *
 * @module dialogstyle
 *
 */
declare enum DialogClasses {
    /**
     * Class name of the mask element
     */
    mask = "p-dialog-mask",
    /**
     * Class name of the root element
     */
    root = "p-dialog",
    /**
     * Class name of the header element
     */
    header = "p-dialog-header",
    /**
     * Class name of the title element
     */
    title = "p-dialog-title",
    /**
     * Class name of the header actions element
     */
    headerActions = "p-dialog-header-actions",
    /**
     * Class name of the maximize button element
     */
    pcMaximizeButton = "p-dialog-maximize-button",
    /**
     * Class name of the close button element
     */
    pcCloseButton = "p-dialog-close-button",
    /**
     * Class name of the content element
     */
    content = "p-dialog-content",
    /**
     * Class name of the footer element
     */
    footer = "p-dialog-footer"
}
declare class DialogStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        mask: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-overlay-mask': any;
        })[];
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-dialog-maximized': any;
        })[];
        header: string;
        title: string;
        resizeHandle: string;
        headerActions: string;
        pcMaximizeButton: string;
        pcCloseButton: string;
        content: () => string[];
        footer: string;
    };
    inlineStyles: {
        mask: ({ instance }: {
            instance: any;
        }) => {
            position: string;
            height: string;
            width: string;
            left: number;
            top: number;
            display: string;
            justifyContent: string;
            alignItems: string;
            pointerEvents: string;
        };
        root: {
            display: string;
            flexDirection: string;
            pointerEvents: string;
        };
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DialogStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<DialogStyle>;
}
interface DialogStyle extends BaseStyle {
}

/**
 * Dialog is a container to display content in an overlay window.
 * @group Components
 */
declare class Dialog extends BaseComponent<DialogPassThrough> implements OnInit, AfterContentInit, OnDestroy {
    componentName: string;
    hostName: string;
    $pcDialog: Dialog | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header: string | undefined;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable: boolean;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable: boolean;
    /**
     * Style of the content section.
     * @group Props
     */
    contentStyle: any;
    /**
     * Style class of the content.
     * @group Props
     */
    contentStyleClass: string | undefined;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal: boolean;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape: boolean;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask: boolean;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    rtl: boolean;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable: boolean;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints: any;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass: string | undefined;
    /**
     * Style of the mask.
     * @group Props
     */
    maskStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader: boolean;
    /**
     * Whether background scroll should be blocked when dialog is visible.
     * @group Props
     */
    blockScroll: boolean;
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
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX: number;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY: number;
    /**
     * When enabled, first focusable element receives focus on show.
     * @group Props
     */
    focusOnShow: boolean;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable: boolean;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport: boolean;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap: boolean;
    /**
     * Transition options of the animation.
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     * @group Props
     */
    transitionOptions: string;
    /**
     * The motion options for the mask.
     * @group Props
     */
    maskMotionOptions: _angular_core.InputSignal<MotionOptions | undefined>;
    computedMaskMotionOptions: _angular_core.Signal<MotionOptions>;
    /**
     * The motion options.
     * @group Props
     */
    motionOptions: _angular_core.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: _angular_core.Signal<MotionOptions>;
    /**
     * Name of the close icon.
     * @group Props
     */
    closeIcon: string | undefined;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel: string | undefined;
    /**
     * Index of the close button in tabbing order.
     * @group Props
     */
    closeTabindex: string;
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon: string | undefined;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon: string | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @group Props
     */
    closeButtonProps: ButtonProps;
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @group Props
     */
    maximizeButtonProps: ButtonProps;
    /**
     * Specifies the visibility of the dialog.
     * @group Props
     */
    get visible(): boolean;
    set visible(value: boolean);
    /**
     * Inline style of the component.
     * @group Props
     */
    get style(): any;
    set style(value: any);
    /**
     * Position of the dialog.
     * @group Props
     */
    position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    /**
     * Role attribute of html element.
     * @group Emits
     */
    role: string;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @defaultValue 'self'
     * @group Props
     */
    appendTo: _angular_core.InputSignal<any>;
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
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {boolean} value - New value.
     * @group Emits
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Callback to invoke when dialog resizing is initiated.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeInit: EventEmitter<MouseEvent>;
    /**
     * Callback to invoke when dialog resizing is completed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeEnd: EventEmitter<MouseEvent>;
    /**
     * Callback to invoke when dialog dragging is completed.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragEnd: EventEmitter<DragEvent>;
    /**
     * Callback to invoke when dialog maximized or unmaximized.
     * @group Emits
     */
    onMaximize: EventEmitter<any>;
    headerViewChild: Nullable<ElementRef>;
    contentViewChild: Nullable<ElementRef>;
    footerViewChild: Nullable<ElementRef>;
    /**
     * Header template.
     * @group Templates
     */
    headerTemplate: TemplateRef<void> | undefined;
    /**
     * Content template.
     * @group Templates
     */
    contentTemplate: TemplateRef<void> | undefined;
    /**
     * Footer template.
     * @group Templates
     */
    footerTemplate: TemplateRef<void> | undefined;
    /**
     * Close icon template.
     * @group Templates
     */
    closeIconTemplate: TemplateRef<void> | undefined;
    /**
     * Maximize icon template.
     * @group Templates
     */
    maximizeIconTemplate: TemplateRef<void> | undefined;
    /**
     * Minimize icon template.
     * @group Templates
     */
    minimizeIconTemplate: TemplateRef<void> | undefined;
    /**
     * Headless template.
     * @group Templates
     */
    headlessTemplate: TemplateRef<void> | undefined;
    /**
     * Custom header template.
     * @group Templates
     */
    _headerTemplate: TemplateRef<void> | undefined;
    /**
     * Custom content template.
     * @group Templates
     */
    _contentTemplate: TemplateRef<void> | undefined;
    /**
     * Custom footer template.
     * @group Templates
     */
    _footerTemplate: TemplateRef<void> | undefined;
    /**
     * Custom close icon template.
     * @group Templates
     */
    _closeiconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom maximize icon template.
     * @group Templates
     */
    _maximizeiconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom minimize icon template.
     * @group Templates
     */
    _minimizeiconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom headless template.
     * @group Templates
     */
    _headlessTemplate: TemplateRef<void> | undefined;
    $appendTo: _angular_core.Signal<any>;
    renderMask: _angular_core.WritableSignal<boolean>;
    renderDialog: _angular_core.WritableSignal<boolean>;
    _visible: boolean;
    maskVisible: boolean | undefined;
    container: _angular_core.WritableSignal<Nullable<HTMLElement>>;
    wrapper: Nullable<HTMLElement>;
    dragging: boolean | undefined;
    ariaLabelledBy: string | null;
    documentDragListener: VoidListener;
    documentDragEndListener: VoidListener;
    resizing: boolean | undefined;
    documentResizeListener: VoidListener;
    documentResizeEndListener: VoidListener;
    documentEscapeListener: VoidListener;
    maskClickListener: VoidListener;
    lastPageX: number | undefined;
    lastPageY: number | undefined;
    preventVisibleChangePropagation: boolean | undefined;
    maximized: boolean | undefined;
    preMaximizeContentHeight: number | undefined;
    preMaximizeContainerWidth: number | undefined;
    preMaximizeContainerHeight: number | undefined;
    preMaximizePageX: number | undefined;
    preMaximizePageY: number | undefined;
    id: string;
    _style: any;
    originalStyle: any;
    transformOptions: any;
    styleElement: any;
    private window;
    _componentStyle: DialogStyle;
    headerT: TemplateRef<void> | undefined;
    contentT: TemplateRef<void> | undefined;
    footerT: TemplateRef<void> | undefined;
    closeIconT: TemplateRef<void> | undefined;
    maximizeIconT: TemplateRef<void> | undefined;
    minimizeIconT: TemplateRef<void> | undefined;
    headlessT: TemplateRef<void> | undefined;
    private zIndexForLayering?;
    get maximizeLabel(): string;
    get minimizeLabel(): string;
    zone: NgZone;
    private overlayService;
    get maskClass(): {
        [x: string]: string | boolean | undefined;
        'p-dialog-mask': boolean;
        'p-overlay-mask': boolean;
    };
    onInit(): void;
    templates: QueryList<PrimeTemplate> | undefined;
    onAfterContentInit(): void;
    getAriaLabelledBy(): string | null;
    parseDurationToMilliseconds(durationString: string): number | undefined;
    _focus(focusParentElement?: HTMLElement): boolean;
    focus(focusParentElement?: HTMLElement): void;
    close(event: Event): void;
    enableModality(): void;
    disableModality(): void;
    maximize(): void;
    unbindMaskClickListener(): void;
    moveOnTop(): void;
    createStyle(): void;
    initDrag(event: MouseEvent): void;
    onDrag(event: MouseEvent): void;
    endDrag(event: DragEvent): void;
    resetPosition(): void;
    center(): void;
    initResize(event: MouseEvent): void;
    onResize(event: MouseEvent): void;
    resizeEnd(event: MouseEvent): void;
    bindGlobalListeners(): void;
    unbindGlobalListeners(): void;
    bindDocumentDragListener(): void;
    unbindDocumentDragListener(): void;
    bindDocumentDragEndListener(): void;
    unbindDocumentDragEndListener(): void;
    bindDocumentResizeListeners(): void;
    unbindDocumentResizeListeners(): void;
    bindDocumentEscapeListener(): void;
    unbindDocumentEscapeListener(): void;
    appendContainer(): void;
    restoreAppend(): void;
    onBeforeEnter(event: MotionEvent): void;
    onAfterEnter(): void;
    onBeforeLeave(): void;
    onAfterLeave(): void;
    onMaskAfterLeave(): void;
    onContainerDestroy(): void;
    destroyStyle(): void;
    onDestroy(): void;
    get dataP(): string | undefined;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Dialog, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Dialog, "p-dialog", never, { "hostName": { "alias": "hostName"; "required": false; }; "header": { "alias": "header"; "required": false; }; "draggable": { "alias": "draggable"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; "contentStyle": { "alias": "contentStyle"; "required": false; }; "contentStyleClass": { "alias": "contentStyleClass"; "required": false; }; "modal": { "alias": "modal"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "dismissableMask": { "alias": "dismissableMask"; "required": false; }; "rtl": { "alias": "rtl"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "breakpoints": { "alias": "breakpoints"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "maskStyleClass": { "alias": "maskStyleClass"; "required": false; }; "maskStyle": { "alias": "maskStyle"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; "blockScroll": { "alias": "blockScroll"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "minX": { "alias": "minX"; "required": false; }; "minY": { "alias": "minY"; "required": false; }; "focusOnShow": { "alias": "focusOnShow"; "required": false; }; "maximizable": { "alias": "maximizable"; "required": false; }; "keepInViewport": { "alias": "keepInViewport"; "required": false; }; "focusTrap": { "alias": "focusTrap"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "maskMotionOptions": { "alias": "maskMotionOptions"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; "closeIcon": { "alias": "closeIcon"; "required": false; }; "closeAriaLabel": { "alias": "closeAriaLabel"; "required": false; }; "closeTabindex": { "alias": "closeTabindex"; "required": false; }; "minimizeIcon": { "alias": "minimizeIcon"; "required": false; }; "maximizeIcon": { "alias": "maximizeIcon"; "required": false; }; "closeButtonProps": { "alias": "closeButtonProps"; "required": false; }; "maximizeButtonProps": { "alias": "maximizeButtonProps"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "style": { "alias": "style"; "required": false; }; "position": { "alias": "position"; "required": false; }; "role": { "alias": "role"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "headerTemplate": { "alias": "content"; "required": false; }; "contentTemplate": { "alias": "contentTemplate"; "required": false; }; "footerTemplate": { "alias": "footerTemplate"; "required": false; }; "closeIconTemplate": { "alias": "closeIconTemplate"; "required": false; }; "maximizeIconTemplate": { "alias": "maximizeIconTemplate"; "required": false; }; "minimizeIconTemplate": { "alias": "minimizeIconTemplate"; "required": false; }; "headlessTemplate": { "alias": "headlessTemplate"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; "visibleChange": "visibleChange"; "onResizeInit": "onResizeInit"; "onResizeEnd": "onResizeEnd"; "onDragEnd": "onDragEnd"; "onMaximize": "onMaximize"; }, ["_headerTemplate", "_contentTemplate", "_footerTemplate", "_closeiconTemplate", "_maximizeiconTemplate", "_minimizeiconTemplate", "_headlessTemplate", "templates"], ["*", "p-footer"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_draggable: unknown;
    static ngAcceptInputType_resizable: unknown;
    static ngAcceptInputType_modal: unknown;
    static ngAcceptInputType_closeOnEscape: unknown;
    static ngAcceptInputType_dismissableMask: unknown;
    static ngAcceptInputType_rtl: unknown;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_showHeader: unknown;
    static ngAcceptInputType_blockScroll: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_minX: unknown;
    static ngAcceptInputType_minY: unknown;
    static ngAcceptInputType_focusOnShow: unknown;
    static ngAcceptInputType_maximizable: unknown;
    static ngAcceptInputType_keepInViewport: unknown;
    static ngAcceptInputType_focusTrap: unknown;
}
declare class DialogModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DialogModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<DialogModule, never, [typeof Dialog, typeof i2.SharedModule], [typeof Dialog, typeof i2.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<DialogModule>;
}

export { Dialog, DialogClasses, DialogModule, DialogStyle };
