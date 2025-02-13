/**
 * Data handler for a numeric range form builder field in an Ajax form.
 *
 * @author    Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.2
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
declare class NumericRange extends Field {
    #private;
    constructor(fieldId: string);
    protected _getData(): FormBuilderData;
    protected _readField(): void;
}
export = NumericRange;
