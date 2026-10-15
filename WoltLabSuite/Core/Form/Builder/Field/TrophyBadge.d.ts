/**
 * Data handler for a trophy badge form builder field in an Ajax form.
 *
 * @author    Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.3
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
declare class TrophyBadge extends Field {
    #private;
    protected _getData(): FormBuilderData;
    protected _readField(): void;
}
export = TrophyBadge;
