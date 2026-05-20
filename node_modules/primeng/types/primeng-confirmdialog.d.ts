import * as i0 from '@angular/core';
import { OnInit, AfterContentInit, OnDestroy, NgZone, EventEmitter, TemplateRef, QueryList } from '@angular/core';
import * as i2 from 'primeng/api';
import { ConfirmEventType, PrimeTemplate, Confirmation, ConfirmationService } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Dialog } from 'primeng/dialog';
import { Nullable } from 'primeng/ts-helpers';
import { ConfirmDialogPassThrough, ConfirmDialogMessageTemplateContext, ConfirmDialogHeadlessTemplateContext } from 'primeng/types/confirmdialog';
export * from 'primeng/types/confirmdialog';
import { Subscription } from 'rxjs';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primeng.org/confirmdialog)
 *
 * @module confirmdialogstyle
 *
 */
declare enum ConfirmDialogClasses {
    /**
     * Class name of the root element
     */
    root = "p-confirmdialog",
    /**
     * Class name of the icon element
     */
    icon = "p-confirmdialog-icon",
    /**
     * Class name of the message element
     */
    message = "p-confirmdialog-message",
    /**
     * Class name of the reject button element
     */
    pcRejectButton = "p-confirmdialog-reject-button",
    /**
     * Class name of the accept button element
     */
    pcAcceptButton = "p-confirmdialog-accept-button"
}
declare class ConfirmDialogStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: string;
        icon: string;
        message: string;
        pcRejectButton: string;
        pcAcceptButton: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmDialogStyle>;
}
interface ConfirmDialogStyle extends BaseStyle {
}

/**
 * ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.
 * @group Components
 */
