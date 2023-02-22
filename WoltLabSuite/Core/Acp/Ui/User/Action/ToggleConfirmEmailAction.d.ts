/**
 * Handles a toggle confirm email button.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
import AbstractUserAction from "./Abstract";
import { AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../../../Ajax/Data";
export declare class ToggleConfirmEmailAction extends AbstractUserAction {
    constructor(button: HTMLElement, userId: number, userDataElement: HTMLElement);
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: DatabaseObjectActionResponse): void;
}
export default ToggleConfirmEmailAction;
