import { GalleriaPassThrough, GalleriaResponsiveOptions, GalleriaIndicatorTemplateContext, GalleriaCaptionTemplateContext, GalleriaItemTemplateContext, GalleriaThumbnailTemplateContext } from 'primeng/types/galleria';
export * from 'primeng/types/galleria';
import * as i0 from '@angular/core';
import { ElementRef, EventEmitter, TemplateRef, QueryList, SimpleChanges, KeyValueDiffers } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i3 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { VoidListener } from 'primeng/ts-helpers';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';
import * as i2 from '@angular/common';
import * as i4 from 'primeng/ripple';
import * as i5 from 'primeng/icons';
import * as i6 from 'primeng/focustrap';
import * as i7 from 'primeng/motion';

/**
 *
 * Galleria is an advanced content gallery component.
 *
 * [Live Demo](https://www.primeng.org/galleria/)
 *
 * @module galleriastyle
 *
 */
declare enum GalleriaClasses {
    /**
     * Class name of the mask element
     */
    mask = "p-galleria-mask",
    /**
     * Class name of the root element
     */
    root = "p-galleria",
    /**
     * Class name of the close button element
     */
    closeButton = "p-galleria-close-button",
    /**
     * Class name of the close icon element
     */
    closeIcon = "p-galleria-close-icon",
    /**
     * Class name of the header element
     */
    header = "p-galleria-header",
    /**
     * Class name of the content element
     */
    content = "p-galleria-content",
    /**
     * Class name of the footer element
     */
    footer = "p-galleria-footer",
    /**
     * Class name of the items container element
     */
    itemsContainer = "p-galleria-items-container",
    /**
     * Class name of the items element
     */
    items = "p-galleria-items",
    /**
     * Class name of the previous item button element
     */
    prevButton = "p-galleria-prev-button",
    /**
     * Class name of the previous item icon element
     */
    prevIcon = "p-galleria-prev-icon",
    /**
     * Class name of the item element
     */
    item = "p-galleria-item",
    /**
     * Class name of the next item button element
     */
    nextButton = "p-galleria-next-button",
    /**
     * Class name of the next item icon element
     */
    nextIcon = "p-galleria-next-icon",
    /**
     * Class name of the caption element
     */
    caption = "p-galleria-caption",
    /**
     * Class name of the indicator list element
     */
    indicatorList = "p-galleria-indicator-list",
    /**
     * Class name of the indicator element
     */
    indicator = "p-galleria-indicator",
    /**
     * Class name of the indicator button element
     */
    indicatorButton = "p-galleria-indicator-button",
    /**
     * Class name of the thumbnails element
     */
    thumbnails = "p-galleria-thumbnails",
    /**
     * Class name of the thumbnail content element
     */
    thumbnailContent = "p-galleria-thumbnails-content",
    /**
     * Class name of the previous thumbnail button element
     */
    previousThumbnailButton = "p-galleria-thumbnail-prev-button",
    /**
     * Class name of the previous thumbnail icon element
     */
    previousThumbnailIcon = "p-galleria-thumbnail-prev-icon",
    /**
     * Class name of the thumbnails viewport element
     */
    thumbnailsViewport = "p-galleria-thumbnails-viewport",
    /**
     * Class name of the thumbnail items element
     */
    thumbnailItems = "p-galleria-thumbnail-items",
    /**
     * Class name of the thumbnail item element
     */
    thumbnailItem = "p-galleria-thumbnail-item",
    /**
     * Class name of the thumbnail element
     */
    thumbnail = "p-galleria-thumbnail",
    /**
     * Class name of the next thumbnail button element
     */
    nextThumbnailButton = "p-galleria-thumbnail-next-button",
    /**
     * Class name of the next thumbnail icon element
     */
    nextThumbnailIcon = "p-galleria-thumbnail-next-icon"
}
declare class GalleriaStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        mask: string;
        root: ({ instance }: {
            instance: any;
        }) => any[];
        closeButton: string;
        closeIcon: string;
        header: string;
        content: string;
        footer: string;
        itemsContainer: string;
        items: string;
        prevButton: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-disabled': any;
        })[];
        prevIcon: string;
        item: string;
        nextButton: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-disabled': any;
        })[];
        nextIcon: string;
        caption: string;
        indicatorList: string;
        indicator: ({ instance, index }: {
            instance: any;
            index: any;
        }) => (string | {
            'p-galleria-indicator-active': any;
        })[];
        indicatorButton: string;
        thumbnails: string;
        thumbnailContent: string;
        thumbnailPrevButton: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-disabled': any;
        })[];
        thumbnailPrevIcon: string;
        thumbnailsViewport: string;
        thumbnailItems: string;
        thumbnailItem: ({ instance, index, activeIndex }: {
            instance: any;
            index: any;
            activeIndex: any;
        }) => (string | {
            'p-galleria-thumbnail-item-current': boolean;
            'p-galleria-thumbnail-item-active': any;
            'p-galleria-thumbnail-item-start': boolean;
            'p-galleria-thumbnail-item-end': boolean;
        })[];
        thumbnail: string;
        thumbnailNextButton: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-disabled': any;
        })[];
        thumbnailNextIcon: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleriaStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GalleriaStyle>;
}
interface GalleriaStyle extends BaseStyle {
}

