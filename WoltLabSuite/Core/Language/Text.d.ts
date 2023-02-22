/**
 * I18n interface for wysiwyg input fields.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { I18nValues, Languages } from "./Input";
/**
 * Initializes an WYSIWYG input field.
 */
export declare function init(elementId: string, values: I18nValues, availableLanguages: Languages, forceSelection: boolean): void;
