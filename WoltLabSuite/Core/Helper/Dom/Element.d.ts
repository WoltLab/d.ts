/**
 * Decorators to allow runtime access to DOM elements
 * in a fragment of the DOM without requiring to manually
 * fetch the elements. Depends on `DomView` to access
 * a scoped part of the DOM instead of running selectors
 * against the entire document.
 *
 * The decorators will create new getters on the prototype
 * to access the elements. This collides with the
 * `useDefineForClassFields` setting of TypeScript that
 * will emit properties for class fields.
 *
 * WARNING: You MUST prepend `declare` to your properties
 * that are upgraded with these decorators.
 *
 * Based on the ideas of GitHub’s Catalyst library.
 * https://github.com/github/catalyst
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import "reflect-metadata";
type DomElementOptions = {
    nullable: boolean;
    type: new () => HTMLElement;
};
export declare function DomElement(selector: string, options?: DomElementOptions): PropertyDecorator;
type DomElementListOptions = {
    type: new () => HTMLElement;
};
export declare function DomElementList(selector: string, options: DomElementListOptions): PropertyDecorator;
export {};
