/**
 * Data handler for a button form builder field in an Ajax form.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.4
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
export declare class Button extends Field {
    protected _getData(): FormBuilderData;
}
export default Button;
