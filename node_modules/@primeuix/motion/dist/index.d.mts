type MotionType = 'transition' | 'animation';
type MotionPhase = 'enter' | 'leave';
type MotionStage = 'Before' | 'Start' | 'After' | 'Cancelled';
/**
 * Defines the duration of motion effects.
 * It can be a single number representing the duration in milliseconds,
 * or an object specifying different durations for 'enter' and 'leave' phases.
 */
type MotionDuration = number | {
    [P in MotionPhase]?: number;
} | undefined;
/**
 * Options for specifying class names during different phases of motion.
 * These class names are applied at the start, during, and at the end of the motion.
 */
type ClassNameOptions = {
    /**
     * The class name to apply at the start of the motion.
     */
    from?: string | undefined;
    /**
     * The class name to apply while the motion is active.
     */
    active?: string | undefined;
    /**
     * The class name to apply at the end of the motion.
     */
    to?: string | undefined;
};
/**
 * Defines class names for both 'enter' and 'leave' motion phases.
 */
interface MotionClassNames {
    /**
     * Class names for the 'enter' motion phase.
     * @see ClassNameOptions
     */
    enterClass?: ClassNameOptions | undefined;
    /**
     * Class names for the 'leave' motion phase.
     * @see ClassNameOptions
     */
    leaveClass?: ClassNameOptions | undefined;
}
/**
 * Metadata about the motion effect, including its type, timeout, and count.
 */
type MotionMetadata = {
    /**
     * The type of motion effect, either 'transition' or 'animation'.
     * @see MotionType
     */
    type: MotionType | undefined;
    /**
     * The timeout duration for the motion effect in milliseconds.
     */
    timeout: number | 0;
    /**
     * The count of transition or animation properties involved in the motion.
     */
    count: number | 0;
};
/**
 * Event object passed to motion hooks, containing the target element.
 */
interface MotionEvent {
    /**
     * The target element of the motion event.
     */
    element: Element;
}
/**
 * Hooks for various stages of the motion lifecycle.
 */
interface MotionHooks {
    /**
     * Called before the enter motion starts.
     * @param event - The motion event object.
     * @returns
     */
    onBeforeEnter?: (event?: MotionEvent) => void;
    /**
     * Called when the enter motion starts.
     * @param event - The motion event object.
     * @returns
     */
    onEnter?: (event?: MotionEvent) => void;
    /**
     * Called after the enter motion ends.
     * @param event - The motion event object.
     * @returns
     */
    onAfterEnter?: (event?: MotionEvent) => void;
    /**
     * Called if the enter motion is cancelled.
     * @param event - The motion event object.
     * @returns
     */
    onEnterCancelled?: (event?: MotionEvent) => void;
    /**
     * Called before the leave motion starts.
     * @param event - The motion event object.
     * @returns
     */
    onBeforeLeave?: (event?: MotionEvent) => void;
    /**
     * Called when the leave motion starts.
     * @param event - The motion event object.
     * @returns
     */
    onLeave?: (event?: MotionEvent) => void;
    /**
     * Called after the leave motion ends.
     * @param event - The motion event object.
     * @returns
     */
    onAfterLeave?: (event?: MotionEvent) => void;
    /**
     * Called if the leave motion is cancelled.
     * @param event - The motion event object.
     * @returns
     */
    onLeaveCancelled?: (event?: MotionEvent) => void;
}
/**
 * Hooks organized by motion phase and stage.
 */
type MotionHooksWithPhase = {
    [P in MotionPhase]?: {
        [S in MotionStage as `on${S}`]?: (MotionHooks & {
            [key: string]: unknown;
        })[`on${S extends 'Start' | 'Cancelled' ? '' : S}${Capitalize<P>}${S extends 'Cancelled' ? S : ''}`];
    };
};
/**
 * Class names organized by motion phase.
 */
type MotionClassNamesWithPhase = {
    [P in MotionPhase]: Required<ClassNameOptions>;
};
/**
 * Options for configuring motion effects.
 */
