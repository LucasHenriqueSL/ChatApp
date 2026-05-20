import * as _angular_core from '@angular/core';
import { EventEmitter, ElementRef, TemplateRef, QueryList, NgZone } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { OverlayService, OverlayModeType, ResponsiveOverlayOptions, OverlayOptions, OverlayOnBeforeShowEvent, OverlayOnShowEvent, OverlayOnBeforeHideEvent, OverlayOnHideEvent, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { OverlayContentTemplateContext } from 'primeng/types/overlay';
import { BaseStyle } from 'primeng/base';

declare class OverlayStyle extends BaseStyle {
    name: string;
    style: string;
    classes: {
        host: string;
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-overlay-modal p-overlay-mask p-overlay-mask-enter-active': any;
            'p-overlay-center': any;
            'p-overlay-top': any;
            'p-overlay-top-start': any;
            'p-overlay-top-end': any;
            'p-overlay-bottom': any;
            'p-overlay-bottom-start': any;
            'p-overlay-bottom-end': any;
            'p-overlay-left': any;
            'p-overlay-left-start': any;
            'p-overlay-left-end': any;
            'p-overlay-right': any;
            'p-overlay-right-start': any;
            'p-overlay-right-end': any;
        })[];
        content: string;
    };
    inlineStyles: {
        root: () => {
            position: string;
            top: string;
        };
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<OverlayStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<OverlayStyle>;
}

/**
 * This API allows overlay components to be controlled from the PrimeNG. In this way, all overlay components in the application can have the same behavior.
 * @group Components
 */
