/**
 * Helper class to provide access to a fragment of the
 * DOM for use with the decorators `@DomElement` and
 * `@DomElementList`.
 *
 * This base class is required to allow the decorators
 * to make assumptions about how to access the DOM,
 * preserving the scope instead of running selectors
 * against the entire document.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
type DataSourceForRoot = HTMLElement | DocumentFragment | string;
export declare abstract class DomView {
    #private;
    constructor(root: DataSourceForRoot);
    get root(): HTMLElement;
}
export default DomView;
