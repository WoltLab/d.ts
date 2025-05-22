/**
 * Handles the user trophy dialog.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../../Ajax/Data";
declare class UiUserTrophyList implements AjaxCallbackObject {
    #private;
    private readonly cache;
    private currentPageNo;
    private currentUser;
    /**
     * Initializes the user trophy list.
     */
    constructor();
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
}
export = UiUserTrophyList;
interface AjaxResponse extends DatabaseObjectActionResponse {
    returnValues: {
        pageCount?: number;
        template: string;
        title?: string;
    };
}
