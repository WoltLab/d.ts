/**
 * Handles a user disable/enable button.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../../../Ajax/Data";
import AbstractUserAction from "./Abstract";
export declare class DisableAction extends AbstractUserAction implements AjaxCallbackObject {
    constructor(button: HTMLElement, userId: number, userDataElement: HTMLElement);
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: DatabaseObjectActionResponse): void;
}
export default DisableAction;
