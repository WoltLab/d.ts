/**
 * Flexible UI element featuring both a list of items and an input field.
 *
 * @author  Alexander Ebert, Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
export type CallbackChange = (elementId: string, values: ItemData[]) => void;
export type CallbackSubmit = (form: HTMLFormElement, values: ItemData[]) => void;
export interface ItemListStaticOptions {
    maxItems: number;
    maxLength: number;
    isCSV: boolean;
    callbackChange: CallbackChange | null;
    callbackSubmit: CallbackSubmit | null;
    submitFieldName: string;
}
export interface ItemData {
    objectId: number;
    value: string;
    type?: string;
}
type PlainValue = string;
type ItemDataOrPlainValue = ItemData | PlainValue;
/**
 * Initializes an item list.
 *
 * The `values` argument must be empty or contain a list of strings or object, e.g.
 * `['foo', 'bar']` or `[{ objectId: 1337, value: 'baz'}, {...}]`
 */
export declare function init(elementId: string, values: ItemDataOrPlainValue[], opts: Partial<ItemListStaticOptions>): void;
/**
 * Returns the list of current values.
 */
export declare function getValues(elementId: string): ItemData[];
/**
 * Sets the list of current values.
 */
export declare function setValues(elementId: string, values: ItemData[]): void;
export {};
