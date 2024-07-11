/**
 * Data handler for a file processor form builder field in an Ajax form.
 *
 * @author      Olaf Braun
 * @copyright   2001-2024 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       6.1
 */
import Field from "WoltLabSuite/Core/Form/Builder/Field/Field";
import { FormBuilderData } from "WoltLabSuite/Core/Form/Builder/Data";
export default class FileProcessor extends Field {
    protected _getData(): FormBuilderData;
    protected _readField(): void;
}
