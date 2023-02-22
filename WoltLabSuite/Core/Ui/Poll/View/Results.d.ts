/**
 * Implementation for poll result views.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since   5.5
 */
import { Poll, PollViews } from "../Poll";
export declare class Results {
    private readonly pollManager;
    private readonly button;
    constructor(manager: Poll, button: HTMLButtonElement);
    private loadView;
    checkVisibility(view: PollViews): void;
}
export default Results;
