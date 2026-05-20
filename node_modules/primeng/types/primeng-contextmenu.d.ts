import { ContextMenuPassThrough, ContextMenuItemTemplateContext, ContextMenuSubmenuIconTemplateContext } from 'primeng/types/contextmenu';
export * from 'primeng/types/contextmenu';
import * as _angular_core from '@angular/core';
import { EventEmitter, AfterViewChecked, ElementRef, Renderer2, TemplateRef, QueryList } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i1 from 'primeng/api';
import { OverlayService, MenuItem, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { VoidListener } from 'primeng/ts-helpers';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu.
 * Refer to documentation of the individual documentation of the with context menu support.
 *
 * [Live Demo](https://www.primeng.org/contextmenu/)
 *
 * @module contextmenustyle
 *
 */
declare enum ContextMenuClasses {
    /**
     * Class name of the root element
     */
    root = "p-contextmenu",
    /**
     * Class name of the root list element
     */
    rootList = "p-contextmenu-root-list",
    /**
     * Class name of the item element
     */
    item = "p-contextmenu-item",
    /**
     * Class name of the item content element
     */
    itemContent = "p-contextmenu-item-content",
    /**
     * Class name of the item link element
     */
    itemLink = "p-contextmenu-item-link",
    /**
     * Class name of the item icon element
     */
    itemIcon = "p-contextmenu-item-icon",
    /**
     * Class name of the item label element
     */
    itemLabel = "p-contextmenu-item-label",
    /**
     * Class name of the submenu icon element
     */
    submenuIcon = "p-contextmenu-submenu-icon",
    /**
     * Class name of the submenu element
     */
    submenu = "p-contextmenu-submenu",
    /**
     * Class name of the separator element
     */
    separator = "p-contextmenu-separator"
}
declare class ContextMenuStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: () => string[];
        rootList: string;
        item: ({ instance, processedItem }: {
            instance: any;
            processedItem: any;
        }) => (string | {
            'p-contextmenu-item-active': any;
            'p-focus': any;
            'p-disabled': any;
            'p-contextmenu-mobile': any;
        })[];
        itemContent: string;
        itemLink: string;
        itemIcon: string;
        itemLabel: string;
        submenuIcon: string;
        submenu: string;
        separator: string;
    };
    inlineStyles: {
        root: {
            position: string;
        };
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ContextMenuStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ContextMenuStyle>;
}
interface ContextMenuStyle extends BaseStyle {
}

declare class ContextMenuSub extends BaseComponent<ContextMenuPassThrough> implements AfterViewChecked {
    el: ElementRef;
    renderer: Renderer2;
    contextMenu: ContextMenu;
    get visible(): boolean;
    set visible(value: boolean);
    items: any[];
    itemTemplate: TemplateRef<ContextMenuItemTemplateContext> | undefined;
    root: boolean | undefined;
    autoZIndex: boolean;
    baseZIndex: number;
    popup: boolean | undefined;
    menuId: string | undefined;
    ariaLabel: string | undefined;
    ariaLabelledBy: string | undefined;
    level: number;
    focusedItemId: string | undefined;
    activeItemPath: any[];
    motionOptions: MotionOptions[] | undefined;
    tabindex: number;
    itemClick: EventEmitter<any>;
    itemMouseEnter: EventEmitter<any>;
    menuFocus: EventEmitter<any>;
    menuBlur: EventEmitter<any>;
    menuKeydown: EventEmitter<any>;
    sublistViewChild: ElementRef;
    render: _angular_core.WritableSignal<boolean>;
    hostName: string;
    _componentStyle: ContextMenuStyle;
    $pcContextMenu: ContextMenu | undefined;
    $pcContextMenuSub: ContextMenuSub | undefined;
    _visible: boolean;
    constructor(el: ElementRef, renderer: Renderer2, contextMenu: ContextMenu);
    getItemProp(processedItem: any, name: string, params?: any | null): any;
    getItemId(processedItem: any): string;
    getItemKey(processedItem: any): string;
    getItemLabel(processedItem: any): string;
    getAriaSetSize(): number;
    getAriaPosInset(index: number): number;
    isItemVisible(processedItem: any): boolean;
    isItemActive(processedItem: any): boolean | undefined;
    isItemDisabled(processedItem: any): boolean | undefined;
    isItemFocused(processedItem: any): boolean;
    isItemGroup(processedItem: any): boolean;
    onItemMouseEnter(param: any): void;
    onItemClick(event: any, processedItem: any): void;
    onBeforeEnter(event: MotionEvent): void;
    onAfterLeave(): void;
    _ptm(section: string, options?: any): any;
    getPTOptions(processedItem: any, index: number, key: string): any;
    position(sublist: any): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ContextMenuSub, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ContextMenuSub, "p-contextMenuSub, p-contextmenu-sub", never, { "visible": { "alias": "visible"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "root": { "alias": "root"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "menuId": { "alias": "menuId"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "level": { "alias": "level"; "required": false; }; "focusedItemId": { "alias": "focusedItemId"; "required": false; }; "activeItemPath": { "alias": "activeItemPath"; "required": false; }; "motionOptions": { "alias": "motionOptions"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, { "itemClick": "itemClick"; "itemMouseEnter": "itemMouseEnter"; "menuFocus": "menuFocus"; "menuBlur": "menuBlur"; "menuKeydown": "menuKeydown"; }, never, never, true, never>;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_popup: unknown;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
/**
 * ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.
 * @group Components
 */
declare class ContextMenu extends BaseComponent<ContextMenuPassThrough> {
    overlayService: OverlayService;
    componentName: string;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value: MenuItem[] | undefined);
    get model(): MenuItem[] | undefined;
    /**
     * Event for which the menu must be displayed.
     * @group Props
     */
    triggerEvent: string;
    /**
     * Local template variable name of the element to attach the context menu.
     * @group Props
     */
    target: HTMLElement | string | null | undefined;
    /**
     * Attaches the menu to document instead of a particular item.
     * @group Props
     */
    global: boolean;
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
     * Current id state as a string.
     * @group Props
     */
    id: string | undefined;
    /**
     * The breakpoint to define the maximum width boundary.
     * @group Props
     */
    breakpoint: string;
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
     * Press delay in touch devices as miliseconds.
     * @group Props
     */
    pressDelay: number | undefined;
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
    onShow: EventEmitter<null>;
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    onHide: EventEmitter<null>;
    rootmenu: ContextMenuSub | undefined;
    container: HTMLElement | null | undefined;
    handleSubmenuAfterLeave: (() => void) | null;
    outsideClickListener: VoidListener;
    resizeListener: VoidListener;
    triggerEventListener: VoidListener;
    documentClickListener: VoidListener;
    documentTriggerListener: VoidListener;
    touchEndListener: VoidListener;
    pageX: number;
    pageY: number;
    visible: _angular_core.WritableSignal<boolean>;
    render: _angular_core.WritableSignal<boolean>;
    focused: boolean;
    activeItemPath: _angular_core.WritableSignal<any>;
    focusedItemInfo: _angular_core.WritableSignal<any>;
    submenuVisible: _angular_core.WritableSignal<boolean>;
    $appendTo: _angular_core.Signal<any>;
    searchValue: string;
    searchTimeout: any;
    _processedItems: any[];
    _model: MenuItem[] | undefined;
    pressTimer: any;
    hideCallback: any;
    private matchMediaListener;
    private query;
    queryMatches: _angular_core.WritableSignal<boolean>;
    _componentStyle: ContextMenuStyle;
    get visibleItems(): any;
    get processedItems(): any[];
    get focusedItemId(): any;
    constructor(overlayService: OverlayService);
    onInit(): void;
    isMobile(): boolean;
    bindTriggerEventListener(): void;
    bindGlobalListeners(): void;
    /**
     * Custom item template.
     * @group Templates
     */
    itemTemplate: TemplateRef<ContextMenuItemTemplateContext> | undefined;
    /**
     * Custom submenu icon template.
     * @group Templates
     */
    submenuIconTemplate: TemplateRef<ContextMenuSubmenuIconTemplateContext> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    _submenuIconTemplate: TemplateRef<ContextMenuSubmenuIconTemplateContext> | undefined;
    _itemTemplate: TemplateRef<ContextMenuItemTemplateContext> | undefined;
    onAfterContentInit(): void;
    getPTOptions(key: string, item: any, index: number, id: string): any;
    isItemFocused(itemInfo: any): boolean;
    createProcessedItems(items: any, level?: number, parent?: any, parentKey?: any): any[];
    bindMatchMediaListener(): void;
    unbindMatchMediaListener(): void;
    getItemProp(item: any, name: string): any;
    getProccessedItemLabel(processedItem: any): any;
    getItemLabel(item: any): any;
    isProcessedItemGroup(processedItem: any): boolean;
    isSelected(processedItem: any): boolean;
    isValidSelectedItem(processedItem: any): boolean;
    isValidItem(processedItem: any): boolean;
    isItemDisabled(item: any): boolean;
    isItemSeparator(item: any): boolean;
    isItemMatched(processedItem: any): boolean;
    isProccessedItemGroup(processedItem: any): boolean;
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
    onBeforeEnter(event: MotionEvent): void;
    onAfterEnter(): void;
    onAfterLeave(): void;
    appendOverlay(): void;
    restoreOverlayAppend(): void;
    moveOnTop(): void;
    onOverlayHide(): void;
    onTouchStart(event: MouseEvent): void;
    onTouchEnd(): void;
    hide(): void;
    toggle(event?: any): void;
    show(event: any): void;
    position(): void;
    searchItems(event: any, char: string): boolean;
    findVisibleItem(index: any): any;
    findLastFocusedItemIndex(): any;
    findLastItemIndex(): number;
    findPrevItemIndex(index: number): number;
    findNextItemIndex(index: number): any;
    findFirstFocusedItemIndex(): any;
    findFirstItemIndex(): any;
    findSelectedItemIndex(): any;
    changeFocusedItemIndex(event: any, index: number): void;
    scrollInView(index?: number): void;
    bindResizeListener(): void;
    isOutsideClicked(event: Event): boolean;
    unbindResizeListener(): void;
    unbindGlobalListeners(): void;
    unbindTriggerEventListener(): void;
    onDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ContextMenu, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ContextMenu, "p-contextMenu, p-contextmenu, p-context-menu", never, { "model": { "alias": "model"; "required": false; }; "triggerEvent": { "alias": "triggerEvent"; "required": false; }; "target": { "alias": "target"; "required": false; }; "global": { "alias": "global"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "id": { "alias": "id"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "pressDelay": { "alias": "pressDelay"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; }, { "onShow": "onShow"; "onHide": "onHide"; }, ["itemTemplate", "submenuIconTemplate", "templates"], never, true, never>;
    static ngAcceptInputType_global: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_pressDelay: unknown;
}
declare class ContextMenuModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ContextMenuModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ContextMenuModule, never, [typeof ContextMenu, typeof i1.SharedModule], [typeof ContextMenu, typeof i1.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ContextMenuModule>;
}

export { ContextMenu, ContextMenuClasses, ContextMenuModule, ContextMenuStyle, ContextMenuSub };
