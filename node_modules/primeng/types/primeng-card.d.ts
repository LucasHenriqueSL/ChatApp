import { CardPassThrough } from 'primeng/types/card';
export * from 'primeng/types/card';
import * as i0 from '@angular/core';
import { TemplateRef, QueryList } from '@angular/core';
import * as i2 from 'primeng/api';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Card is a flexible container component.
 *
 * [Live Demo](https://www.primeng.org/card/)
 *
 * @module cardstyle
 *
 */
declare enum CardClasses {
    /**
     * Class name of the root element
     */
    root = "p-card",
    /**
     * Class name of the header element
     */
    header = "p-card-header",
    /**
     * Class name of the body element
     */
    body = "p-card-body",
    /**
     * Class name of the caption element
     */
    caption = "p-card-caption",
    /**
     * Class name of the title element
     */
    title = "p-card-title",
    /**
     * Class name of the subtitle element
     */
    subtitle = "p-card-subtitle",
    /**
     * Class name of the content element
     */
    content = "p-card-content",
    /**
     * Class name of the footer element
     */
    footer = "p-card-footer"
}
declare class CardStyle extends BaseStyle {
    name: string;
    style: string;
    classes: {
        root: string;
        header: string;
        body: string;
        caption: string;
        title: string;
        subtitle: string;
        content: string;
        footer: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<CardStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CardStyle>;
}
interface CardStyle extends BaseStyle {
}

/**
 * Card is a flexible container component.
 * @group Components
 */
declare class Card extends BaseComponent<CardPassThrough> implements BlockableUI {
    componentName: string;
    $pcCard: Card | undefined;
    bindDirectiveInstance: Bind;
    _componentStyle: CardStyle;
    onAfterViewChecked(): void;
    /**
     * Header of the card.
     * @group Props
     */
    header: string | undefined;
    /**
     * Subheader of the card.
     * @group Props
     */
    subheader: string | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    set style(value: {
        [klass: string]: any;
    } | null | undefined);
    get style(): {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Class of the element.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    headerFacet: TemplateRef<any> | undefined;
    footerFacet: TemplateRef<any> | undefined;
    /**
     * Custom header template.
     * @group Templates
     */
    headerTemplate: TemplateRef<void> | undefined;
    /**
     * Custom title template.
     * @group Templates
     */
    titleTemplate: TemplateRef<void> | undefined;
    /**
     * Custom subtitle template.
     * @group Templates
     */
    subtitleTemplate: TemplateRef<void> | undefined;
    /**
     * Custom content template.
     * @group Templates
     */
    contentTemplate: TemplateRef<void> | undefined;
    /**
     * Custom footer template.
     * @group Templates
     */
    footerTemplate: TemplateRef<void> | undefined;
    _headerTemplate: TemplateRef<void> | undefined;
    _titleTemplate: TemplateRef<void> | undefined;
    _subtitleTemplate: TemplateRef<void> | undefined;
    _contentTemplate: TemplateRef<void> | undefined;
    _footerTemplate: TemplateRef<void> | undefined;
    _style: i0.WritableSignal<{
        [klass: string]: any;
    } | null | undefined>;
    getBlockableElement(): HTMLElement;
    templates: QueryList<PrimeTemplate> | undefined;
    onAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Card, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Card, "p-card", never, { "header": { "alias": "header"; "required": false; }; "subheader": { "alias": "subheader"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, ["headerFacet", "footerFacet", "headerTemplate", "titleTemplate", "subtitleTemplate", "contentTemplate", "footerTemplate", "templates"], ["p-header", "*", "p-footer"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class CardModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CardModule, never, [typeof Card, typeof i2.SharedModule, typeof i1.BindModule], [typeof Card, typeof i2.SharedModule, typeof i1.BindModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CardModule>;
}

export { Card, CardClasses, CardModule, CardStyle };
