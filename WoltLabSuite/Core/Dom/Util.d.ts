/**
 * Provides helper functions to work with DOM nodes.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare const DomUtil: {
    /**
     * Returns a DocumentFragment containing the provided HTML string as DOM nodes.
     */
    createFragmentFromHtml(html: string): DocumentFragment;
    /**
     * Returns a unique element id.
     */
    getUniqueId(): string;
    /**
     * Escapes the input string for use within an attribute selector:
     *
     * documenty.querySelector(`[data-foo="${escapeAttributeSelector(`"quoted"`)}"]`);
     *
     * @since 6.0
     */
    escapeAttributeSelector(selector: string): string;
    /**
     * Returns the element's id. If there is no id set, a unique id will be
     * created and assigned.
     */
    identify(element: Element): string;
    /**
     * Returns the outer height of an element including margins.
     */
    outerHeight(element: HTMLElement, styles?: CSSStyleDeclaration): number;
    /**
     * Returns the outer width of an element including margins.
     */
    outerWidth(element: HTMLElement, styles?: CSSStyleDeclaration): number;
    /**
     * Returns the outer dimensions of an element including margins.
     */
    outerDimensions(element: HTMLElement): Dimensions;
    /**
     * Returns the element's offset relative to the document's top left corner.
     *
     * @param  {Element}  element          element
     * @return  {{left: int, top: int}}         offset relative to top left corner
     */
    offset(element: Element): Offset;
    /**
     * Prepends an element to a parent element.
     *
     * @deprecated 5.3 Use `parent.insertAdjacentElement('afterbegin', element)` instead.
     */
    prepend(element: Element, parent: Element): void;
    /**
     * Inserts an element after an existing element.
     *
     * @deprecated 5.3 Use `element.insertAdjacentElement('afterend', newElement)` instead.
     */
    insertAfter(newElement: Element, element: Element): void;
    /**
     * Applies a list of CSS properties to an element.
     */
    setStyles(element: HTMLElement, styles: CssDeclarations): void;
    /**
     * Returns a style property value as integer.
     *
     * The behavior of this method is undefined for properties that are not considered
     * to have a "numeric" value, e.g. "background-image".
     */
    styleAsInt(styles: CSSStyleDeclaration, propertyName: string): number;
    /**
     * Sets the inner HTML of given element and reinjects <script> elements to be properly executed.
     *
     * @see    http://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0
     * @param  {Element}  element    target element
     * @param  {string}  innerHtml  HTML string
     */
    setInnerHtml(element: Element, innerHtml: string): void;
    /**
     *
     * @param html
     * @param {Element} referenceElement
     * @param insertMethod
     */
    insertHtml(html: string, referenceElement: Element, insertMethod: string): void;
    /**
     * Returns true if `element` contains the `child` element.
     *
     * @deprecated 5.4 Use `element.contains(child)` instead.
     */
    contains(element: Element, child: Element): boolean;
    /**
     * Retrieves all data attributes from target element, optionally allowing for
     * a custom prefix that serves two purposes: First it will restrict the results
     * for items starting with it and second it will remove that prefix.
     *
     * @deprecated 5.4 Use `element.dataset` instead.
     */
    getDataAttributes(element: Element, prefix?: string, camelCaseName?: boolean, idToUpperCase?: boolean): DataAttributes;
    /**
     * Unwraps contained nodes by moving them out of `element` while
     * preserving their previous order. Target element will be removed
     * at the end of the operation.
     */
    unwrapChildNodes(element: Element): void;
    /**
     * Replaces an element by moving all child nodes into the new element
     * while preserving their previous order. The old element will be removed
     * at the end of the operation.
     */
    replaceElement(oldElement: Element, newElement: Element): void;
    /**
     * Returns true if given element is the most left node of the ancestor, that is
     * a node without any content nor elements before it or its parent nodes.
     */
    isAtNodeStart(element: Element, ancestor: Element): boolean;
    /**
     * Returns true if given element is the most right node of the ancestor, that is
     * a node without any content nor elements after it or its parent nodes.
     */
    isAtNodeEnd(element: Element, ancestor: Element): boolean;
    /**
     * Returns the first ancestor element with position fixed or null.
     *
     * @param       {Element}               element         target element
     * @returns     {(Element|null)}        first ancestor with position fixed or null
     */
    getFixedParent(element: HTMLElement): Element | null;
    /**
     * Shorthand function to hide an element by setting its 'display' value to 'none'.
     */
    hide(element: HTMLElement): void;
    /**
     * Shorthand function to show an element previously hidden by using `hide()`.
     */
    show(element: HTMLElement): void;
    /**
     * Shorthand function to check if given element is hidden by setting its 'display'
     * value to 'none'.
     */
    isHidden(element: HTMLElement): boolean;
    /**
     * Shorthand function to toggle the element visibility using either `hide()` or `show()`.
     */
    toggle(element: HTMLElement): void;
    /**
     * Displays or removes an error message below the provided element.
     */
    innerError(element: HTMLElement, errorMessage?: string | false | null, isHtml?: boolean): HTMLElement | null;
    /**
     * Displays or removes an error message below the provided element.
     */
    innerSuccess(element: HTMLElement, message?: string | false | null, isHtml?: boolean): HTMLElement | null;
    /**
     * Finds the closest element that matches the provided selector. This is a helper
     * function because `closest()` does exist on elements only, for example, it is
     * missing on text nodes.
     */
    closest(node: Node, selector: string): HTMLElement | null;
    /**
     * Returns the `node` if it is an element or its parent. This is useful when working
     * with the range of a text selection.
     */
    getClosestElement(node: Node): HTMLElement;
};
interface Dimensions {
    height: number;
    width: number;
}
interface Offset {
    top: number;
    left: number;
}
interface CssDeclarations {
    [key: string]: string;
}
interface DataAttributes {
    [key: string]: string;
}
export = DomUtil;
