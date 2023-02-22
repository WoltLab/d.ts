/**
 * I18n interface for input and textarea fields.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type LanguageId = number;
export interface I18nValues {
    [key: string]: string;
}
export interface Languages {
    [key: string]: string;
}
type Values = Map<LanguageId, string>;
export type InputOrTextarea = HTMLInputElement | HTMLTextAreaElement;
type CallbackEvent = "select" | "submit";
type Callback = (element: InputOrTextarea) => void;
/**
 * Initializes an input field.
 */
export declare function init(elementId: string, values: I18nValues, availableLanguages: Languages, forceSelection: boolean): void;
/**
 * Registers a callback for an element.
 */
export declare function registerCallback(elementId: string, eventName: CallbackEvent, callback: Callback): void;
/**
 * Unregisters the element with the given id.
 *
 * @since  5.2
 */
export declare function unregister(elementId: string): void;
/**
 * Returns the values of an input field.
 */
export declare function getValues(elementId: string): Values;
/**
 * Sets the values of an input field.
 */
export declare function setValues(elementId: string, newValues: Values | I18nValues): void;
/**
 * Disables the i18n interface for an input field.
 */
export declare function disable(elementId: string): void;
/**
 * Enables the i18n interface for an input field.
 */
export declare function enable(elementId: string): void;
/**
 * Returns true if i18n input is enabled for an input field.
 */
export declare function isEnabled(elementId: string): boolean;
/**
 * Returns true if the value of an i18n input field is valid.
 *
 * If the element is disabled, true is returned.
 */
export declare function validate(elementId: string, permitEmptyValue: boolean): boolean;
export {};
