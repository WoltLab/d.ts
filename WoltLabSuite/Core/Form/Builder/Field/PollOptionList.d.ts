/**
 * Data handler for the options of a poll.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import Field from "./Field";
import { FormBuilderData } from "../Data";
declare class PollOptionList extends Field {
    protected _getData(): FormBuilderData;
    destroy(): void;
}
export = PollOptionList;
