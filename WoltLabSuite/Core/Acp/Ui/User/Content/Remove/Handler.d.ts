/**
 * Provides the trophy icon designer.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.2
 */
import { AjaxCallbackSetup } from "../../../../../Ajax/Data";
import { DialogCallbackSetup } from "../../../../../Ui/Dialog/Data";
type CallbackSuccess = (data: AjaxResponseSuccess) => void;
interface AjaxResponseSuccess {
    loopCount: number;
    parameters: ArbitraryObject;
    proceedURL: string;
    progress: number;
    template?: string;
}
interface AjaxResponse {
    returnValues: {
        template: string;
    };
}
declare class AcpUserContentRemoveHandler {
    private readonly dialogId;
    private readonly userId;
    private readonly callbackSuccess?;
    /**
     * Initializes the content remove handler.
     */
    constructor(element: HTMLElement, userId: number, callbackSuccess?: CallbackSuccess);
    /**
     * Click on the remove content button.
     */
    private click;
    /**
     * Executes the remove content worker.
     */
    private executeWorker;
    /**
     * Handles a click on the submit button in the overlay.
     */
    private submit;
    get dialogContent(): HTMLElement;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = AcpUserContentRemoveHandler;
