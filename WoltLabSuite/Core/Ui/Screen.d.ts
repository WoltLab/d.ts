/**
 * Provides consistent support for media queries and body scrolling.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Registers event listeners for media query match/unmatch.
 *
 * The `callbacks` object may contain the following keys:
 *  - `match`, triggered when media query matches
 *  - `unmatch`, triggered when media query no longer matches
 *  - `setup`, invoked when media query first matches
 *
 * Returns a UUID that is used to internal identify the callbacks, can be used
 * to remove binding by calling the `remove` method.
 */
export declare function on(query: string, callbacks: Partial<Callbacks>): string;
/**
 * Removes all listeners identified by their common UUID.
 */
export declare function remove(query: string, uuid: string): void;
/**
 * Returns a boolean value if a media query expression currently matches.
 */
export declare function is(query: string): boolean;
/**
 * Disables scrolling of body element.
 */
export declare function scrollDisable(): void;
/**
 * Re-enables scrolling of body element.
 */
export declare function scrollEnable(): void;
/**
 * Indicates that at least one page overlay is currently open.
 */
export declare function pageOverlayOpen(): void;
/**
 * Marks one page overlay as closed.
 */
export declare function pageOverlayClose(): void;
/**
 * Returns true if at least one page overlay is currently open.
 *
 * @returns {boolean}
 */
export declare function pageOverlayIsActive(): boolean;
/**
 * @deprecated 5.4 - This method is a noop.
 */
export declare function setDialogContainer(_container: Element): void;
type Callback = () => void;
interface Callbacks {
    match: Callback;
    setup: Callback;
    unmatch: Callback;
}
export {};
