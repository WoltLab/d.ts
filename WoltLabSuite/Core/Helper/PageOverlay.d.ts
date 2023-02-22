/**
 * Adopts the page overlay container by moving it inside
 * the provided element. Required for dialogs using the
 * native `<dialog>` element to escape the top-level
 * backdrop generated by the browser.
 */
export declare function adoptPageOverlayContainer(element: HTMLElement): void;
/**
 * Releases the page overlay container again, allowing
 * it to return to its previous position. Must be called
 * in reverse order to ensure the correct placement.
 */
export declare function releasePageOverlayContainer(element: HTMLElement): void;
/**
 * Returns the global page overlay container used for
 * elements that should be displayed out of context,
 * such as tooltips or drop-down menus.
 */
export declare function getPageOverlayContainer(): HTMLElement;