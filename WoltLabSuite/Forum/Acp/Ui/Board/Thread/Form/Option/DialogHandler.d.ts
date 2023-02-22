/**
 * Provides the thread form option dialog.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since       5.2
 */
type LanguageId = string;
type I18nValues = Record<LanguageId, string>;
export interface DialogData {
    checkboxValues: {
        isDisabled: number;
        required: number;
    };
    i18nValues: {
        optionTitle: I18nValues;
        optionDescription: I18nValues;
    };
    selectOption: {
        optionType: string;
    };
    simpleValues: {
        defaultValue: string;
        selectOptions: string;
        showOrder: number;
        validationPattern: string;
    };
}
type CallbackDialogSave = (data: DialogData, content: HTMLElement) => void;
/**
 * Sets an internal flag variable whether the installation has multiple languages and therefore the i18n fields need to be loaded or not.
 */
export declare function setI18n(i18n: boolean): void;
/**
 * Returns true, if the form has i18n fields.
 */
export declare function hasI18n(): boolean;
/**
 * Open the edit/add dialog for options.
 */
export declare function loadDialog(saveCallback: CallbackDialogSave, data: DialogData | undefined, title: string): void;
/**
 * Closes the current dialog.
 */
export declare function closeDialog(): void;
export {};
