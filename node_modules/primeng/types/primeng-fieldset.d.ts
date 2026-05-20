import { FieldsetPassThrough, FieldsetBeforeToggleEvent, FieldsetAfterToggleEvent } from 'primeng/types/fieldset';
export * from 'primeng/types/fieldset';
import * as i0 from '@angular/core';
import { EventEmitter, ElementRef, TemplateRef, QueryList } from '@angular/core';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Fieldset is a grouping component with the optional content toggle feature.
 *
 * [Live Demo](https://www.primeng.org/fieldset/)
 *
 * @module fieldsetstyle
 *
 */
declare enum FieldsetClasses {
    /**
     * Class name of the root element
     */
    root = "p-fieldset",
    /**
     * Class name of the legend element
     */
    legend = "p-fieldset-legend",
    /**
     * Class name of the legend label element
     */
    legendLabel = "p-fieldset-legend-label",
    /**
     * Class name of the toggle icon element
     */
    toggleIcon = "p-fieldset-toggle-icon",
    /**
     * Class name of the content container element
     */
    contentContainer = "p-fieldset-content-container",
    /**
     * Class name of the content wrapper element
     */
    contentWrapper = "p-fieldset-content-wrapper",
    /**
     * Class name of the content element
     */
    content = "p-fieldset-content"
}
declare class FieldsetStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-fieldset-toggleable': any;
            'p-fieldset-collapsed': any;
        })[];
        legend: string;
        legendLabel: string;
        toggleButton: string;
        toggleIcon: string;
        contentContainer: string;
        contentWrapper: string;
        content: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldsetStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldsetStyle>;
}
interface FieldsetStyle extends BaseStyle {
}

/**
 * Fieldset is a grouping component with the optional content toggle feature.
 * @group Components
 */
declare class Fieldset extends BaseComponent<FieldsetPassThrough> implements BlockableUI {
    componentName: string;
    $pcFieldset: Fieldset | undefined;
    _componentStyle: FieldsetStyle;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    get dataP(): string | undefined;
    /**
     * Header text of the fieldset.
     * @group Props
     */
    legend: string | undefined;
    /**
     * When specified, content can toggled by clicking the legend.
     * @group Props
     * @defaultValue false
     */
    toggleable: boolean | undefined;
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
     * Transition options of the panel animation.
     * @group Props
     * @deprecated since v21.0.0, use `motionOptions` instead.
     */
    transitionOptions: string;
    /**
     * The motion options.
     * @group Props
     */
    motionOptions: i0.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: i0.Signal<MotionOptions>;
    /**
     * Emits when the collapsed state changes.
     * @param {boolean} value - New value.
     * @group Emits
     */
    collapsedChange: EventEmitter<boolean>;
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom toggle event
     * @group Emits
     */
    onBeforeToggle: EventEmitter<FieldsetBeforeToggleEvent>;
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom toggle event
     * @group Emits
     */
    onAfterToggle: EventEmitter<FieldsetAfterToggleEvent>;
    contentWrapperViewChild: ElementRef;
    private _id;
    get id(): string;
    get buttonAriaLabel(): string | undefined;
    /**
     * Internal collapsed state
     */
    _collapsed: boolean | undefined;
    /**
     * Defines the initial state of content, supports one or two-way binding as well.
     * @group Props
     */
    get collapsed(): boolean | undefined;
    set collapsed(value: boolean | undefined);
    /**
     * Custom header template.
     * @group Templates
     */
    headerTemplate: TemplateRef<void> | undefined;
    /**
     * Custom expand icon template.
     * @group Templates
     */
    expandIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom collapse icon template.
     * @group Templates
     */
    collapseIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom content template.
     * @group Templates
     */
    contentTemplate: TemplateRef<void> | undefined;
    toggle(event: MouseEvent): void;
    onKeyDown(event: any): void;
    expand(): void;
    collapse(): void;
    getBlockableElement(): HTMLElement;
    updateTabIndex(): void;
    onToggleDone(event: MotionEvent): void;
    _headerTemplate: TemplateRef<void> | undefined;
    _expandIconTemplate: TemplateRef<void> | undefined;
    _collapseIconTemplate: TemplateRef<void> | undefined;
    _contentTemplate: TemplateRef<void> | undefined;
    templates: QueryList<PrimeTemplate>;
    onAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Fieldset, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Fieldset, "p-fieldset", never, { "legend": { "alias": "legend"; "required": false; }; "toggleable": { "alias": "toggleable"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; "collapsed": { "alias": "collapsed"; "required": false; }; }, { "collapsedChange": "collapsedChange"; "onBeforeToggle": "onBeforeToggle"; "onAfterToggle": "onAfterToggle"; }, ["headerTemplate", "expandIconTemplate", "collapseIconTemplate", "contentTemplate", "templates"], ["p-header", "*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_toggleable: unknown;
    static ngAcceptInputType_collapsed: unknown;
}
declare class FieldsetModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldsetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FieldsetModule, never, [typeof Fieldset, typeof i2.SharedModule, typeof i1.BindModule], [typeof Fieldset, typeof i2.SharedModule, typeof i1.BindModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FieldsetModule>;
}

export { Fieldset, FieldsetClasses, FieldsetModule, FieldsetStyle };
