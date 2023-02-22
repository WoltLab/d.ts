/**
 * Data handler for a form builder field in an Ajax form that stores its value via a checkbox being
 * checked or not.
 *
 * This differs from `Checked` by not sending any value if the checkbox is not checked.
 *
 * @author  Tim Duesterhus
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.4
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
export declare class CheckedVoid extends Field {
    protected _getData(): FormBuilderData;
}
export default CheckedVoid;