declare class ConfirmDialog extends BaseComponent<ConfirmDialogPassThrough> implements OnInit, AfterContentInit, OnDestroy {
    private confirmationService;
    zone: NgZone;
    componentName: string;
    $pcConfirmDialog: ConfirmDialog | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header: string | undefined;
    /**
     * Icon to display next to message.
     * @group Props
     */
    icon: string | undefined;
    /**
     * Message of the confirmation.
     * @group Props
     */
    message: string | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    get style(): {
        [klass: string]: any;
    } | null | undefined;
    set style(value: {
        [klass: string]: any;
    } | null | undefined);
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Specify the CSS class(es) for styling the mask element
     * @group Props
     */
    maskStyleClass: string | undefined;
    /**
     * Icon of the accept button.
     * @group Props
     */
    acceptIcon: string | undefined;
    /**
     * Label of the accept button.
     * @group Props
     */
    acceptLabel: string | undefined;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel: string | undefined;
    /**
     * Defines a string that labels the accept button for accessibility.
     * @group Props
     */
    acceptAriaLabel: string | undefined;
    /**
     * Visibility of the accept button.
     * @group Props
     */
    acceptVisible: boolean;
    /**
     * Icon of the reject button.
     * @group Props
     */
    rejectIcon: string | undefined;
    /**
     * Label of the reject button.
     * @group Props
     */
    rejectLabel: string | undefined;
    /**
     * Defines a string that labels the reject button for accessibility.
     * @group Props
     */
    rejectAriaLabel: string | undefined;
    /**
     * Visibility of the reject button.
     * @group Props
     */
    rejectVisible: boolean;
    /**
     * Style class of the accept button.
     * @group Props
     */
    acceptButtonStyleClass: string | undefined;
    /**
     * Style class of the reject button.
     * @group Props
     */
    rejectButtonStyleClass: string | undefined;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape: boolean;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask: boolean | undefined;
    /**
     * Determines whether scrolling behavior should be blocked within the component.
     * @group Props
     */
    blockScroll: boolean;
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
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @defaultValue 'body'
     * @group Props
     */
    appendTo: i0.InputSignal<any>;
    /**
     * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
     * @group Props
     */
    key: string | undefined;
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
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    /**
     * When enabled, can only focus on elements inside the confirm dialog.
     * @group Props
     */
    focusTrap: boolean;
    /**
     * Element to receive the focus when the dialog gets visible.
     * @group Props
     */
    defaultFocus: 'accept' | 'reject' | 'close' | 'none';
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints: any;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal: boolean;
    /**
     * Current visible state as a boolean.
     * @group Props
     */
    get visible(): any;
    set visible(value: any);
    /**
     *  Allows getting the position of the component.
     * @group Props
     */
    position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable: boolean;
    /**
     * Callback to invoke when dialog is hidden.
     * @param {ConfirmEventType} enum - Custom confirm event.
     * @group Emits
     */
    onHide: EventEmitter<ConfirmEventType>;
    footer: Nullable<TemplateRef<any>>;
    _componentStyle: ConfirmDialogStyle;
    /**
     * Custom header template.
     * @group Templates
     */
    headerTemplate: Nullable<TemplateRef<void>>;
    /**
     * Custom footer template.
     * @group Templates
     */
    footerTemplate: Nullable<TemplateRef<void>>;
    /**
     * Custom reject icon template.
     * @group Templates
     */
    rejectIconTemplate: Nullable<TemplateRef<void>>;
    /**
     * Custom accept icon template.
     * @group Templates
     */
    acceptIconTemplate: Nullable<TemplateRef<void>>;
    /**
     * Custom message template.
     * @group Templates
     */
    messageTemplate: Nullable<TemplateRef<ConfirmDialogMessageTemplateContext>>;
    /**
     * Custom icon template.
     * @group Templates
     */
    iconTemplate: Nullable<TemplateRef<void>>;
    /**
     * Custom headless template.
     * @group Templates
     */
    headlessTemplate: Nullable<TemplateRef<ConfirmDialogHeadlessTemplateContext>>;
    templates: QueryList<PrimeTemplate> | undefined;
    $appendTo: i0.Signal<any>;
    _headerTemplate: TemplateRef<void> | undefined;
    _footerTemplate: TemplateRef<void> | undefined;
    _rejectIconTemplate: TemplateRef<void> | undefined;
    _acceptIconTemplate: TemplateRef<void> | undefined;
    _messageTemplate: TemplateRef<ConfirmDialogMessageTemplateContext> | undefined;
    _iconTemplate: TemplateRef<void> | undefined;
    _headlessTemplate: TemplateRef<ConfirmDialogHeadlessTemplateContext> | undefined;
    confirmation: Nullable<Confirmation>;
    _visible: boolean | undefined;
    _style: {
        [klass: string]: any;
    } | null | undefined;
    maskVisible: boolean | undefined;
    dialog: Nullable<Dialog>;
    wrapper: Nullable<HTMLElement>;
    contentContainer: Nullable<HTMLDivElement>;
    subscription: Subscription;
    preWidth: number | undefined;
    styleElement: any;
    id: string;
    ariaLabelledBy: string | null;
    translationSubscription: Subscription | undefined;
    constructor(confirmationService: ConfirmationService, zone: NgZone);
    onInit(): void;
    onAfterContentInit(): void;
    getAriaLabelledBy(): string | null;
    option(name: string, k?: string): any;
    getButtonStyleClass(cx: string, opt: string): string;
    getElementToFocus(): Element | null | undefined;
    createStyle(): void;
    close(): void;
    hide(type?: ConfirmEventType): void;
    onDialogHide(): void;
    destroyStyle(): void;
    onDestroy(): void;
    onVisibleChange(value: boolean): void;
    onAccept(): void;
    onReject(): void;
    unsubscribeConfirmationEvents(): void;
    get acceptButtonLabel(): string;
    get rejectButtonLabel(): string;
    getAcceptButtonProps(): any;
    getRejectButtonProps(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialog, "p-confirmDialog, p-confirmdialog, p-confirm-dialog", never, { "header": { "alias": "header"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "message": { "alias": "message"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "maskStyleClass": { "alias": "maskStyleClass"; "required": false; }; "acceptIcon": { "alias": "acceptIcon"; "required": false; }; "acceptLabel": { "alias": "acceptLabel"; "required": false; }; "closeAriaLabel": { "alias": "closeAriaLabel"; "required": false; }; "acceptAriaLabel": { "alias": "acceptAriaLabel"; "required": false; }; "acceptVisible": { "alias": "acceptVisible"; "required": false; }; "rejectIcon": { "alias": "rejectIcon"; "required": false; }; "rejectLabel": { "alias": "rejectLabel"; "required": false; }; "rejectAriaLabel": { "alias": "rejectAriaLabel"; "required": false; }; "rejectVisible": { "alias": "rejectVisible"; "required": false; }; "acceptButtonStyleClass": { "alias": "acceptButtonStyleClass"; "required": false; }; "rejectButtonStyleClass": { "alias": "rejectButtonStyleClass"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "dismissableMask": { "alias": "dismissableMask"; "required": false; }; "blockScroll": { "alias": "blockScroll"; "required": false; }; "rtl": { "alias": "rtl"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "key": { "alias": "key"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "focusTrap": { "alias": "focusTrap"; "required": false; }; "defaultFocus": { "alias": "defaultFocus"; "required": false; }; "breakpoints": { "alias": "breakpoints"; "required": false; }; "modal": { "alias": "modal"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "position": { "alias": "position"; "required": false; }; "draggable": { "alias": "draggable"; "required": false; }; }, { "onHide": "onHide"; }, ["footer", "headerTemplate", "footerTemplate", "rejectIconTemplate", "acceptIconTemplate", "messageTemplate", "iconTemplate", "headlessTemplate", "templates"], ["p-footer"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_acceptVisible: unknown;
    static ngAcceptInputType_rejectVisible: unknown;
    static ngAcceptInputType_closeOnEscape: unknown;
    static ngAcceptInputType_dismissableMask: unknown;
    static ngAcceptInputType_blockScroll: unknown;
    static ngAcceptInputType_rtl: unknown;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_focusTrap: unknown;
    static ngAcceptInputType_modal: unknown;
    static ngAcceptInputType_draggable: unknown;
}
declare class ConfirmDialogModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ConfirmDialogModule, never, [typeof ConfirmDialog, typeof i2.SharedModule], [typeof ConfirmDialog, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ConfirmDialogModule>;
}

export { ConfirmDialog, ConfirmDialogClasses, ConfirmDialogModule, ConfirmDialogStyle };
