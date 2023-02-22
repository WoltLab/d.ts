/**
 * Handles the reaction list in the user profile.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.2
 * @woltlabExcludeBundle all
 */
import { AjaxCallbackSetup, ResponseData } from "../../../Ajax/Data";
interface AjaxParameters {
    parameters: {
        [key: string]: number | string;
    };
}
interface AjaxResponse extends ResponseData {
    returnValues: {
        template?: string;
        lastLikeTime: number;
    };
}
declare class UiReactionProfileLoader {
    protected readonly _container: HTMLElement;
    protected readonly _loadButton: HTMLButtonElement;
    protected readonly _noMoreEntries: HTMLElement;
    protected readonly _options: AjaxParameters;
    protected _reactionTypeID: number | null;
    protected _targetType: string;
    protected readonly _userID: number;
    /**
     * Initializes a new ReactionListLoader object.
     */
    constructor(userID: number);
    /**
     * Set up the reaction type buttons.
     */
    protected _setupReactionTypeButtons(): void;
    /**
     * Set up the target type buttons.
     */
    protected _setupTargetTypeButtons(): void;
    /**
     * Changes the reaction target type (given or received) and reload the entire element.
     */
    protected _changeTargetType(targetType: string): void;
    /**
     * Changes the reaction type value and reload the entire element.
     */
    protected _changeReactionTypeValue(reactionTypeID: number): void;
    /**
     * Handles reload.
     */
    protected _reload(): void;
    /**
     * Load a list of reactions.
     */
    protected _loadReactions(): void;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiReactionProfileLoader;
