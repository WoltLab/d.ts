type Callback = () => void;
/**
 * Scrolls to target element, optionally invoking the provided callback once scrolling has ended.
 *
 * @param       {Element}       element         target element
 * @param       {function=}     callback        callback invoked once scrolling has ended
 */
export declare function element(element: HTMLElement, callback?: Callback, behavior?: ScrollBehavior): void;
export {};
