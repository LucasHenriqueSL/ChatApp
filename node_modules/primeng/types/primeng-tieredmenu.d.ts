import { TieredMenuPassThrough, TieredMenuItemTemplateContext } from 'primeng/types/tieredmenu';
export * from 'primeng/types/tieredmenu';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';
import * as _angular_core from '@angular/core';
import { EventEmitter, ElementRef, Renderer2, TemplateRef, QueryList } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { OverlayService, MenuItem, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { VoidListener, Nullable } from 'primeng/ts-helpers';

/**
 *
 * TieredMenu displays submenus in nested overlays.
 *
 * [Live Demo](https://www.primeng.org/menu/)
 *
 * @module tieredmenustyle
 *
 */
declare enum TieredMenuClasses {
    /**
     * Class name of the root element
     */
    root = "p-tieredmenu",
    /**
     * Class name of the start element
     */
    start = "p-tieredmenu-start",
    /**
     * Class name of the root list element
     */
    rootList = "p-tieredmenu-root-list",
    /**
     * Class name of the item element
     */
    item = "p-tieredmenu-item",
    /**
     * Class name of the item content element
     */
    itemContent = "p-tieredmenu-item-content",
    /**
     * Class name of the item link element
     */
    itemLink = "p-tieredmenu-item-link",
    /**
     * Class name of the item icon element
     */
    itemIcon = "p-tieredmenu-item-icon",
    /**
     * Class name of the item label element
     */
    itemLabel = "p-tieredmenu-item-label",
    /**
     * Class name of the submenu icon element
     */
    submenuIcon = "p-tieredmenu-submenu-icon",
    /**
     * Class name of the submenu element
     */
    submenu = "p-tieredmenu-submenu",
    /**
     * Class name of the separator element
     */
    separator = "p-tieredmenu-separator",
    /**
     * Class name of the end element
     */
    end = "p-tieredmenu-end"
}
declare class TieredMenuStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-tieredmenu-overlay': any;
            'p-tieredmenu-mobile': any;
        })[];
        start: string;
        rootList: string;
        item: ({ instance, processedItem }: {
            instance: any;
            processedItem: any;
        }) => (string | {
            'p-tieredmenu-item-active': any;
            'p-focus': any;
            'p-disabled': any;
        })[];
        itemContent: string;
        itemLink: string;
        itemIcon: string;
        itemLabel: string;
        itemBadge: string;
        submenuIcon: string;
        submenu: string;
        separator: string;
        end: string;
    };
    inlineStyles: {
        submenu: ({ instance, processedItem }: {
            instance: any;
            processedItem: any;
        }) => {
            display: string;
        };
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TieredMenuStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<TieredMenuStyle>;
}
interface TieredMenuStyle extends BaseStyle {
}

