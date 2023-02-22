/**
 * Provides suggestions using an input field, designed to work with `wcf\data\ISearchAction`.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackSetup, DatabaseObjectActionPayload, DatabaseObjectActionResponse } from "../../Ajax/Data";
import { SearchInputOptions } from "./Data";
declare class UiSearchInput {
    private activeItem?;
    private readonly ajaxPayload;
    private readonly autoFocus;
    private readonly callbackDropdownInit?;
    private readonly callbackSelect?;
    private readonly delay;
    private dropdownContainerId;
    private readonly element;
    private readonly excludedSearchValues;
    private list?;
    private lastValue;
    private readonly minLength;
    private readonly noResultPlaceholder;
    private readonly preventSubmit;
    private request?;
    private timerDelay?;
    /**
     * Initializes the search input field.
     *
     * @param       {Element}       element         target input[type="text"]
     * @param       {Object}        options         search options and settings
     */
    constructor(element: HTMLInputElement, options: SearchInputOptions);
    /**
     * Adds an excluded search value.
     */
    addExcludedSearchValues(value: string): void;
    /**
     * Removes a value from the excluded search values.
     */
    removeExcludedSearchValues(value: string): void;
    /**
     * Handles the 'keydown' event.
     */
    private keydown;
    /**
     * Handles the 'keyup' event, provides keyboard navigation and executes search queries.
     */
    private keyup;
    /**
     * Queries the server with the provided search string.
     */
    protected search(value: string): void;
    /**
     * Returns additional AJAX parameters.
     */
    protected getParameters(value: string): Partial<DatabaseObjectActionPayload>;
    /**
     * Selects the next dropdown item.
     */
    private keyboardNextItem;
    /**
     * Selects the previous dropdown item.
     */
    private keyboardPreviousItem;
    /**
     * Selects the active item from the dropdown.
     */
    private keyboardSelectItem;
    /**
     * Selects an item from the dropdown by clicking it.
     */
    private clickSelectItem;
    /**
     * Selects an item.
     */
    private selectItem;
    /**
     * Handles successful AJAX requests.
     */
    _ajaxSuccess(data: DatabaseObjectActionResponse): void;
    /**
     * Handles an empty result set, return a boolean false to hide the dropdown.
     */
    private handleEmptyResult;
    /**
     * Creates an list item from response data.
     */
    protected createListItem(item: ListItemData): HTMLLIElement;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiSearchInput;
interface ListItemData {
    label: string;
    objectID: number;
}
