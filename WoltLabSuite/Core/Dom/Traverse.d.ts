/**
 * Provides helper functions to traverse the DOM.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Examines child elements and returns the first child matching the given selector.
 */
export declare function childBySel(element: Element, selector: string): Element | null;
/**
 * Examines child elements and returns the first child that has the given CSS class set.
 */
export declare function childByClass(element: Element, className: string): Element | null;
/**
 * Examines child elements and returns the first child which equals the given tag.
 */
export declare function childByTag<K extends Uppercase<keyof HTMLElementTagNameMap>>(element: Element, tagName: K): HTMLElementTagNameMap[Lowercase<K>] | null;
export declare function childByTag(element: Element, tagName: string): Element | null;
/**
 * Examines child elements and returns all children matching the given selector.
 */
export declare function childrenBySel(element: Element, selector: string): Element[];
/**
 * Examines child elements and returns all children that have the given CSS class set.
 */
export declare function childrenByClass(element: Element, className: string): Element[];
/**
 * Examines child elements and returns all children which equal the given tag.
 */
export declare function childrenByTag<K extends Uppercase<keyof HTMLElementTagNameMap>>(element: Element, tagName: K): HTMLElementTagNameMap[Lowercase<K>][];
export declare function childrenByTag(element: Element, tagName: string): Element[];
/**
 * Examines parent nodes and returns the first parent that matches the given selector.
 */
export declare function parentBySel(element: Element, selector: string, untilElement?: Element): Element | null;
/**
 * Examines parent nodes and returns the first parent that has the given CSS class set.
 */
export declare function parentByClass(element: Element, className: string, untilElement?: Element): Element | null;
/**
 * Examines parent nodes and returns the first parent which equals the given tag.
 */
export declare function parentByTag(element: Element, tagName: string, untilElement?: Element): Element | null;
/**
 * Returns the next element sibling.
 *
 * @deprecated 5.4 Use `element.nextElementSibling` instead.
 */
export declare function next(element: Element): Element | null;
/**
 * Returns the next element sibling that matches the given selector.
 */
export declare function nextBySel(element: Element, selector: string): Element | null;
/**
 * Returns the next element sibling with given CSS class.
 */
export declare function nextByClass(element: Element, className: string): Element | null;
/**
 * Returns the next element sibling with given CSS class.
 */
export declare function nextByTag(element: Element, tagName: string): Element | null;
/**
 * Returns the previous element sibling.
 *
 * @deprecated 5.4 Use `element.previousElementSibling` instead.
 */
export declare function prev(element: Element): Element | null;
/**
 * Returns the previous element sibling that matches the given selector.
 */
export declare function prevBySel(element: Element, selector: string): Element | null;
/**
 * Returns the previous element sibling with given CSS class.
 */
export declare function prevByClass(element: Element, className: string): Element | null;
/**
 * Returns the previous element sibling with given CSS class.
 */
export declare function prevByTag(element: Element, tagName: string): Element | null;
