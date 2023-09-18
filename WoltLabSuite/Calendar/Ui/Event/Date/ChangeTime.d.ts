/**
 * Handles the dialog to change the time of an individual event date.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2020 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.4
 */
import { CallbackSubmit, DialogCallbackObject, DialogCallbackSetup } from "WoltLabSuite/Core/Ui/Dialog/Data";
import { AjaxCallbackObject, AjaxCallbackSetup, CallbackFailure } from "WoltLabSuite/Core/Ajax/Data";
type AjaxFailureData = {
    returnValues?: {
        errorType?: string;
        fieldName?: string;
    };
};
export declare class ChangeTime implements AjaxCallbackObject, DialogCallbackObject {
    protected readonly eventDateId: number;
    protected readonly dialogId: string;
    constructor(eventDateId: number, dialogId: string);
    _ajaxFailure(data: AjaxFailureData): ReturnType<CallbackFailure>;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(): void;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
    _dialogSubmit(): ReturnType<CallbackSubmit>;
    openDialog(): void;
}
export default ChangeTime;
