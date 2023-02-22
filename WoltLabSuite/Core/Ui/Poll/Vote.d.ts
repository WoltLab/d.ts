/**
 * Handles the poll voting.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since   5.5
 */
import { PollViews, Poll } from "./Poll";
export declare class Vote {
    private readonly pollManager;
    private readonly button;
    private inputs;
    constructor(manager: Poll);
    initSelects(): void;
    private checkInputs;
    private getSelectedOptions;
    private submit;
    checkVisibility(view: PollViews): void;
}
export default Vote;
