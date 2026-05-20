import { ConfirmPopupPassThrough, ConfirmPopupContentTemplateContext, ConfirmPopupHeadlessTemplateContext } from 'primeng/types/confirmpopup';
export * from 'primeng/types/confirmpopup';
import * as _angular_core from '@angular/core';
import { ElementRef, Renderer2, ChangeDetectorRef, TemplateRef, QueryList } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { OverlayService, Confirmation, ConfirmationService, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import { Subscription } from 'rxjs';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primeng.org/confirmpopup)
 *
 * @module confirmpopupstyle
 *
 */
declare enum ConfirmPopupClasses {
    /**
     * Class name of the root element
     */
    root = "p-confirmpopup",
    /**
     * Class name of the content element
     */
    content = "p-confirmpopup-content",
    /**
     * Class name of the icon element
     */
    icon = "p-confirmpopup-icon",
    /**
     * Class name of the message element
     */
    message = "p-confirmpopup-message",
    /**
     * Class name of the footer element
     */
    footer = "p-confirmpopup-footer",
    /**
     * Class name of the reject button element
     */
    pcRejectButton = "p-confirmpopup-reject-button",
    /**
     * Class name of the accept button element
     */
    pcAcceptButton = "p-confirmpopup-accept-button"
}
declare class ConfirmPopupStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: () => string[];
        content: string;
        icon: ({ instance }: {
            instance: any;
        }) => any[];
        message: string;
        footer: string;
        pcRejectButton: string;
        pcAcceptButton: string;
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ConfirmPopupStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ConfirmPopupStyle>;
}
interface ConfirmPopupStyle extends BaseStyle {
}

/**
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 * @group Components
 */
declare class ConfirmPopup extends BaseComponent<ConfirmPopupPassThrough> {
    el: ElementRef;
    private confirmationService;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    overlayService: OverlayService;
    document: Document;
    componentName: string;
    $pcConfirmPopup: ConfirmPopup | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
     * @group Props
     */
    key: string | undefined;
    /**
     * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
     * @group Props
     */
    defaultFocus: string;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     */
    hideTransitionOptions: string;
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
     * Defines if the component is visible.
     * @group Props
     */
    visible: _angular_core.InputSignal<boolean | undefined>;
    private _visible;
    computedVisible: _angular_core.Signal<boolean>;
    render: _angular_core.WritableSignal<boolean>;
    /**
     * The motion options.
     * @group Props
     */
    motionOptions: _angular_core.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: _angular_core.Signal<MotionOptions>;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @defaultValue 'body'
     * @group Props
     */
    appendTo: _angular_core.InputSignal<any>;
    $appendTo: _angular_core.Signal<any>;
    container: HTMLElement | null;
    subscription: Subscription;
    confirmation: Nullable<Confirmation>;
    autoFocusAccept: boolean;
    autoFocusReject: boolean;
    /**
     * Custom content template.
     * @group Templates
     */
    contentTemplate: Nullable<TemplateRef<ConfirmPopupContentTemplateContext>>;
    /**
     * Custom accept icon template.
     * @group Templates
     */
    acceptIconTemplate: Nullable<TemplateRef<void>>;
    /**
     * Custom reject icon template.
     * @group Templates
     */
    rejectIconTemplate: Nullable<TemplateRef<void>>;
    /**
     * Custom headless template.
     * @group Templates
     */
    headlessTemplate: Nullable<TemplateRef<ConfirmPopupHeadlessTemplateContext>>;
    acceptButtonViewChild: _angular_core.Signal<ElementRef<any> | undefined>;
    rejectButtonViewChild: _angular_core.Signal<ElementRef<any> | undefined>;
    _contentTemplate: TemplateRef<ConfirmPopupContentTemplateContext> | undefined;
    _acceptIconTemplate: TemplateRef<void> | undefined;
    _rejectIconTemplate: TemplateRef<void> | undefined;
    _headlessTemplate: TemplateRef<ConfirmPopupHeadlessTemplateContext> | undefined;
    documentClickListener: VoidListener;
    documentResizeListener: VoidListener;
    scrollHandler: Nullable<ConnectedOverlayScrollHandler>;
    private window;
    _componentStyle: ConfirmPopupStyle;
    constructor(el: ElementRef, confirmationService: ConfirmationService, renderer: Renderer2, cd: ChangeDetectorRef, overlayService: OverlayService, document: Document);
    templates: QueryList<PrimeTemplate> | undefined;
    onAfterContentInit(): void;
    option(name: string, k?: string): any;
    onEscapeKeydown(event: KeyboardEvent): void;
    onBeforeEnter(event: MotionEvent): void;
    handleFocus(): void;
    onAfterLeave(): void;
    getAcceptButtonProps(): any;
    getRejectButtonProps(): any;
    alignOverlay(): void;
    setZIndex(): void;
    alignArrow(): void;
    appendOverlay(): void;
    restoreAppend(): void;
    hide(): void;
    onAccept(): void;
    onReject(): void;
    onOverlayClick(event: MouseEvent): void;
    bindListeners(): void;
    unbindListeners(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    onWindowResize(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    unsubscribeConfirmationSubscriptions(): void;
    onContainerDestroy(): void;
    get acceptButtonLabel(): string;
    get rejectButtonLabel(): string;
    onDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ConfirmPopup, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ConfirmPopup, "p-confirmpopup", never, { "key": { "alias": "key"; "required": false; }; "defaultFocus": { "alias": "defaultFocus"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "visible": { "alias": "visible"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; }, {}, ["contentTemplate", "acceptIconTemplate", "rejectIconTemplate", "headlessTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
}
declare class ConfirmPopupModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ConfirmPopupModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ConfirmPopupModule, never, [typeof ConfirmPopup, typeof i2.SharedModule], [typeof ConfirmPopup, typeof i2.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ConfirmPopupModule>;
}

export { ConfirmPopup, ConfirmPopupClasses, ConfirmPopupModule, ConfirmPopupStyle };
