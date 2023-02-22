/**
 * Handles the user content remove clipboard action.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2020 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.4
 */
import { AjaxCallbackSetup } from "../../../../../Ajax/Data";
import { DialogCallbackSetup } from "../../../../../Ui/Dialog/Data";
interface AjaxResponse {
    returnValues: {
        template: string;
    };
}
export declare class AcpUserContentRemoveClipboard {
    userIds: number[];
    private readonly dialogId;
    /**
     * Initializes the content remove handler.
     */
    constructor();
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
export default AcpUserContentRemoveClipboard;
