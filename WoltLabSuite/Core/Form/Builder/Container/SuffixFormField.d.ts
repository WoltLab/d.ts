/**
 * Handles the dropdowns of form fields with a suffix.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
type DestroyDropdownData = {
    formId: string;
};
declare class SuffixFormField {
    protected readonly _formId: string;
    protected readonly _suffixField: HTMLInputElement;
    protected readonly _suffixDropdownMenu: HTMLElement;
    protected readonly _suffixDropdownToggle: HTMLElement;
    constructor(formId: string, suffixFieldId: string);
    /**
     * Handles changing the suffix selection.
     */
    protected _changeSuffixSelection(event: MouseEvent): void;
    /**
     * Destroys the suffix dropdown if the parent form is unregistered.
     */
    protected _destroyDropdown(data: DestroyDropdownData): void;
}
export = SuffixFormField;
