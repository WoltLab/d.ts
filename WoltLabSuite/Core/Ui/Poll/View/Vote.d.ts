/**
 * Implementation for poll vote views.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since   5.5
 * @deprecated 6.3 Use standalone polls that are embedded through the `[poll]` BBCode instead.
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
