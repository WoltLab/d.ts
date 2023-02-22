/**
 * Worker manager with support for custom callbacks and loop counts.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackObject, AjaxCallbackSetup } from "../../Ajax/Data";
import { DialogCallbackObject, DialogCallbackSetup } from "../../Ui/Dialog/Data";
interface AjaxResponse {
    loopCount: number;
    parameters: ArbitraryObject;
    proceedURL: string;
    progress: number;
    template?: string;
}
type CallbackAbort = () => void;
type CallbackSuccess = (data: AjaxResponse) => void;
interface WorkerOptions {
    dialogId: string;
    dialogTitle: string;
    className: string;
    loopCount: number;
    parameters: ArbitraryObject;
    implicitContinue: boolean;
    callbackAbort: CallbackAbort | null;
    callbackSuccess: CallbackSuccess | null;
}
declare class AcpUiWorker implements AjaxCallbackObject, DialogCallbackObject {
    private aborted;
    private readonly options;
    private readonly request;
    /**
     * Creates a new worker instance.
     */
    constructor(options: Partial<WorkerOptions>);
    _ajaxSuccess(data: AjaxResponse): void;
    private finalizeWorker;
    _ajaxFailure(): boolean;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
    private onClose;
}
export = AcpUiWorker;
