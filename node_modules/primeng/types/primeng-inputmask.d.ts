import { InputMaskPassThrough, Caret } from 'primeng/types/inputmask';
export * from 'primeng/types/inputmask';
import * as _angular_core from '@angular/core';
import { EventEmitter, TemplateRef, QueryList, ElementRef } from '@angular/core';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseInput } from 'primeng/baseinput';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Nullable } from 'primeng/ts-helpers';
import { BaseStyle } from 'primeng/base';

/**
 *
 * InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.
 *
 * [Live Demo](https://www.primeng.org/inputmask/)
 *
 * @module inputmaskstyle
 *
 */
declare enum InputMaskClasses {
    /**
     * Class name of the root element
     */
    root = "p-inputmask",
    /**
     * Class name of the clear icon element
     */
    clearIcon = "p-inputmask-clear-icon"
}
declare class InputMaskStyle extends BaseStyle {
    name: string;
    style: string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-variant-filled': boolean;
        })[];
        clearIcon: string;
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<InputMaskStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<InputMaskStyle>;
}
interface InputMaskStyle extends BaseStyle {
}

/**
 * InputMask directive is applied directly to input elements to enable masked input.
 * @group Components
 */
declare class InputMaskDirective extends BaseComponent<InputMaskPassThrough> {
    $pcInputMaskDirective: InputMaskDirective | undefined;
    _componentStyle: InputMaskStyle;
    /**
     * Used to pass attributes to DOM elements inside the InputMask directive.
     * @defaultValue undefined
     * @group Props
     */
    pInputMaskPT: _angular_core.InputSignal<any>;
    /**
     * Indicates whether the component should be rendered without styles.
     * @defaultValue undefined
     * @group Props
     */
    pInputMaskUnstyled: _angular_core.InputSignal<boolean | undefined>;
    /**
     * Mask pattern.
     * @group Props
     */
    pInputMask: _angular_core.InputSignal<string | undefined>;
    /**
     * Placeholder character in mask, default is underscore.
     * @group Props
     */
    slotChar: _angular_core.InputSignal<string>;
    /**
     * Clears the incomplete value on blur.
     * @group Props
     */
    autoClear: _angular_core.InputSignalWithTransform<boolean, boolean>;
    /**
     * Regex pattern for alpha characters.
     * @group Props
     */
    characterPattern: _angular_core.InputSignal<string>;
    /**
     * When present, it specifies that whether to clean buffer value from model.
     * @group Props
     */
    keepBuffer: _angular_core.InputSignalWithTransform<boolean, boolean>;
    /**
     * Callback to invoke when the mask is completed.
     * @group Emits
     */
    onCompleteEvent: _angular_core.OutputEmitterRef<void>;
    /**
     * Callback to invoke when value changes, emits unmasked value.
     * @group Emits
     */
    onUnmaskedChange: _angular_core.OutputEmitterRef<string>;
    defs: Nullable<{
        [klass: string]: any;
    }>;
    tests: RegExp[] | any;
    partialPosition: Nullable<number>;
    firstNonMaskPos: Nullable<number>;
    lastRequiredNonMaskPos: Nullable<number>;
    len: Nullable<number>;
    oldVal: Nullable<string>;
    buffer: string[] | any;
    defaultBuffer: Nullable<string>;
    focusText: Nullable<string>;
    caretTimeoutId: any;
    androidChrome: boolean;
    focused: Nullable<boolean>;
    private _inputElement;
    private _listeners;
    private isInputVisible;
    private get inputElement();
    constructor();
    onAfterViewInit(): void;
    onDestroy(): void;
    initMask(): void;
    onInputFocus(event: Event): void;
    onInputBlur(e: Event): void;
    onInputKeydown(e: KeyboardEvent): void;
    onKeyPress(e: KeyboardEvent): void;
    onInputChange(event: Event): void;
    onPaste(event: Event): void;
    caret(first?: number, last?: number): Caret | undefined;
    isCompleted(): boolean;
    getPlaceholder(i: number): string;
    seekNext(pos: number): number;
    seekPrev(pos: number): number;
    shiftL(begin: number, end: number): void;
    shiftR(pos: number): void;
    handleAndroidInput(e: Event): void;
    handleInputChange(event: Event): void;
    clearBuffer(start: number, end: number): void;
    writeBuffer(): void;
    /**
     * Dispatches an input event on the host element.
     * This is needed to notify parent components of value changes
     * since programmatic value changes don't trigger native input events.
     */
    dispatchInputEvent(): void;
    checkVal(allow?: boolean): number;
    getUnmaskedValue(): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<InputMaskDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<InputMaskDirective, "[pInputMask]", never, { "pInputMaskPT": { "alias": "pInputMaskPT"; "required": false; "isSignal": true; }; "pInputMaskUnstyled": { "alias": "pInputMaskUnstyled"; "required": false; "isSignal": true; }; "pInputMask": { "alias": "pInputMask"; "required": false; "isSignal": true; }; "slotChar": { "alias": "slotChar"; "required": false; "isSignal": true; }; "autoClear": { "alias": "autoClear"; "required": false; "isSignal": true; }; "characterPattern": { "alias": "characterPattern"; "required": false; "isSignal": true; }; "keepBuffer": { "alias": "keepBuffer"; "required": false; "isSignal": true; }; }, { "onCompleteEvent": "onComplete"; "onUnmaskedChange": "onUnmaskedChange"; }, never, never, true, never>;
}
declare const INPUTMASK_VALUE_ACCESSOR: any;
/**
 * InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.
 * @group Components
 */
