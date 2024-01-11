/**
 * Data handler for a form builder field in an Ajax form represented by checkboxes.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
declare class Checkboxes extends Field {
    protected _getData(): FormBuilderData;
    protected _readField(): void;
    protected get _fields(): HTMLInputElement[];
}
export = Checkboxes;
