import { AjaxCallbackObject, AjaxCallbackSetup } from "../../../Ajax/Data";
import { AjaxResponse } from "../../../Controller/Clipboard/Data";
import { DialogCallbackSetup } from "../../../Ui/Dialog/Data";
export declare class AcpUiDataImportManager implements AjaxCallbackObject {
    private readonly queue;
    private readonly redirectUrl;
    private currentAction;
    private index;
    constructor(queue: string[], redirectUrl: string);
    private invoke;
    private run;
    private showCompletedDialog;
    private updateProgress;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: AjaxResponse): void;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export default AcpUiDataImportManager;
