/**
 * Data handler for CKEditor with l10n support.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import ValueI18n from "./ValueI18n";
import { FormBuilderData } from "../Data";
export declare class CkeditorI18n extends ValueI18n {
    protected _getData(): FormBuilderData;
    destroy(): void;
}
export default CkeditorI18n;
