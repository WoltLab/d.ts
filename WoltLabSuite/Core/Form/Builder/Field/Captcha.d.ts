/**
 * Data handler for a captcha form builder field in an Ajax form.
 *
 * @author  Matthias Schmidt
 * @copyright	2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
declare class Captcha extends Field {
    protected _getData(): FormBuilderData;
    protected _readField(): void;
    destroy(): void;
}
export = Captcha;
