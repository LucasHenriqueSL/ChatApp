import { PopoverPassThrough, PopoverContentTemplateContext } from 'primeng/types/popover';
export * from 'primeng/types/popover';
import * as i0 from '@angular/core';
import { EventEmitter, TemplateRef, QueryList, NgZone } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { PrimeTemplate, OverlayService } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import { Subscription } from 'rxjs';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

declare class PopoverStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: string;
        content: string;
    };
    inlineStyles: {
        root: () => {
            position: string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PopoverStyle>;
}

/**
 * Popover is a container component that can overlay other components on page.
 * @group Components
 */
declare class Popover extends BaseComponent<PopoverPassThrough> {
    componentName: string;
    $pcPopover: Popover | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Enables to hide the overlay when outside is clicked.
     * @group Props
     */
    dismissable: boolean;
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
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @defaultValue 'self'
     * @group Props
     */
    appendTo: i0.InputSignal<any>;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex: boolean;
    /**
     * Aria label of the close icon.
     * @group Props
     */
    ariaCloseLabel: string | undefined;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex: number;
    /**
     * When enabled, first button receives focus on show.
     * @group Props
     */
    focusOnShow: boolean;
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
     * The motion options.
     * @group Props
     */
    motionOptions: i0.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: i0.Signal<MotionOptions>;
    /**
     * Callback to invoke when an overlay becomes visible.
     * @group Emits
     */
    onShow: EventEmitter<any>;
    /**
     * Callback to invoke when an overlay gets hidden.
     * @group Emits
     */
    onHide: EventEmitter<any>;
    $appendTo: i0.Signal<any>;
    container: Nullable<HTMLDivElement>;
    overlayVisible: boolean;
    render: boolean;
    selfClick: boolean;
    documentClickListener: VoidListener;
    target: any;
    willHide: Nullable<boolean>;
    scrollHandler: Nullable<ConnectedOverlayScrollHandler>;
    documentResizeListener: VoidListener;
    /**
     * Custom content template.
     * @param {PopoverContentTemplateContext} context - content context.
     * @see {@link PopoverContentTemplateContext}
     * @group Templates
     */
    contentTemplate: Nullable<TemplateRef<PopoverContentTemplateContext>>;
    templates: QueryList<PrimeTemplate>;
    _contentTemplate: TemplateRef<PopoverContentTemplateContext> | undefined;
    destroyCallback: Nullable<Function>;
    overlayEventListener: Nullable<(event?: any) => void>;
    overlaySubscription: Subscription | undefined;
    _componentStyle: PopoverStyle;
    zone: NgZone;
    overlayService: OverlayService;
    onAfterContentInit(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    /**
     * Toggles the visibility of the panel.
     * @param {Event} event - Browser event
     * @param {Target} target - Target element.
     * @group Method
     */
    toggle(event: any, target?: any): void;
    /**
     * Displays the panel.
     * @param {Event} event - Browser event
     * @param {Target} target - Target element.
     * @group Method
     */
    show(event: any, target?: any): void;
    onOverlayClick(event: MouseEvent): void;
    onContentClick(event: MouseEvent): void;
    hasTargetChanged(event: any, target: any): boolean;
    appendOverlay(): void;
    restoreAppend(): void;
    setZIndex(): void;
    align(): void;
    onAnimationStart(event: MotionEvent): void;
    onAnimationEnd(): void;
    focus(): void;
    /**
     * Hides the panel.
     * @group Method
     */
    hide(): void;
    onCloseClick(event: MouseEvent): void;
    onEscapeKeydown(_event: KeyboardEvent): void;
    onWindowResize(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    onContainerDestroy(): void;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Popover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Popover, "p-popover", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "dismissable": { "alias": "dismissable"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "ariaCloseLabel": { "alias": "ariaCloseLabel"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "focusOnShow": { "alias": "focusOnShow"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; }, { "onShow": "onShow"; "onHide": "onHide"; }, ["contentTemplate", "templates"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_dismissable: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_focusOnShow: unknown;
}
declare class PopoverModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PopoverModule, never, [typeof Popover, typeof i2.SharedModule], [typeof Popover, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PopoverModule>;
}

export { Popover, PopoverModule, PopoverStyle };
