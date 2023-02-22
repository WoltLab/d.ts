/**
 * Handles the JavaScript part of the label form field.
 *
 * @author  Alexander Ebert, Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import { LabelFormFieldOptions } from "../../Data";
declare class Label {
    protected readonly _formFieldContainer: HTMLElement;
    protected readonly _input: HTMLInputElement;
    protected readonly _labelChooser: HTMLElement;
    protected readonly _options: LabelFormFieldOptions;
    constructor(fieldId: string, labelId: string, options: Partial<LabelFormFieldOptions>);
    _blockScroll(element: HTMLElement): void;
    _click(event: Event): void;
    _selectLabel(label: HTMLElement): void;
}
export = Label;
