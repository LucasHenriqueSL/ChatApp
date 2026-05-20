import { ImagePassThrough, ImagePreviewTemplateContext, ImageImageTemplateContext } from 'primeng/types/image';
export * from 'primeng/types/image';
import * as _angular_core from '@angular/core';
import { EventEmitter, ElementRef, TemplateRef, QueryList } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { MotionOptions, MotionEvent } from '@primeuix/motion';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Nullable } from 'primeng/ts-helpers';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 *
 * [Live Demo](https://www.primeng.org/image/)
 *
 * @module imagestyle
 *
 */
declare enum ImageClasses {
    /**
     * Class name of the root element
     */
    root = "p-image",
    /**
     * Class name of the preview mask element
     */
    previewMask = "p-image-preview-mask",
    /**
     * Class name of the preview icon element
     */
    previewIcon = "p-image-preview-icon",
    /**
     * Class name of the mask element
     */
    mask = "p-image-mask",
    /**
     * Class name of the toolbar element
     */
    toolbar = "p-image-toolbar",
    /**
     * Class name of the rotate right button element
     */
    rotateRightButton = "p-image-rotate-right-button",
    /**
     * Class name of the rotate left button element
     */
    rotateLeftButton = "p-image-rotate-left-button",
    /**
     * Class name of the zoom out button element
     */
    zoomOutButton = "p-image-zoom-out-button",
    /**
     * Class name of the zoom in button element
     */
    zoomInButton = "p-image-zoom-in-button",
    /**
     * Class name of the close button element
     */
    closeButton = "p-image-close-button",
    /**
     * Class name of the original element
     */
    original = "p-image-original"
}
declare class ImageStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-image-preview': any;
        })[];
        previewMask: string;
        previewIcon: string;
        mask: string;
        toolbar: string;
        rotateRightButton: string;
        rotateLeftButton: string;
        zoomOutButton: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-disabled': any;
        })[];
        zoomInButton: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-disabled': any;
        })[];
        closeButton: string;
        original: string;
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ImageStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ImageStyle>;
}
interface ImageStyle extends BaseStyle {
}

/**
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 * @group Components
 */
