/**
 * Abstract implementation for participants views.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since   5.5
 * @deprecated 6.3 Use standalone polls that are embedded through the `[poll]` BBCode instead.
 */
import { Poll } from "../Poll";
export declare class Participants {
    protected readonly pollManager: Poll;
    private button;
    constructor(manager: Poll);
    showButton(): void;
    hideButton(): void;
}
export default Participants;
