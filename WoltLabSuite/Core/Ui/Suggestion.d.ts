/**
 * Flexible UI element featuring both a list of items and an input field with suggestion support.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionPayload, DatabaseObjectActionResponse } from "../Ajax/Data";
interface ItemData {
    icon?: string;
    label: string;
    objectID: number;
    type?: string;
}
interface AjaxResponse extends DatabaseObjectActionResponse {
    returnValues: ItemData[];
}
declare class UiSuggestion implements AjaxCallbackObject {
    private readonly ajaxPayload;
    private readonly callbackSelect;
    private dropdownMenu;
    private readonly excludedSearchValues;
    private readonly element;
    private readonly threshold;
    private value;
    /**
     * Initializes a new suggestion input.
     */
    constructor(elementId: string, options: SuggestionOptions);
    /**
     * Adds an excluded search value.
     */
    addExcludedValue(value: string): void;
    /**
     * Removes an excluded search value.
     */
    removeExcludedValue(value: string): void;
    /**
     * Returns true if the suggestions are active.
     */
    isActive(): boolean;
    /**
     * Handles the keyboard navigation for interaction with the suggestion list.
     */
    private keyDown;
    /**
     * Selects an item from the list.
     */
    private select;
    /**
     * Performs a search for the input value unless it is below the threshold.
     */
    private keyUp;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    /**
     * Handles successful Ajax requests.
     */
    _ajaxSuccess(data: AjaxResponse): void;
}
export = UiSuggestion;
interface CallbackSelectData {
    objectId: number;
    value: string;
    type: string;
}
type CallbackSelect = (elementId: string, data: CallbackSelectData) => void;
interface SuggestionOptions {
    ajax: DatabaseObjectActionPayload;
    callbackSelect: CallbackSelect;
    excludedSearchValues?: string[];
    threshold?: number;
}
