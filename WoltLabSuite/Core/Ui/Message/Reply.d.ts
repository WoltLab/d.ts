/**
 * Handles user interaction with the quick reply feature.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { AjaxCallbackSetup, ResponseData } from "../../Ajax/Data";
import { CKEditor } from "../../Component/Ckeditor";
interface MessageReplyOptions {
    ajax: {
        className: string;
    };
    quoteManager: any;
    successMessage: string;
}
interface AjaxResponse {
    returnValues: {
        guestDialog?: string;
        guestDialogID?: string;
        lastPostTime: number;
        template?: string;
        url?: string;
    };
}
declare class UiMessageReply {
    protected readonly _container: HTMLElement;
    protected readonly _content: HTMLElement;
    protected _ckeditor?: CKEditor;
    protected _guestDialogId: string;
    protected _loadingOverlay: HTMLElement | null;
    protected readonly _options: MessageReplyOptions;
    protected readonly _textarea: HTMLTextAreaElement;
    /**
     * Initializes a new quick reply field.
     */
    constructor(opts: Partial<MessageReplyOptions>);
    /**
     * Submits the guest dialog.
     */
    protected _submitGuestDialog(event: KeyboardEvent | MouseEvent): void;
    /**
     * Validates the message and submits it to the server.
     */
    protected _submit(event: MouseEvent | undefined, additionalParameters?: ArbitraryObject): void;
    /**
     * Validates the message and invokes listeners to perform additional validation.
     */
    protected _validate(): boolean;
    /**
     * Throws an error by adding an inline error to target element.
     *
     * @param       {Element}       element         erroneous element
     * @param       {string}        message         error message
     */
    throwError(element: HTMLElement, message: string): void;
    /**
     * Displays a loading spinner while the request is processed by the server.
     */
    protected _showLoadingOverlay(): void;
    /**
     * Hides the loading spinner.
     */
    protected _hideLoadingOverlay(): void;
    /**
     * Resets the editor contents and notifies event listeners.
     */
    protected _reset(): void;
    /**
     * Handles errors occurred during server processing.
     */
    protected _handleError(data: ResponseData): void;
    /**
     * Returns the current editor instance.
     */
    protected _getCKEditor(): CKEditor;
    /**
     * Inserts the rendered message into the post list, unless the post is on the next
     * page in which case a redirect will be performed instead.
     */
    protected _insertMessage(data: AjaxResponse): void;
    /**
     * @param {{returnValues:{guestDialog:string,guestDialogID:string}}} data
     * @protected
     */
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxFailure(data: ResponseData): boolean;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiMessageReply;
