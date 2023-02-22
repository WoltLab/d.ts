/**
 * Flexible UI element featuring both a list of items and an input field with suggestion support.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import UiSuggestion from "./Suggestion";
/**
 * Initializes an item list.
 *
 * The `values` argument must be empty or contain a list of strings or object, e.g.
 * `['foo', 'bar']` or `[{ objectId: 1337, value: 'baz'}, {...}]`
 */
export declare function init(elementId: string, values: ItemDataOrPlainValue[], opts: Partial<ItemListOptions>): void;
/**
 * Returns the list of current values.
 */
export declare function getValues(elementId: string): ItemData[];
/**
 * Sets the list of current values.
 */
export declare function setValues(elementId: string, values: ItemData[]): void;
type ItemListInputElement = HTMLInputElement | HTMLTextAreaElement;
export interface ItemData {
    objectId: number;
    value: string;
    type?: string;
}
type PlainValue = string;
type ItemDataOrPlainValue = ItemData | PlainValue;
export type CallbackChange = (elementId: string, values: ItemData[]) => void;
export type CallbackSetupValues = () => ItemDataOrPlainValue[];
export type CallbackSubmit = (form: HTMLFormElement, values: ItemData[]) => void;
export type CallbackSyncShadow = (data: ElementData) => ItemData[];
export interface ItemListOptions {
    ajax: {
        actionName?: string;
        className: string;
        parameters?: object;
    };
    excludedSearchValues: string[];
    maxItems: number;
    maxLength: number;
    restricted: boolean;
    isCSV: boolean;
    callbackChange: CallbackChange | null;
    callbackSubmit: CallbackSubmit | null;
    callbackSyncShadow: CallbackSyncShadow | null;
    callbackSetupValues: CallbackSetupValues | null;
    submitFieldName: string;
}
export interface ElementData {
    dropdownMenu: HTMLElement | null;
    element: ItemListInputElement;
    limitReached: HTMLSpanElement;
    list: HTMLElement;
    listItem: HTMLElement;
    options: ItemListOptions;
    shadow: HTMLInputElement | null;
    suggestion: UiSuggestion;
}
export {};
