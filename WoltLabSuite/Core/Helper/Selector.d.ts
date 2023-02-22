/**
 * Provides functions to watch for elements being added to the document.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type CallbackMatch = (element: HTMLElement) => void;
/**
 * Invokes a callback whenever a selector matches an element added
 * to the DOM. Elements being removed and then added again will be
 * reported again.
 */
export declare function wheneverSeen(selector: string, callback: CallbackMatch): void;
/**
 * Works identical to `wheneverSeen` wite the difference that all
 * previously matched elements are tracked and will not be reported
 * again. Useful for applying event listeners or transformations
 * that should be applied just once.
 */
export declare function wheneverFirstSeen(selector: string, callback: CallbackMatch): void;
export {};
