/**
 * Handles the user trophy dialog.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../../Ajax/Data";
import { DialogCallbackObject, DialogCallbackSetup } from "../../Dialog/Data";
declare class UiUserTrophyList implements AjaxCallbackObject, DialogCallbackObject {
    private readonly cache;
    private currentPageNo;
    private currentUser;
    private readonly knownElements;
    /**
     * Initializes the user trophy list.
     */
    constructor();
    /**
     * Adds event userTrophyOverlayList elements.
     */
    private rebuild;
    /**
     * Opens the user trophy list for a specific user.
     */
    private open;
    /**
     * Shows the current or given page.
     */
    private showPage;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = UiUserTrophyList;
interface AjaxResponse extends DatabaseObjectActionResponse {
    returnValues: {
        pageCount?: number;
        template: string;
        title?: string;
    };
}
