/**
 * Abstract implementation for participants views.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since   5.5
 */
import { Poll } from "../Poll";
export declare class Participants {
    protected readonly pollManager: Poll;
    private button;
    private userList?;
    constructor(manager: Poll);
    private open;
    showButton(): void;
    hideButton(): void;
}
export default Participants;