interface MotionOptions extends MotionClassNames, MotionHooks {
    /**
     * The base name used for generating default class names.
     */
    name?: string | undefined;
    /**
     * The type of motion effect to use.
     * @see MotionType
     */
    type?: MotionType | undefined;
    /**
     * Indicates whether to respect the user's reduced motion preference.
     */
    safe?: boolean | undefined;
    /**
     * Indicates whether motion effects are disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Indicates whether the motion should run on the initial render (appear phase).
     */
    appear?: boolean | undefined;
    /**
     * Indicates whether to perform enter motions.
     */
    enter?: boolean | undefined;
    /**
     * Indicates whether to perform leave motions.
     */
    leave?: boolean | undefined;
    /**
     * The duration of the motion effect.
     * @see MotionDuration
     */
    duration?: MotionDuration | undefined;
    /**
     * Indicates whether to automatically adjust height during the motion.
     */
    autoHeight?: boolean | undefined;
    /**
     * Indicates whether to automatically adjust width during the motion.
     */
    autoWidth?: boolean | undefined;
}
/**
 * Represents an instance of a motion effect applied to an element.
 */
type MotionInstance = {
    /**
     * Starts the enter motion.
     * @returns - A promise that resolves to a cancellation function or void.
     */
    enter: () => Promise<(() => void) | void>;
    /**
     * Starts the leave motion.
     * @returns - A promise that resolves to a cancellation function or void.
     */
    leave: () => Promise<(() => void) | void>;
    /**
     * Cancels the motion.
     * @returns
     */
    cancel: () => void;
    /**
     * Updates the motion instance with a new element and options.
     * @param element - The target element.
     * @param options - The motion options.
     * @returns
     */
    update: (element: Element, options?: MotionOptions) => void;
};

declare const DEFAULT_MOTION_OPTIONS: MotionOptions;
/**
 * Creates a MotionInstance for the given element with the specified options.
 * @param element - The target element for motion effects.
 * @param options - Configuration options for the motion instance.
 * @returns A MotionInstance that can be used to control the motion.
 */
declare function createMotion(element: Element, options?: MotionOptions): MotionInstance;

declare const ANIMATION = "animation";
declare const TRANSITION = "transition";
/**
 * Determines whether motion effects should be skipped based on the provided options.
 * @param options - The motion options to evaluate.
 * @returns A boolean indicating whether motion should be skipped.
 */
declare function shouldSkipMotion(options: MotionOptions | undefined): boolean;
/**
 * Merges the provided motion options with the default options.
 * @param inOptions - The motion options to merge.
 * @param defaultOptions - The default motion options.
 * @returns The merged motion options.
 */
declare function mergeOptions(inOptions: MotionOptions | undefined, defaultOptions: MotionOptions): MotionOptions;
/**
 * Resolves class names for motion phases based on the provided options.
 * @param options - The motion options containing class names and base name.
 * @returns The resolved class names organized by motion phase.
 */
declare function resolveClassNames(options: MotionOptions | undefined): MotionClassNamesWithPhase;
/**
 * Retrieves the motion hooks organized by phase based on the provided options.
 * @param options - The motion options containing hooks.
 * @returns The motion hooks organized by phase.
 */
declare function getMotionHooks(options: MotionOptions | undefined): MotionHooksWithPhase;
/**
 * Retrieves motion metadata including type, timeout, and count for the given element.
 * @param element - The target element to retrieve motion metadata from.
 * @param expectedType - The expected type of motion ('transition' or 'animation').
 * @returns The motion metadata including type, timeout, and count.
 */
declare function getMotionMetadata(element: Element, expectedType?: MotionMetadata['type']): MotionMetadata;
/**
 * Resolves the duration for a given animation phase.
 * @param duration - The duration can be a number or an object with `enter` and `leave` properties.
 * @param phase - The phase of the transition/animation, either 'enter' or 'leave'.
 * @returns The resolved duration in milliseconds or null if not specified.
 */
declare function resolveDuration(duration: MotionOptions['duration'], phase: MotionPhase): number | null;
/**
 * Sets CSS custom properties for auto height and/or width on the given element.
 * @param element - The target HTML element.
 * @param autoHeight - Whether to set the auto height CSS variable.
 * @param autoWidth - Whether to set the auto width CSS variable.
 * @returns
 */
declare function setAutoDimensionVariables(element: HTMLElement, autoHeight?: boolean, autoWidth?: boolean): void;

export { ANIMATION, type ClassNameOptions, DEFAULT_MOTION_OPTIONS, type MotionClassNames, type MotionClassNamesWithPhase, type MotionDuration, type MotionEvent, type MotionHooks, type MotionHooksWithPhase, type MotionInstance, type MotionMetadata, type MotionOptions, type MotionPhase, type MotionStage, type MotionType, TRANSITION, createMotion, getMotionHooks, getMotionMetadata, mergeOptions, resolveClassNames, resolveDuration, setAutoDimensionVariables, shouldSkipMotion };
