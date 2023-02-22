/**
 * Handles the deletion of a user session.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2020 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../../Ajax/Data";
export declare class UiUserSessionDelete implements AjaxCallbackObject {
    private readonly knownElements;
    /**
     * Initializes the session delete buttons.
     */
    constructor();
    /**
     * Opens the user trophy list for a specific user.
     */
    private delete;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export default UiUserSessionDelete;
interface AjaxResponse extends DatabaseObjectActionResponse {
    sessionID: string;
}
