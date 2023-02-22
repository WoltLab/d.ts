/**
 * Simplified and consistent dropdown creation.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Creates a new dropdown menu, optionally pre-populated with the supplied list of
 * dropdown items. The list element will be returned and must be manually injected
 * into the DOM by the callee.
 */
export declare function create(items: DropdownBuilderItemData[], identifier?: string): HTMLUListElement;
/**
 * Creates a new dropdown item that can be inserted into lists using regular DOM operations.
 */
export declare function buildItem(item: DropdownBuilderItemData): HTMLLIElement;
/**
 * Appends a single item to the target list.
 */
export declare function appendItem(list: HTMLUListElement, item: DropdownBuilderItemData): void;
/**
 * Appends a list of items to the target list.
 */
export declare function appendItems(list: HTMLUListElement, items: DropdownBuilderItemData[]): void;
/**
 * Replaces the existing list items with the provided list of new items.
 */
export declare function setItems(list: HTMLUListElement, items: DropdownBuilderItemData[]): void;
/**
 * Attaches the list to a button, visibility is from then on controlled through clicks
 * on the provided button element. Internally calls `Ui/SimpleDropdown.initFragment()`
 * to delegate the DOM management.
 */
export declare function attach(list: HTMLUListElement, button: HTMLElement): void;
/**
 * Helper method that returns the special string `"divider"` that causes a divider to
 * be created.
 */
export declare function divider(): string;
interface BaseItemData {
    attributes?: {
        [key: string]: string;
    };
    callback?: (link: HTMLAnchorElement) => void;
    href?: string;
    icon?: {
        forceSolid?: boolean;
        name: string;
        size?: 16 | 24 | 32 | 48 | 64 | 96 | 144;
    };
    identifier?: string;
    label?: string;
    labelHtml?: string;
}
interface TextItemData extends BaseItemData {
    label: string;
    labelHtml?: never;
}
interface HtmlItemData extends BaseItemData {
    label?: never;
    labelHtml: string;
}
export type DropdownBuilderItemData = "divider" | HtmlItemData | TextItemData;
export {};
