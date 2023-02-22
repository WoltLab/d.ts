/**
 * Implementation for poll vote views.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since   5.5
 */
import { Poll, PollViews } from "../Poll";
export declare class Vote {
    private readonly pollManager;
    private readonly button;
    constructor(manager: Poll);
    private loadView;
    checkVisibility(view: PollViews): void;
}
export default Vote;