/**
 * Galleria is an advanced content gallery component.
 * @group Components
 */
declare class Galleria extends BaseComponent<GalleriaPassThrough> {
    element: ElementRef;
    componentName: string;
    bindDirectiveInstance: Bind;
    $pcGalleria: Galleria | undefined;
    onAfterViewChecked(): void;
    /**
     * Index of the first item.
     * @group Props
     */
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    /**
     * Whether to display the component on fullscreen.
     * @group Props
     */
    fullScreen: boolean;
    /**
     * Unique identifier of the element.
     * @group Props
     */
    id: string | undefined;
    /**
     * An array of objects to display.
     * @group Props
     */
    value: any[] | undefined;
    /**
     * Number of items per page.
     * @group Props
     */
    numVisible: number;
    /**
     * An array of options for responsive design.
     * @see {GalleriaResponsiveOptions}
     * @group Props
     */
    responsiveOptions: GalleriaResponsiveOptions[] | undefined;
    /**
     * Whether to display navigation buttons in item section.
     * @group Props
     */
    showItemNavigators: boolean;
    /**
     * Whether to display navigation buttons in thumbnail container.
     * @group Props
     */
    showThumbnailNavigators: boolean;
    /**
     * Whether to display navigation buttons on item hover.
     * @group Props
     */
    showItemNavigatorsOnHover: boolean;
    /**
     * When enabled, item is changed on indicator hover.
     * @group Props
     */
    changeItemOnIndicatorHover: boolean;
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    circular: boolean;
    /**
     * Items are displayed with a slideshow in autoPlay mode.
     * @group Props
     */
    autoPlay: boolean;
    /**
     * When enabled, autorun should stop by click.
     * @group Props
     */
    shouldStopAutoplayByClick: boolean;
    /**
     * Time in milliseconds to scroll items.
     * @group Props
     */
    transitionInterval: number;
    /**
     * Whether to display thumbnail container.
     * @group Props
     */
    showThumbnails: boolean;
    /**
     * Position of thumbnails.
     * @group Props
     */
    thumbnailsPosition: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Height of the viewport in vertical thumbnail.
     * @group Props
     */
    verticalThumbnailViewPortHeight: string;
    /**
     * Whether to display indicator container.
     * @group Props
     */
    showIndicators: boolean;
    /**
     * When enabled, indicator container is displayed on item container.
     * @group Props
     */
    showIndicatorsOnItem: boolean;
    /**
     * Position of indicators.
     * @group Props
     */
    indicatorsPosition: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex: number;
    /**
     * Style class of the mask on fullscreen mode.
     * @group Props
     */
    maskClass: string | undefined;
    /**
     * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
     * @group Props
     */
    containerClass: string | undefined;
    /**
     * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
     * @group Props
     */
    containerStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Transition options of the show animation.
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     * @group Props
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation.
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     * @group Props
     */
    hideTransitionOptions: string;
    /**
     * The motion options.
     * @group Props
     */
    motionOptions: i0.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: i0.Signal<MotionOptions>;
    /**
     * The mask motion options.
     * @group Props
     */
    maskMotionOptions: i0.InputSignal<MotionOptions | undefined>;
    computedMaskMotionOptions: i0.Signal<MotionOptions>;
    /**
     * Specifies the visibility of the mask on fullscreen mode.
     * @group Props
     */
    get visible(): boolean;
    set visible(visible: boolean);
    renderMask: i0.WritableSignal<boolean>;
    renderContent: i0.WritableSignal<boolean>;
    /**
     * Callback to invoke on active index change.
     * @param {number} number - Active index.
     * @group Emits
     */
    activeIndexChange: EventEmitter<number>;
    /**
     * Callback to invoke on visiblity change.
     * @param {boolean} boolean - Visible value.
     * @group Emits
     */
    visibleChange: EventEmitter<boolean>;
    container: ElementRef | undefined;
    _visible: boolean;
    _activeIndex: number;
    /**
     * Custom header template.
     * @group Templates
     */
    headerTemplate: TemplateRef<void> | undefined;
    headerFacet: TemplateRef<void> | undefined;
    /**
     * Custom footer template.
     * @group Templates
     */
    footerTemplate: TemplateRef<void> | undefined;
    footerFacet: TemplateRef<void> | undefined;
    /**
     * Custom indicator template.
     * @group Templates
     */
    indicatorTemplate: TemplateRef<GalleriaIndicatorTemplateContext> | undefined;
    indicatorFacet: TemplateRef<GalleriaIndicatorTemplateContext> | undefined;
    /**
     * Custom caption template.
     * @group Templates
     */
    captionTemplate: TemplateRef<GalleriaCaptionTemplateContext> | undefined;
    captionFacet: TemplateRef<GalleriaCaptionTemplateContext> | undefined;
    /**
     * Custom close icon template.
     * @group Templates
     */
    _closeIconTemplate: TemplateRef<void> | undefined;
    closeIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom previous thumbnail icon template.
     * @group Templates
     */
    _previousThumbnailIconTemplate: TemplateRef<void> | undefined;
    previousThumbnailIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom next thumbnail icon template.
     * @group Templates
     */
    _nextThumbnailIconTemplate: TemplateRef<void> | undefined;
    nextThumbnailIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom item previous icon template.
     * @group Templates
     */
    _itemPreviousIconTemplate: TemplateRef<void> | undefined;
    itemPreviousIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom item next icon template.
     * @group Templates
     */
    _itemNextIconTemplate: TemplateRef<void> | undefined;
    itemNextIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom item template.
     * @group Templates
     */
    _itemTemplate: TemplateRef<GalleriaItemTemplateContext> | undefined;
    itemTemplate: TemplateRef<GalleriaItemTemplateContext> | undefined;
    /**
     * Custom thumbnail template.
     * @group Templates
     */
    _thumbnailTemplate: TemplateRef<GalleriaThumbnailTemplateContext> | undefined;
    thumbnailTemplate: TemplateRef<GalleriaThumbnailTemplateContext> | undefined;
    maskVisible: boolean;
    numVisibleLimit: number;
    _componentStyle: GalleriaStyle;
    mask: HTMLElement;
    templates: QueryList<PrimeTemplate> | undefined;
    constructor(element: ElementRef);
    onAfterContentInit(): void;
    onChanges(simpleChanges: SimpleChanges): void;
    onMaskHide(event?: MouseEvent): void;
    onActiveItemChange(index: number): void;
    onBeforeEnter(event: MotionEvent): void;
    onBeforeLeave(): void;
    onAfterLeave(): void;
    onMaskAfterLeave(): void;
    enableModality(): void;
    disableModality(): void;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Galleria, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Galleria, "p-galleria", never, { "activeIndex": { "alias": "activeIndex"; "required": false; }; "fullScreen": { "alias": "fullScreen"; "required": false; }; "id": { "alias": "id"; "required": false; }; "value": { "alias": "value"; "required": false; }; "numVisible": { "alias": "numVisible"; "required": false; }; "responsiveOptions": { "alias": "responsiveOptions"; "required": false; }; "showItemNavigators": { "alias": "showItemNavigators"; "required": false; }; "showThumbnailNavigators": { "alias": "showThumbnailNavigators"; "required": false; }; "showItemNavigatorsOnHover": { "alias": "showItemNavigatorsOnHover"; "required": false; }; "changeItemOnIndicatorHover": { "alias": "changeItemOnIndicatorHover"; "required": false; }; "circular": { "alias": "circular"; "required": false; }; "autoPlay": { "alias": "autoPlay"; "required": false; }; "shouldStopAutoplayByClick": { "alias": "shouldStopAutoplayByClick"; "required": false; }; "transitionInterval": { "alias": "transitionInterval"; "required": false; }; "showThumbnails": { "alias": "showThumbnails"; "required": false; }; "thumbnailsPosition": { "alias": "thumbnailsPosition"; "required": false; }; "verticalThumbnailViewPortHeight": { "alias": "verticalThumbnailViewPortHeight"; "required": false; }; "showIndicators": { "alias": "showIndicators"; "required": false; }; "showIndicatorsOnItem": { "alias": "showIndicatorsOnItem"; "required": false; }; "indicatorsPosition": { "alias": "indicatorsPosition"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "maskClass": { "alias": "maskClass"; "required": false; }; "containerClass": { "alias": "containerClass"; "required": false; }; "containerStyle": { "alias": "containerStyle"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; "maskMotionOptions": { "alias": "maskMotionOptions"; "required": false; "isSignal": true; }; "visible": { "alias": "visible"; "required": false; }; }, { "activeIndexChange": "activeIndexChange"; "visibleChange": "visibleChange"; }, ["headerTemplate", "footerTemplate", "indicatorTemplate", "captionTemplate", "_closeIconTemplate", "_previousThumbnailIconTemplate", "_nextThumbnailIconTemplate", "_itemPreviousIconTemplate", "_itemNextIconTemplate", "_itemTemplate", "_thumbnailTemplate", "templates"], never, false, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_fullScreen: unknown;
    static ngAcceptInputType_numVisible: unknown;
    static ngAcceptInputType_showItemNavigators: unknown;
    static ngAcceptInputType_showThumbnailNavigators: unknown;
    static ngAcceptInputType_showItemNavigatorsOnHover: unknown;
    static ngAcceptInputType_changeItemOnIndicatorHover: unknown;
    static ngAcceptInputType_circular: unknown;
    static ngAcceptInputType_autoPlay: unknown;
    static ngAcceptInputType_shouldStopAutoplayByClick: unknown;
    static ngAcceptInputType_transitionInterval: unknown;
    static ngAcceptInputType_showThumbnails: unknown;
    static ngAcceptInputType_showIndicators: unknown;
    static ngAcceptInputType_showIndicatorsOnItem: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
}
declare class GalleriaContent extends BaseComponent<GalleriaPassThrough> {
    galleria: Galleria;
    private differs;
    hostName: string;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    value: any[];
    numVisible: number | undefined;
    fullScreen: boolean;
    maskHide: EventEmitter<boolean>;
    activeItemChange: EventEmitter<number>;
    closeButton: ElementRef | undefined;
    _componentStyle: GalleriaStyle;
    $pcGalleria: Galleria | undefined;
    id: string;
    _activeIndex: number;
    slideShowActive: boolean;
    interval: any;
    styleClass: string | undefined;
    private differ;
    constructor(galleria: Galleria, differs: KeyValueDiffers);
    handleFullscreenChange(event: Event): void;
    onDoCheck(): void;
    shouldRenderFooter(): true | TemplateRef<void> | undefined;
    startSlideShow(): void;
    stopSlideShow(): void;
    getPositionClass(preClassName: string, position: string): string;
    isVertical(): boolean;
    onActiveIndexChange(index: number): void;
    closeAriaLabel(): string | undefined;
    getPTOptions(key: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleriaContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleriaContent, "div[pGalleriaContent]", never, { "activeIndex": { "alias": "activeIndex"; "required": false; }; "value": { "alias": "value"; "required": false; }; "numVisible": { "alias": "numVisible"; "required": false; }; "fullScreen": { "alias": "fullScreen"; "required": false; }; }, { "maskHide": "maskHide"; "activeItemChange": "activeItemChange"; }, never, never, false, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_numVisible: unknown;
    static ngAcceptInputType_fullScreen: unknown;
}
declare class GalleriaItemSlot extends BaseComponent<GalleriaPassThrough> {
    hostName: string;
    templates: QueryList<PrimeTemplate> | undefined;
    index: number | undefined;
    get item(): any;
    shouldRender(): TemplateRef<any> | undefined;
    galleria: Galleria;
    $pcGalleria: Galleria | undefined;
    set item(item: any);
    getTemplateFromQueryList(type: string): TemplateRef<any> | undefined;
    getContentTemplate(): void;
    type: string | undefined;
    contentTemplate: TemplateRef<any> | undefined;
    context: any;
    _item: any;
    onAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleriaItemSlot, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleriaItemSlot, "div[pGalleriaItemSlot]", never, { "templates": { "alias": "templates"; "required": false; }; "index": { "alias": "index"; "required": false; }; "item": { "alias": "item"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_index: unknown;
}
declare class GalleriaItem extends BaseComponent<GalleriaPassThrough> {
    galleria: Galleria;
    hostName: string;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    id: string | undefined;
    circular: boolean;
    value: any[] | undefined;
    showItemNavigators: boolean;
    showIndicators: boolean;
    slideShowActive: boolean;
    changeItemOnIndicatorHover: boolean;
    autoPlay: boolean;
    templates: QueryList<PrimeTemplate> | undefined;
    indicatorFacet: any;
    captionFacet: any;
    startSlideShow: EventEmitter<Event>;
    stopSlideShow: EventEmitter<Event>;
    onActiveIndexChange: EventEmitter<number>;
    _componentStyle: GalleriaStyle;
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    get activeItem(): any;
    _activeIndex: number;
    leftButtonFocused: boolean;
    rightButtonFocused: boolean;
    constructor(galleria: Galleria);
    getIndicatorPTOptions(index: number): any;
    onChanges({ autoPlay }: SimpleChanges): void;
    next(): void;
    prev(): void;
    onButtonFocus(pos: 'left' | 'right'): void;
    onButtonBlur(pos: 'left' | 'right'): void;
    stopTheSlideShow(): void;
    navForward(e: MouseEvent): void;
    navBackward(e: MouseEvent): void;
    onIndicatorClick(index: number): void;
    onIndicatorMouseEnter(index: number): void;
    onIndicatorKeyDown(event: any, index: number): void;
    isNavForwardDisabled(): boolean;
    isNavBackwardDisabled(): boolean;
    isIndicatorItemActive(index: number): boolean;
    ariaSlideLabel(): string | undefined;
    ariaSlideNumber(value: any): string | undefined;
    ariaPageLabel(value: any): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleriaItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleriaItem, "div[pGalleriaItem]", never, { "id": { "alias": "id"; "required": false; }; "circular": { "alias": "circular"; "required": false; }; "value": { "alias": "value"; "required": false; }; "showItemNavigators": { "alias": "showItemNavigators"; "required": false; }; "showIndicators": { "alias": "showIndicators"; "required": false; }; "slideShowActive": { "alias": "slideShowActive"; "required": false; }; "changeItemOnIndicatorHover": { "alias": "changeItemOnIndicatorHover"; "required": false; }; "autoPlay": { "alias": "autoPlay"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; "indicatorFacet": { "alias": "indicatorFacet"; "required": false; }; "captionFacet": { "alias": "captionFacet"; "required": false; }; "activeIndex": { "alias": "activeIndex"; "required": false; }; }, { "startSlideShow": "startSlideShow"; "stopSlideShow": "stopSlideShow"; "onActiveIndexChange": "onActiveIndexChange"; }, never, never, false, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_circular: unknown;
    static ngAcceptInputType_showItemNavigators: unknown;
    static ngAcceptInputType_showIndicators: unknown;
    static ngAcceptInputType_slideShowActive: unknown;
    static ngAcceptInputType_changeItemOnIndicatorHover: unknown;
    static ngAcceptInputType_autoPlay: unknown;
}
declare class GalleriaThumbnails extends BaseComponent<GalleriaPassThrough> {
    galleria: Galleria;
    hostName: string;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    containerId: string | undefined;
    value: any[] | undefined;
    isVertical: boolean;
    slideShowActive: boolean;
    circular: boolean;
    responsiveOptions: GalleriaResponsiveOptions[] | undefined;
    contentHeight: string;
    showThumbnailNavigators: boolean;
    templates: QueryList<PrimeTemplate> | undefined;
    onActiveIndexChange: EventEmitter<number>;
    stopSlideShow: EventEmitter<Event>;
    itemsContainer: ElementRef | undefined;
    get numVisible(): number;
    set numVisible(numVisible: number);
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    index: number | undefined;
    startPos: {
        x: number;
        y: number;
    } | null;
    thumbnailsStyle: HTMLStyleElement | null;
    sortedResponsiveOptions: GalleriaResponsiveOptions[] | null;
    totalShiftedItems: number;
    page: number;
    documentResizeListener: VoidListener;
    _numVisible: number;
    d_numVisible: number;
    _oldNumVisible: number;
    _activeIndex: number;
    _oldactiveIndex: number;
    _componentStyle: GalleriaStyle;
    constructor(galleria: Galleria);
    onInit(): void;
    onAfterContentChecked(): void;
    onAfterViewInit(): void;
    createStyle(): void;
    calculatePosition(): void;
    getTabIndex(index: number): 0 | null;
    navForward(e: TouchEvent | MouseEvent): void;
    navBackward(e: TouchEvent | MouseEvent): void;
    onItemClick(index: number): void;
    onThumbnailKeydown(event: KeyboardEvent, index: number): void;
    onRightKey(): void;
    onLeftKey(): void;
    onHomeKey(): void;
    onEndKey(): void;
    onTabKey(): void;
    findFocusedIndicatorIndex(): number;
    changedFocusedIndicator(prevInd: number, nextInd: number): void;
    step(dir: number): void;
    stopTheSlideShow(): void;
    changePageOnTouch(e: TouchEvent, diff: number): void;
    getTotalPageNumber(): number;
    getMedianItemIndex(): number;
    onTransitionEnd(): void;
    onTouchEnd(e: TouchEvent): void;
    onTouchMove(e: TouchEvent): void;
    onTouchStart(e: TouchEvent): void;
    isNavBackwardDisabled(): boolean;
    isNavForwardDisabled(): boolean;
    firstItemAciveIndex(): number;
    lastItemActiveIndex(): number;
    isItemActive(index: number): boolean;
    bindDocumentListeners(): void;
    unbindDocumentListeners(): void;
    onDestroy(): void;
    ariaPrevButtonLabel(): string | undefined;
    ariaNextButtonLabel(): string | undefined;
    ariaPageLabel(value: any): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleriaThumbnails, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleriaThumbnails, "div[pGalleriaThumbnails]", never, { "containerId": { "alias": "containerId"; "required": false; }; "value": { "alias": "value"; "required": false; }; "isVertical": { "alias": "isVertical"; "required": false; }; "slideShowActive": { "alias": "slideShowActive"; "required": false; }; "circular": { "alias": "circular"; "required": false; }; "responsiveOptions": { "alias": "responsiveOptions"; "required": false; }; "contentHeight": { "alias": "contentHeight"; "required": false; }; "showThumbnailNavigators": { "alias": "showThumbnailNavigators"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; "numVisible": { "alias": "numVisible"; "required": false; }; "activeIndex": { "alias": "activeIndex"; "required": false; }; }, { "onActiveIndexChange": "onActiveIndexChange"; "stopSlideShow": "stopSlideShow"; }, never, never, false, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_isVertical: unknown;
    static ngAcceptInputType_slideShowActive: unknown;
    static ngAcceptInputType_circular: unknown;
}
declare class GalleriaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleriaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GalleriaModule, [typeof Galleria, typeof GalleriaContent, typeof GalleriaItemSlot, typeof GalleriaItem, typeof GalleriaThumbnails], [typeof i2.CommonModule, typeof i3.SharedModule, typeof i4.Ripple, typeof i5.TimesIcon, typeof i5.ChevronRightIcon, typeof i5.ChevronUpIcon, typeof i5.ChevronDownIcon, typeof i5.ChevronLeftIcon, typeof i6.FocusTrap, typeof i1.BindModule, typeof i7.MotionModule], [typeof i2.CommonModule, typeof Galleria, typeof GalleriaContent, typeof GalleriaItemSlot, typeof GalleriaItem, typeof GalleriaThumbnails, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GalleriaModule>;
}

export { Galleria, GalleriaClasses, GalleriaContent, GalleriaItem, GalleriaItemSlot, GalleriaModule, GalleriaStyle, GalleriaThumbnails };
