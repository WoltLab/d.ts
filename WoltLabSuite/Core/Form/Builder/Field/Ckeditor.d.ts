/**
 * Data handler for CKEditor.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
export declare class Ckeditor extends Field {
    protected _getData(): FormBuilderData;
    destroy(): void;
}
export default Ckeditor;
