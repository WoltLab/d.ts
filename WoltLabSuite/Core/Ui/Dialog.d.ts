/**
 * Modal dialog handler.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @deprecated 6.0 Use `dialogFactory()` instead.
 */
import { DialogCallbackObject, DialogData, DialogId, DialogOptions, DialogHtml } from "./Dialog/Data";
import { AjaxCallbackSetup } from "../Ajax/Data";
/**
 * @exports  WoltLabSuite/Core/Ui/Dialog
 * @deprecated 6.0 Use `dialogFactory()` instead.
 */
declare const UiDialog: {
    /**
     * Sets up global container and internal variables.
     */
    setup(): void;
    _initStaticDialogs(): void;
    /**
     * Opens the dialog and implicitly creates it on first usage.
     */
    open(callbackObject: DialogCallbackObject, html?: DialogHtml): DialogData | object;
    /**
     * Opens an dialog, if the dialog is already open the content container
     * will be replaced by the HTML string contained in the parameter html.
     *
     * If id is an existing element id, html will be ignored and the referenced
     * element will be appended to the content element instead.
     */
    openStatic(id: string, html: DialogHtml, options?: DialogOptions): DialogData;
    /**
     * Sets the dialog title.
     */
    setTitle(id: ElementIdOrCallbackObject, title: string): void;
    /**
     * Sets a callback function on runtime.
     */
    setCallback(id: ElementIdOrCallbackObject, key: string, value: (...args: any[]) => void | null): void;
    /**
     * Clears a callback function on runtime.
     */
    removeCallback(id: ElementIdOrCallbackObject, key: string): void;
    /**
     * Creates the DOM for a new dialog and opens it.
     */
    _createDialog(id: string, html: DialogHtml, options: InternalDialogOptions): void;
    /**
     * Updates the dialog's content element.
     */
    _updateDialog(id: ElementId, html: string | null): void;
    /**
     * Rebuilds dialog identified by given id.
     */
    rebuild(elementId: ElementIdOrCallbackObject): void;
    /**
     * Submits the dialog with the given id.
     */
    _submit(id: string): void;
    /**
     * Submits the dialog with the given id.
     */
    submit(id: string): void;
    /**
     * Handles clicks on the close button or the backdrop if enabled.
     */
    _close(): boolean;
    /**
     * Closes the current active dialog by clicks on the backdrop.
     */
    _closeOnBackdrop(event: MouseEvent): void;
    /**
     * Closes a dialog identified by given id.
     */
    close(id: ElementIdOrCallbackObject): void;
    /**
     * Returns the dialog data for given element id.
     */
    getDialog(id: ElementIdOrCallbackObject): DialogData | undefined;
    /**
     * Returns true for open dialogs.
     */
    isOpen(id: ElementIdOrCallbackObject): boolean;
    /**
     * Destroys a dialog instance.
     *
     * @param  {Object}  callbackObject  the same object that was used to invoke `_dialogSetup()` on first call
     */
    destroy(callbackObject: DialogCallbackObject): void;
    /**
     * Returns a dialog's id.
     *
     * @param  {(string|object)}  id  element id or callback object
     * @return      {string}
     * @protected
     */
    _getDialogId(id: ElementIdOrCallbackObject): DialogId;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
};
export = UiDialog;
type ElementId = string;
type ElementIdOrCallbackObject = DialogCallbackObject | ElementId;
interface InternalDialogOptions extends DialogOptions {
    backdropCloseOnClick: boolean;
    closable: boolean;
    closeButtonLabel: string;
    closeConfirmMessage: string;
    disableContentPadding: boolean;
}
