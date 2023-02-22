/**
 * Dropdown language chooser.
 *
 * @author  Alexander Ebert, Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type CallbackSelect = (listItem: HTMLElement) => void;
type SelectFieldOrHiddenInput = HTMLInputElement | HTMLSelectElement;
interface LanguageData {
    iconPath: string;
    languageCode?: string;
    languageName: string;
}
interface Languages {
    [key: string]: LanguageData;
}
interface ChooserData {
    callback: CallbackSelect;
    dropdownMenu: HTMLUListElement;
    dropdownToggle: HTMLAnchorElement;
    element: SelectFieldOrHiddenInput;
}
/**
 * Initializes a language chooser.
 */
export declare function init(containerId: string, chooserId: string, languageId: number, languages: Languages, callback: CallbackSelect, allowEmptyValue: boolean): void;
/**
 * Returns the chooser for an input field.
 */
export declare function getChooser(chooserId: string): ChooserData;
/**
 * Returns the selected language for a certain chooser.
 */
export declare function getLanguageId(chooserId: string): number;
/**
 * Removes the chooser with given id.
 */
export declare function removeChooser(chooserId: string): void;
/**
 * Sets the language for a certain chooser.
 */
export declare function setLanguageId(chooserId: string, languageId: number): void;
export {};