declare class InputMask extends BaseInput<InputMaskPassThrough> {
    componentName: string;
    _componentStyle: InputMaskStyle;
    $pcInputMask: InputMask | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    ptmParams: _angular_core.Signal<{
        context: {
            filled: boolean;
        };
    }>;
    /**
     * HTML5 input type.
     * @group Props
     */
    type: string;
    /**
     * Placeholder character in mask, default is underscore.
     * @group Props
     */
    slotChar: string;
    /**
     * Clears the incomplete value on blur.
     * @group Props
     */
    autoClear: boolean;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear: boolean;
    /**
     * Inline style of the input field.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId: string | undefined;
    /**
     * Style class of the input field.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder: string | undefined;
    /**
     * Specifies tab order of the element.
     * @group Props
     */
    tabindex: string | undefined;
    /**
     * Title text of the input text.
     * @group Props
     */
    title: string | undefined;
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Used to indicate that user input is required on an element before a form can be submitted.
     * @group Props
     */
    ariaRequired: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @group Props
     */
    readonly: boolean | undefined;
    /**
     * Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value.
     * @group Props
     */
    unmask: boolean | undefined;
    /**
     * Regex pattern for alpha characters
     * @group Props
     */
    characterPattern: string;
    /**
     * When present, the input gets a focus automatically on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete: string | undefined;
    /**
     * When present, it specifies that whether to clean buffer value from model.
     * @group Props
     */
    keepBuffer: boolean;
    /**
     * Mask pattern.
     * @group Props
     */
    get mask(): string | undefined | null;
    set mask(val: string | undefined | null);
    /**
     * Callback to invoke when the mask is completed.
     * @group Emits
     */
    onComplete: EventEmitter<any>;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus: EventEmitter<Event>;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur: EventEmitter<Event>;
    /**
     * Callback to invoke on input.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onInput: EventEmitter<Event>;
    /**
     * Callback to invoke on input key press.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onKeydown: EventEmitter<Event>;
    /**
     * Callback to invoke when input field is cleared.
     * @group Emits
     */
    onClear: EventEmitter<any>;
    /**
     * Custom clear icon template.
     * @group Templates
     */
    clearIconTemplate: Nullable<TemplateRef<void>>;
    templates: QueryList<PrimeTemplate>;
    inputViewChild: Nullable<ElementRef>;
    value: Nullable<string>;
    _mask: Nullable<string>;
    input: Nullable<HTMLInputElement>;
    defs: Nullable<{
        [klass: string]: any;
    }>;
    tests: RegExp[] | any;
    partialPosition: Nullable<number>;
    firstNonMaskPos: Nullable<number>;
    lastRequiredNonMaskPos: Nullable<number>;
    len: Nullable<number>;
    oldVal: Nullable<string>;
    buffer: string[] | any;
    defaultBuffer: Nullable<string>;
    focusText: Nullable<string>;
    caretTimeoutId: any;
    androidChrome: boolean;
    focused: Nullable<boolean>;
    onInit(): void;
    _clearIconTemplate: TemplateRef<void> | undefined;
    onAfterContentInit(): void;
    initMask(): void;
    caret(first?: number, last?: number): Caret | undefined;
    isCompleted(): boolean;
    getPlaceholder(i: number): string;
    seekNext(pos: number): number;
    seekPrev(pos: number): number;
    shiftL(begin: number, end: number): void;
    shiftR(pos: number): void;
    handleAndroidInput(e: Event): void;
    onInputBlur(e: Event): void;
    onInputKeydown(e: KeyboardEvent): void;
    onKeyPress(e: KeyboardEvent): void;
    clearBuffer(start: number, end: number): void;
    writeBuffer(): void;
    checkVal(allow?: boolean): number;
    onInputFocus(event: Event): void;
    onInputChange(event: Event): void;
    handleInputChange(event: Event): void;
    getUnmaskedValue(): string;
    updateModel(e: Event): void;
    focus(): void;
    clear(): void;
    /**
     * @override
     *
     * @see {@link BaseEditableHolder.writeControlValue}
     * Writes the value to the control.
     */
    writeControlValue(value: any, setModelValue: (value: any) => void): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<InputMask, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<InputMask, "p-inputmask, p-inputMask, p-input-mask", never, { "type": { "alias": "type"; "required": false; }; "slotChar": { "alias": "slotChar"; "required": false; }; "autoClear": { "alias": "autoClear"; "required": false; }; "showClear": { "alias": "showClear"; "required": false; }; "style": { "alias": "style"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "title": { "alias": "title"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "ariaRequired": { "alias": "ariaRequired"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "unmask": { "alias": "unmask"; "required": false; }; "characterPattern": { "alias": "characterPattern"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "keepBuffer": { "alias": "keepBuffer"; "required": false; }; "mask": { "alias": "mask"; "required": false; }; }, { "onComplete": "onComplete"; "onFocus": "onFocus"; "onBlur": "onBlur"; "onInput": "onInput"; "onKeydown": "onKeydown"; "onClear": "onClear"; }, ["clearIconTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_autoClear: unknown;
    static ngAcceptInputType_showClear: unknown;
    static ngAcceptInputType_ariaRequired: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_unmask: unknown;
    static ngAcceptInputType_autofocus: unknown;
    static ngAcceptInputType_keepBuffer: unknown;
}
declare class InputMaskModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<InputMaskModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<InputMaskModule, never, [typeof InputMask, typeof InputMaskDirective, typeof i2.SharedModule], [typeof InputMask, typeof InputMaskDirective, typeof i2.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<InputMaskModule>;
}

export { INPUTMASK_VALUE_ACCESSOR, InputMask, InputMaskClasses, InputMaskDirective, InputMaskModule, InputMaskStyle };
