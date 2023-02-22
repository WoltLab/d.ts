/**
 * Object-based user list.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @deprecated 6.0 use `WoltLabSuite/Core/Component/User/List` instead
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../Ajax/Data";
import { DialogCallbackObject, DialogCallbackSetup } from "../Dialog/Data";
/**
 * @constructor
 */
declare class UiUserList implements AjaxCallbackObject, DialogCallbackObject {
    private readonly cache;
    private readonly options;
    private pageCount;
    private pageNo;
    /**
     * Initializes the user list.
     *
     * @param  {object}  options    list of initialization options
     */
    constructor(options: AjaxRequestOptions);
    /**
     * Opens the user list.
     */
    open(): void;
    /**
     * Shows the current or given page.
     */
    private showPage;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = UiUserList;
interface AjaxRequestOptions {
    className: string;
    dialogTitle: string;
    parameters: {
        [key: string]: any;
    };
}
interface AjaxResponse extends DatabaseObjectActionResponse {
    returnValues: {
        pageCount?: number;
        template: string;
    };
}
