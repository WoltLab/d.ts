/**
 * Provides API to create a dialog form created by form builder.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import { DialogCallbackObject, DialogCallbackSetup } from "../../Ui/Dialog/Data";
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../Ajax/Data";
import { FormBuilderData, FormBuilderDialogOptions } from "./Data";
interface DialogResponse {
    dialog: string;
    formId: string;
}
interface AjaxResponse extends DatabaseObjectActionResponse {
    returnValues: DialogResponse | DatabaseObjectActionResponse["returnValues"];
}
declare class FormBuilderDialog implements AjaxCallbackObject, DialogCallbackObject {
    protected _actionName: string;
    protected _className: string;
    protected _dialogContent: string;
    protected _dialogId: string;
    protected _formId: string;
    protected _options: FormBuilderDialogOptions;
    protected _additionalSubmitButtons: HTMLButtonElement[];
    constructor(dialogId: string, className: string, actionName: string, options: Partial<FormBuilderDialogOptions>);
    protected init(dialogId: string, className: string, actionName: string, options: Partial<FormBuilderDialogOptions>): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: AjaxResponse): void;
    protected _closeDialog(): void;
    protected _dialogOnClose(): void;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
    _dialogSubmit(): void;
    /**
     * Opens the form dialog with the given form content.
     */
    protected _openDialogContent(formId: string, dialogContent: string): void;
    /**
     * Submits the form with the given form data.
     */
    protected _submitForm(formData: FormBuilderData): void;
    /**
     * Destroys the dialog form.
     */
    destroy(ignoreDialog?: boolean): void;
    /**
     * Returns a promise that provides all of the dialog form's data.
     */
    getData(): Promise<FormBuilderData>;
    /**
     * Opens the dialog form.
     */
    open(): void;
}
export = FormBuilderDialog;
