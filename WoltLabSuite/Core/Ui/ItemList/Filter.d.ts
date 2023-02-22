/**
 * Provides a filter input for checkbox lists.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
interface ItemMetaData {
    item: HTMLLIElement;
    span: HTMLSpanElement;
    text: string;
}
interface FilterOptions {
    callbackPrepareItem: (listItem: HTMLLIElement) => ItemMetaData;
    enableVisibilityFilter: boolean;
    filterPosition: "bottom" | "top";
}
declare class UiItemListFilter {
    protected readonly _container: HTMLDivElement;
    protected _dropdownId: string;
    protected _dropdown?: HTMLUListElement;
    protected readonly _element: HTMLElement;
    protected _fragment?: DocumentFragment;
    protected readonly _input: HTMLInputElement;
    protected readonly _items: Set<ItemMetaData>;
    protected readonly _options: FilterOptions;
    protected _value: string;
    protected _clearButton: HTMLAnchorElement;
    /**
     * Creates a new filter input.
     *
     * @param       {string}        elementId       list element id
     * @param       {Object=}       options         options
     */
    constructor(elementId: string, options: Partial<FilterOptions>);
    /**
     * Resets the filter.
     */
    reset(): void;
    /**
     * Builds the item list and rebuilds the items' DOM for easier manipulation.
     *
     * @protected
     */
    protected _buildItems(): void;
    /**
     * Processes an item and returns the meta data.
     */
    protected _prepareItem(item: HTMLLIElement): ItemMetaData;
    /**
     * Rebuilds the list on keyup, uses case-insensitive matching.
     */
    protected _keyup(): void;
    /**
     * Toggles the visibility mode for marked items.
     */
    protected _toggleVisibility(event: MouseEvent): void;
    /**
     * Set-ups the visibility filter by assigning an active class to the
     * list items that hold the checkboxes and observing the checkboxes
     * for any changes.
     *
     * This process involves quite a few DOM changes and new event listeners,
     * therefore we'll delay this until the filter has been accessed for
     * the first time, because none of these changes matter before that.
     */
    protected _setupVisibilityFilter(): void;
    /**
     * Sets the visibility of marked items.
     */
    protected _setVisibility(event: MouseEvent): void;
}
export = UiItemListFilter;