declare class Overlay extends BaseComponent {
    overlayService: OverlayService;
    private zone;
    componentName: string;
    $pcOverlay: Overlay | undefined;
    hostName: string;
    /**
     * The visible property is an input that determines the visibility of the component.
     * @defaultValue false
     * @group Props
     */
    get visible(): boolean;
    set visible(value: boolean);
    /**
     * The mode property is an input that determines the overlay mode type or string.
     * @defaultValue null
     * @group Props
     */
    get mode(): OverlayModeType | string;
    set mode(value: OverlayModeType | string);
    /**
     * The style property is an input that determines the style object for the component.
     * @defaultValue null
     * @group Props
     */
    get style(): {
        [klass: string]: any;
    } | null | undefined;
    set style(value: {
        [klass: string]: any;
    } | null | undefined);
    /**
     * The styleClass property is an input that determines the CSS class(es) for the component.
     * @defaultValue null
     * @group Props
     */
    get styleClass(): string;
    set styleClass(value: string);
    /**
     * The contentStyle property is an input that determines the style object for the content of the component.
     * @defaultValue null
     * @group Props
     */
    get contentStyle(): {
        [klass: string]: any;
    } | null | undefined;
    set contentStyle(value: {
        [klass: string]: any;
    } | null | undefined);
    /**
     * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
     * @defaultValue null
     * @group Props
     */
    get contentStyleClass(): string;
    set contentStyleClass(value: string);
    /**
     * The target property is an input that specifies the target element or selector for the component.
     * @defaultValue null
     * @group Props
     */
    get target(): string | null | undefined;
    set target(value: string | null | undefined);
    /**
     * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
     * @defaultValue false
     * @group Props
     */
    get autoZIndex(): boolean;
    set autoZIndex(value: boolean);
    /**
     * The baseZIndex is base zIndex value to use in layering.
     * @defaultValue null
     * @group Props
     */
    get baseZIndex(): number;
    set baseZIndex(value: number);
    /**
     * Transition options of the show or hide animation.
     * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
     * @group Props
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     */
    get showTransitionOptions(): string;
    set showTransitionOptions(value: string);
    /**
     * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
     * @defaultValue .1s linear
     * @group Props
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     */
    get hideTransitionOptions(): string;
    set hideTransitionOptions(value: string);
    /**
     * The listener property is an input that specifies the listener object for the component.
     * @defaultValue null
     * @group Props
     */
    get listener(): any;
    set listener(value: any);
    /**
     * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
     * @defaultValue null
     * @group Props
     */
    get responsive(): ResponsiveOverlayOptions | undefined;
    set responsive(val: ResponsiveOverlayOptions | undefined);
    /**
     * The options property is an input that specifies the overlay options for the component.
     * @defaultValue null
     * @group Props
     */
    get options(): OverlayOptions | undefined;
    set options(val: OverlayOptions | undefined);
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @defaultValue 'self'
     * @group Props
     */
    appendTo: _angular_core.InputSignal<any>;
    /**
     * Specifies whether the overlay should be rendered inline within the current component's template.
     * @defaultValue false
     * @group Props
     */
    inline: _angular_core.InputSignal<boolean>;
    /**
     * The motion options.
     * @group Props
     */
    motionOptions: _angular_core.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: _angular_core.Signal<MotionOptions>;
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {Boolean} boolean - Value of visibility as boolean.
     * @group Emits
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Callback to invoke before the overlay is shown.
     * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
     * @group Emits
     */
    onBeforeShow: EventEmitter<OverlayOnBeforeShowEvent>;
    /**
     * Callback to invoke when the overlay is shown.
     * @param {OverlayOnShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow: EventEmitter<OverlayOnShowEvent>;
    /**
     * Callback to invoke before the overlay is hidden.
     * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
     * @group Emits
     */
    onBeforeHide: EventEmitter<OverlayOnBeforeHideEvent>;
    /**
     * Callback to invoke when the overlay is hidden
     * @param {OverlayOnHideEvent} event - Custom hide event.
     * @group Emits
     */
    onHide: EventEmitter<OverlayOnHideEvent>;
    /**
     * Callback to invoke when the animation is started.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     * @deprecated since v21.0.0. Use onOverlayBeforeEnter and onOverlayBeforeLeave instead.
     */
    onAnimationStart: EventEmitter<AnimationEvent>;
    /**
     * Callback to invoke when the animation is done.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     * @deprecated since v21.0.0. Use onOverlayAfterEnter and onOverlayAfterLeave instead.
     */
    onAnimationDone: EventEmitter<AnimationEvent>;
    /**
     * Callback to invoke before the overlay enters.
     * @param {MotionEvent} event - Event before enter.
     * @group Emits
     */
    onBeforeEnter: EventEmitter<MotionEvent>;
    /**
     * Callback to invoke when the overlay enters.
     * @param {MotionEvent} event - Event on enter.
     * @group Emits
     */
    onEnter: EventEmitter<MotionEvent>;
    /**
     * Callback to invoke after the overlay has entered.
     * @param {MotionEvent} event - Event after enter.
     * @group Emits
     */
    onAfterEnter: EventEmitter<MotionEvent>;
    /**
     * Callback to invoke before the overlay leaves.
     * @param {MotionEvent} event - Event before leave.
     * @group Emits
     */
    onBeforeLeave: EventEmitter<MotionEvent>;
    /**
     * Callback to invoke when the overlay leaves.
     * @param {MotionEvent} event - Event on leave.
     * @group Emits
     */
    onLeave: EventEmitter<MotionEvent>;
    /**
     * Callback to invoke after the overlay has left.
     * @param {MotionEvent} event - Event after leave.
     * @group Emits
     */
    onAfterLeave: EventEmitter<MotionEvent>;
    overlayViewChild: ElementRef | undefined;
    contentViewChild: ElementRef | undefined;
    /**
     * Content template of the component.
     * @param {OverlayContentTemplateContext} context - content context.
     * @see {@link OverlayContentTemplateContext}
     * @group Templates
     */
    contentTemplate: TemplateRef<OverlayContentTemplateContext> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    hostAttrSelector: _angular_core.InputSignal<string | undefined>;
    $appendTo: _angular_core.Signal<any>;
    _contentTemplate: TemplateRef<OverlayContentTemplateContext> | undefined;
    _visible: boolean;
    _mode: OverlayModeType | string;
    _style: {
        [klass: string]: any;
    } | null | undefined;
    _styleClass: string | undefined;
    _contentStyle: {
        [klass: string]: any;
    } | null | undefined;
    _contentStyleClass: string | undefined;
    _target: any;
    _autoZIndex: boolean | undefined;
    _baseZIndex: number | undefined;
    _showTransitionOptions: string | undefined;
    _hideTransitionOptions: string | undefined;
    _listener: any;
    _responsive: ResponsiveOverlayOptions | undefined;
    _options: OverlayOptions | undefined;
    modalVisible: boolean;
    isOverlayClicked: boolean;
    isOverlayContentClicked: boolean;
    scrollHandler: any;
    documentClickListener: any;
    documentResizeListener: any;
    _componentStyle: OverlayStyle;
    bindDirectiveInstance: Bind;
    private documentKeyboardListener;
    private parentDragSubscription;
    private window;
    protected transformOptions: any;
    get modal(): boolean | undefined;
    get overlayMode(): string;
    get overlayOptions(): OverlayOptions;
    get overlayResponsiveOptions(): ResponsiveOverlayOptions;
    get overlayResponsiveDirection(): "center" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
    get overlayEl(): any;
    get contentEl(): any;
    get targetEl(): any;
    constructor(overlayService: OverlayService, zone: NgZone);
    onAfterContentInit(): void;
    onAfterViewChecked(): void;
    show(overlay?: HTMLElement, isFocus?: boolean): void;
    hide(overlay?: HTMLElement, isFocus?: boolean): void;
    onVisibleChange(visible: boolean): void;
    onOverlayClick(): void;
    onOverlayContentClick(event: MouseEvent): void;
    container: _angular_core.WritableSignal<any>;
    onOverlayBeforeEnter(event: MotionEvent): void;
    onOverlayEnter(event: MotionEvent): void;
    onOverlayAfterEnter(event: MotionEvent): void;
    onOverlayBeforeLeave(event: MotionEvent): void;
    onOverlayLeave(event: MotionEvent): void;
    onOverlayAfterLeave(event: MotionEvent): void;
    handleEvents(name: string, params: any): void;
    setZIndex(): void;
    appendOverlay(): void;
    alignOverlay(): void;
    bindListeners(): void;
    unbindListeners(): void;
    bindParentDragListener(): void;
    unbindParentDragListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindDocumentKeyboardListener(): void;
    unbindDocumentKeyboardListener(): void;
    onDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Overlay, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Overlay, "p-overlay", never, { "hostName": { "alias": "hostName"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "contentStyle": { "alias": "contentStyle"; "required": false; }; "contentStyleClass": { "alias": "contentStyleClass"; "required": false; }; "target": { "alias": "target"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "listener": { "alias": "listener"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "options": { "alias": "options"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "inline": { "alias": "inline"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; "hostAttrSelector": { "alias": "hostAttrSelector"; "required": false; "isSignal": true; }; }, { "visibleChange": "visibleChange"; "onBeforeShow": "onBeforeShow"; "onShow": "onShow"; "onBeforeHide": "onBeforeHide"; "onHide": "onHide"; "onAnimationStart": "onAnimationStart"; "onAnimationDone": "onAnimationDone"; "onBeforeEnter": "onBeforeEnter"; "onEnter": "onEnter"; "onAfterEnter": "onAfterEnter"; "onBeforeLeave": "onBeforeLeave"; "onLeave": "onLeave"; "onAfterLeave": "onAfterLeave"; }, ["contentTemplate", "templates"], ["*", "*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class OverlayModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<OverlayModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<OverlayModule, never, [typeof Overlay, typeof i2.SharedModule], [typeof Overlay, typeof i2.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<OverlayModule>;
}

export { Overlay, OverlayModule, OverlayStyle };