declare class Image extends BaseComponent<ImagePassThrough> {
    componentName: string;
    $pcImage: Image | undefined;
    bindDirectiveInstance: Bind;
    /**
     * Style class of the image element.
     * @group Props
     */
    imageClass: string | undefined;
    /**
     * Inline style of the image element.
     * @group Props
     */
    imageStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Class of the element.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * The source path for the main image.
     * @group Props
     */
    src: string | SafeUrl | undefined;
    /**
     * The srcset definition for the main image.
     * @group Props
     */
    srcSet: string | SafeUrl | undefined;
    /**
     * The sizes definition for the main image.
     * @group Props
     */
    sizes: string | undefined;
    /**
     * The source path for the preview image.
     * @group Props
     */
    previewImageSrc: string | SafeUrl | undefined;
    /**
     * The srcset definition for the preview image.
     * @group Props
     */
    previewImageSrcSet: string | SafeUrl | undefined;
    /**
     * The sizes definition for the preview image.
     * @group Props
     */
    previewImageSizes: string | undefined;
    /**
     * Attribute of the preview image element.
     * @group Props
     */
    alt: string | undefined;
    /**
     * Attribute of the image element.
     * @group Props
     */
    width: string | undefined;
    /**
     * Attribute of the image element.
     * @group Props
     */
    height: string | undefined;
    /**
     * Attribute of the image element.
     * @group Props
     */
    loading: 'lazy' | 'eager' | undefined;
    /**
     * Controls the preview functionality.
     * @group Props
     */
    preview: boolean;
    /**
     * Transition options of the show animation
     * @group Props
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation
     * @group Props
     * @deprecated since v21.0.0. Use `motionOptions` instead.
     */
    hideTransitionOptions: string;
    /**
     * Enter animation class name of modal.
     * @defaultValue 'p-modal-enter'
     * @group Props
     */
    modalEnterAnimation: _angular_core.InputSignal<string | null | undefined>;
    /**
     * Leave animation class name of modal.
     * @defaultValue 'p-modal-leave'
     * @group Props
     */
    modalLeaveAnimation: _angular_core.InputSignal<string | null | undefined>;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @defaultValue 'self'
     * @group Props
     */
    appendTo: _angular_core.InputSignal<any>;
    /**
     * The motion options for the mask.
     * @group Props
     */
    maskMotionOptions: _angular_core.InputSignal<MotionOptions | undefined>;
    computedMaskMotionOptions: _angular_core.Signal<MotionOptions>;
    /**
     * The motion options.
     * @group Props
     */
    motionOptions: _angular_core.InputSignal<MotionOptions | undefined>;
    computedMotionOptions: _angular_core.Signal<MotionOptions>;
    /**
     * Triggered when the preview overlay is shown.
     * @group Emits
     */
    onShow: EventEmitter<any>;
    /**
     * Triggered when the preview overlay is hidden.
     * @group Emits
     */
    onHide: EventEmitter<any>;
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onImageError: EventEmitter<Event>;
    mask: ElementRef | undefined;
    previewButton: ElementRef | undefined;
    closeButton: ElementRef | undefined;
    /**
     * Custom indicator template.
     * @group Templates
     */
    indicatorTemplate: TemplateRef<void> | undefined;
    /**
     * Custom rotate right icon template.
     * @group Templates
     */
    rotateRightIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom rotate left icon template.
     * @group Templates
     */
    rotateLeftIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom zoom out icon template.
     * @group Templates
     */
    zoomOutIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom zoom in icon template.
     * @group Templates
     */
    zoomInIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom close icon template.
     * @group Templates
     */
    closeIconTemplate: TemplateRef<void> | undefined;
    /**
     * Custom preview template.
     * @group Templates
     */
    previewTemplate: TemplateRef<ImagePreviewTemplateContext> | undefined;
    /**
     * Custom image template.
     * @group Templates
     */
    imageTemplate: TemplateRef<ImageImageTemplateContext> | undefined;
    renderMask: _angular_core.WritableSignal<boolean>;
    renderPreview: _angular_core.WritableSignal<boolean>;
    maskVisible: boolean;
    previewVisible: boolean;
    rotate: number;
    scale: number;
    previewClick: boolean;
    container: Nullable<HTMLElement>;
    wrapper: Nullable<HTMLElement>;
    _componentStyle: ImageStyle;
    $appendTo: _angular_core.Signal<any>;
    get isZoomOutDisabled(): boolean;
    get isZoomInDisabled(): boolean;
    private zoomSettings;
    templates: QueryList<PrimeTemplate> | undefined;
    _indicatorTemplate: TemplateRef<void> | undefined;
    _rotateRightIconTemplate: TemplateRef<void> | undefined;
    _rotateLeftIconTemplate: TemplateRef<void> | undefined;
    _zoomOutIconTemplate: TemplateRef<void> | undefined;
    _zoomInIconTemplate: TemplateRef<void> | undefined;
    _closeIconTemplate: TemplateRef<void> | undefined;
    _imageTemplate: TemplateRef<ImageImageTemplateContext> | undefined;
    _previewTemplate: TemplateRef<ImagePreviewTemplateContext> | undefined;
    onAfterViewChecked(): void;
    onAfterContentInit(): void;
    onImageClick(): void;
    onMaskClick(): void;
    onMaskKeydown(event: KeyboardEvent): void;
    onPreviewImageClick(): void;
    rotateRight(): void;
    rotateLeft(): void;
    zoomIn(): void;
    zoomOut(): void;
    onAnimationStart(event: MotionEvent): void;
    onBeforeLeave(): void;
    onAnimationEnd(): void;
    onMaskAfterLeave(): void;
    moveOnTop(): void;
    appendContainer(): void;
    imagePreviewStyle(): {
        transform: string;
    };
    get zoomImageAriaLabel(): string | undefined;
    handleToolbarClick(event: MouseEvent): void;
    closePreview(): void;
    imageError(event: Event): void;
    rightAriaLabel(): string | undefined;
    leftAriaLabel(): string | undefined;
    zoomInAriaLabel(): string | undefined;
    zoomOutAriaLabel(): string | undefined;
    closeAriaLabel(): string | undefined;
    onKeydownHandler(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Image, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Image, "p-image", never, { "imageClass": { "alias": "imageClass"; "required": false; }; "imageStyle": { "alias": "imageStyle"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "src": { "alias": "src"; "required": false; }; "srcSet": { "alias": "srcSet"; "required": false; }; "sizes": { "alias": "sizes"; "required": false; }; "previewImageSrc": { "alias": "previewImageSrc"; "required": false; }; "previewImageSrcSet": { "alias": "previewImageSrcSet"; "required": false; }; "previewImageSizes": { "alias": "previewImageSizes"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "preview": { "alias": "preview"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "modalEnterAnimation": { "alias": "modalEnterAnimation"; "required": false; "isSignal": true; }; "modalLeaveAnimation": { "alias": "modalLeaveAnimation"; "required": false; "isSignal": true; }; "appendTo": { "alias": "appendTo"; "required": false; "isSignal": true; }; "maskMotionOptions": { "alias": "maskMotionOptions"; "required": false; "isSignal": true; }; "motionOptions": { "alias": "motionOptions"; "required": false; "isSignal": true; }; }, { "onShow": "onShow"; "onHide": "onHide"; "onImageError": "onImageError"; }, ["indicatorTemplate", "rotateRightIconTemplate", "rotateLeftIconTemplate", "zoomOutIconTemplate", "zoomInIconTemplate", "closeIconTemplate", "previewTemplate", "imageTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_preview: unknown;
}
declare class ImageModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ImageModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ImageModule, never, [typeof Image, typeof i2.SharedModule], [typeof Image, typeof i2.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ImageModule>;
}

export { Image, ImageClasses, ImageModule, ImageStyle };