declare class TieredMenuSub extends BaseComponent<TieredMenuPassThrough> {
    el: ElementRef;
    renderer: Renderer2;
    tieredMenu: TieredMenu;
    get visible(): boolean;
    set visible(value: boolean);
    items: any[];
    itemTemplate: TemplateRef<TieredMenuItemTemplateContext> | undefined;
    root: boolean | undefined;
    autoDisplay: boolean | undefined;
    autoZIndex: boolean;
    baseZIndex: number;
    popup: boolean | undefined;
    menuId: string | undefined;
    ariaLabel: string | undefined;
    ariaLabelledBy: string | undefined;
    level: number;
    focusedItemId: string | undefined;
    activeItemPath: _angular_core.InputSignal<any[]>;
    motionOptions: MotionOptions[] | undefined;
    tabindex: number;
    inlineStyles: {
        [klass: string]: any;
    } | null | undefined;
    itemClick: EventEmitter<any>;
    itemMouseEnter: EventEmitter<any>;
    menuFocus: EventEmitter<any>;
    menuBlur: EventEmitter<any>;
    menuKeydown: EventEmitter<any>;
    sublistViewChild: ElementRef;
    render: _angular_core.WritableSignal<boolean>;
    _componentStyle: TieredMenuStyle;
    bindDirectiveInstance: Bind;
    $pcTieredMenu: TieredMenu | undefined;
    $pcTieredMenuSub: TieredMenuSub | undefined;
    _visible: boolean;
    onAfterViewChecked(): void;
    constructor(el: ElementRef, renderer: Renderer2, tieredMenu: TieredMenu);
    positionSubmenu(sublist: any): void;
    getItemProp(processedItem: any, name: string, params?: any | null): any;
    getItemId(processedItem: any): string;
    getItemKey(processedItem: any): string;
    getItemLabel(processedItem: any): string;
    getAriaSetSize(): number;
    getAriaPosInset(index: number): number;
    isItemVisible(processedItem: any): boolean;
    isItemActive(processedItem: any): boolean;
    isItemDisabled(processedItem: any): boolean;
    isItemFocused(processedItem: any): boolean;
    isItemGroup(processedItem: any): boolean;
    _ptm(section: string, options?: any): any;
    getPTOptions(processedItem: any, index: number, key: string): any;
    onItemMouseEnter(param: any): void;
    onItemClick(event: any, processedItem: any): void;
    onBeforeEnter(event: MotionEvent): void;
    onAfterLeave(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TieredMenuSub, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TieredMenuSub, "p-tieredMenuSub, p-tieredmenusub", never, { "visible": { "alias": "visible"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "root": { "alias": "root"; "required": false; }; "autoDisplay": { "alias": "autoDisplay"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "menuId": { "alias": "menuId"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "level": { "alias": "level"; "required": false; }; "focusedItemId": { "alias": "focusedItemId"; "required": false; }; "activeItemPath": { "alias": "activeItemPath"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "inlineStyles": { "alias": "inlineStyles"; "required": false; }; }, { "itemClick": "itemClick"; "itemMouseEnter": "itemMouseEnter"; "menuFocus": "menuFocus"; "menuBlur": "menuBlur"; "menuKeydown": "menuKeydown"; }, never, never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_autoDisplay: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_popup: unknown;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
/**
 * TieredMenu displays submenus in nested overlays.
 * @group Components
 */
declare class TieredMenu extends BaseComponent<TieredMenuPassThrough> {
    overlayService: OverlayService;
    componentName: string;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value: MenuItem[] | undefined);
    get model(): MenuItem[] | undefined;
    /**
     * Defines if menu would displayed as a popup.
     * @group Props
     */
    popup: boolean | undefined;
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
     * The breakpoint to define the maximum width boundary.
     * @group Props
     */
    breakpoint: string;
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
     * Whether to show a root submenu on mouse over.
     * @defaultValue true
     * @group Props
     */
    autoDisplay: boolean | undefined;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated since v21.0.0, use `motionOptions` instead.
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated since v21.0.0, use `motionOptions` instead.
     */
    hideTransitionOptions: string;
    /**
     * Current id state as a string.
     * @group Props
     */
    id: string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled: boolean;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number;
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
     * Callback to invoke when overlay menu is shown.
     * @group Emits
     */
    onShow: EventEmitter<any>;
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    onHide: EventEmitter<any>;
    rootmenu: TieredMenuSub | undefined;
    containerViewChild: ElementRef<any> | undefined;
    /**
     * Custom submenu icon template.
     * @group Templates
     */
    submenuIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom item template.
     * @param {TieredMenuItemTemplateContext} context - item context.
     * @see {@link TieredMenuItemTemplateContext}
     * @group Templates
     */
    itemTemplate: TemplateRef<TieredMenuItemTemplateContext> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    $appendTo: _angular_core.Signal<any>;
    render: _angular_core.WritableSignal<boolean>;
    container: HTMLElement | undefined;
    outsideClickListener: VoidListener;
    resizeListener: VoidListener;
    scrollHandler: Nullable<ConnectedOverlayScrollHandler>;
    target: any;
    relatedTarget: any;
    visible: boolean | undefined;
    dirty: boolean;
    focused: boolean;
    activeItemPath: _angular_core.WritableSignal<any>;
    number: _angular_core.WritableSignal<number>;
    focusedItemInfo: _angular_core.WritableSignal<any>;
    searchValue: string;
    searchTimeout: any;
    _processedItems: any[];
    _model: MenuItem[] | undefined;
    _componentStyle: TieredMenuStyle;
    bindDirectiveInstance: Bind;
    private matchMediaListener;
    private query;
    queryMatches: _angular_core.WritableSignal<boolean>;
    _submenuIconTemplate: TemplateRef<void> | undefined;
    _itemTemplate: TemplateRef<TieredMenuItemTemplateContext> | undefined;
    get visibleItems(): any;
    get processedItems(): any[];
    get focusedItemId(): any;
    constructor(overlayService: OverlayService);
    onAfterViewChecked(): void;
    onInit(): void;
    onAfterContentInit(): void;
    bindMatchMediaListener(): void;
    unbindMatchMediaListener(): void;
    createProcessedItems(items: any, level?: number, parent?: any, parentKey?: any): any;
    getItemProp(item: any, name: string): any;
    getProccessedItemLabel(processedItem: any): any;
    getItemLabel(item: any): any;
    isProcessedItemGroup(processedItem: any): boolean;
    isSelected(processedItem: any): boolean;
    isValidSelectedItem(processedItem: any): boolean;
    isValidItem(processedItem: any): boolean;
    isItemDisabled(item: any): boolean;
    isItemVisible(item: any): boolean;
    isItemSeparator(item: any): boolean;
    isItemMatched(processedItem: any): boolean;
    isProccessedItemGroup(processedItem: any): boolean;
    onOverlayClick(event: MouseEvent): void;
    onItemClick(event: any): void;
    onItemMouseEnter(event: any): void;
    onKeyDown(event: KeyboardEvent): void;
    onArrowDownKey(event: KeyboardEvent): void;
    onArrowRightKey(event: KeyboardEvent): void;
    onArrowUpKey(event: KeyboardEvent): void;
    onArrowLeftKey(event: KeyboardEvent): void;
    onHomeKey(event: KeyboardEvent): void;
    onEndKey(event: KeyboardEvent): void;
    onSpaceKey(event: KeyboardEvent): void;
    onEscapeKey(event: KeyboardEvent): void;
    onTabKey(event: KeyboardEvent): void;
    onEnterKey(event: KeyboardEvent): void;
    onItemChange(event: any, type?: string | undefined): void;
    onMenuFocus(event: any): void;
    onMenuBlur(event: any): void;
    onOverlayBeforeEnter(event: MotionEvent): void;
    onOverlayAfterEnter(): void;
    onOverlayAfterLeave(): void;
    relativeAlign: boolean;
    alignOverlay(): void;
    appendOverlay(): void;
    restoreOverlayAppend(): void;
    moveOnTop(): void;
    /**
     * Hides the popup menu.
     * @group Method
     */
    hide(event?: any, isFocus?: boolean): void;
    /**
     * Toggles the visibility of the popup menu.
     * @param {Event} event - Browser event.
     * @group Method
     */
    toggle(event: any): void;
    /**
     * Displays the popup menu.
     * @param {Event} even - Browser event.
     * @group Method
     */
    show(event: any, isFocus?: any): void;
    searchItems(event: any, char: string): boolean;
    findLastFocusedItemIndex(): any;
    findLastItemIndex(): number;
    findPrevItemIndex(index: number): number;
    findNextItemIndex(index: number): any;
    findFirstFocusedItemIndex(): any;
    findFirstItemIndex(): any;
    findSelectedItemIndex(): any;
    changeFocusedItemIndex(event: any, index: number): void;
    scrollInView(index?: number): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    bindResizeListener(): void;
    bindOutsideClickListener(): void;
    unbindOutsideClickListener(): void;
    unbindResizeListener(): void;
    onOverlayHide(): void;
    onDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TieredMenu, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TieredMenu, "p-tieredMenu, p-tieredmenu, p-tiered-menu", never, { "model": { "alias": "model"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "autoDisplay": { "alias": "autoDisplay"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "id": { "alias": "id"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; }, { "onShow": "onShow"; "onHide": "onHide"; }, ["submenuIconTemplate", "itemTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_popup: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_autoDisplay: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
declare class TieredMenuModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TieredMenuModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<TieredMenuModule, never, [typeof TieredMenu, typeof i2.SharedModule], [typeof TieredMenu, typeof i2.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<TieredMenuModule>;
}

export { TieredMenu, TieredMenuClasses, TieredMenuModule, TieredMenuStyle, TieredMenuSub };
