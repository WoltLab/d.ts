/**
 * Data handler for a form builder field in an Ajax form.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import { FormBuilderData } from "../Data";
declare class Field {
    protected _fieldId: string;
    protected _field: HTMLElement | null;
    constructor(fieldId: string);
    /**
     * Initializes the field.
     */
    protected init(fieldId: string): void;
    /**
     * Returns the current data of the field or a promise returning the current data
     * of the field.
     *
     * @return	{Promise|data}
     */
    protected _getData(): FormBuilderData;
    /**
     * Reads the field's HTML element.
     */
    protected _readField(): void;
    /**
     * Destroys the field.
     *
     * This function is useful for remove registered elements from other APIs like dialogs.
     */
    destroy(): void;
    /**
     * Returns a promise providing the current data of the field.
     */
    getData(): Promise<FormBuilderData>;
    /**
     * Returns the id of the field.
     */
    getId(): string;
}
export = Field;
