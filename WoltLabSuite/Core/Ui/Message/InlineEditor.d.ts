/**
 * Flexible message inline editor.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackObject, AjaxCallbackSetup, ResponseData } from "../../Ajax/Data";
import { NotificationAction } from "../Dropdown/Data";
import { AjaxResponseEditor, AjaxResponseMessage, ElementVisibility, ItemData, MessageInlineEditorOptions } from "./InlineEditor/Data";
interface ElementData {
    button: HTMLAnchorElement;
    messageBody: HTMLElement;
    messageBodyEditor: HTMLElement | null;
    messageFooter: HTMLElement;
    messageFooterButtons: HTMLUListElement;
    messageHeader: HTMLElement;
    messageText: HTMLElement;
}
declare class UiMessageInlineEditor implements AjaxCallbackObject {
    protected _activeDropdownElement: HTMLElement | null;
    protected _activeElement: HTMLElement | null;
    protected _dropdownMenu: HTMLUListElement | null;
    protected _elements: WeakMap<HTMLElement, ElementData>;
    protected _options: MessageInlineEditorOptions;
    /**
     * Initializes the message inline editor.
     */
    constructor(opts: Partial<MessageInlineEditorOptions>);
    /**
     * Helper initialization method for legacy inheritance support.
     */
    protected init(opts: Partial<MessageInlineEditorOptions>): void;
    /**
     * Initializes each applicable message, should be called whenever new
     * messages are being displayed.
     */
    rebuild(): void;
    /**
     * Handles clicks on the edit button or the edit dropdown item.
     */
    protected _click(element: HTMLElement | null, event: MouseEvent | null): void;
    /**
     * Creates and opens the dropdown on first usage.
     */
    protected _clickDropdown(element: HTMLElement, event: MouseEvent): void;
    /**
     * Creates the dropdown menu on first usage.
     */
    protected _dropdownBuild(items: ItemData[]): void;
    /**
     * Callback for dropdown toggle.
     */
    protected _dropdownToggle(containerId: string, action: NotificationAction): void;
    /**
     * Returns the list of dropdown items for this type.
     */
    protected _dropdownGetItems(): ItemData[];
    /**
     * Invoked once the dropdown for this type is shown, expects a list of type name and a boolean value
     * to represent the visibility of each item. Items that do not appear in this list will be considered
     * visible.
     */
    protected _dropdownOpen(): ElementVisibility;
    /**
     * Invoked whenever the user selects an item from the dropdown menu, the selected item is passed as argument.
     */
    protected _dropdownSelect(_item: string): void;
    /**
     * Handles clicks on a dropdown item.
     */
    protected _clickDropdownItem(event: MouseEvent): void;
    /**
     * Prepares the message for editor display.
     */
    protected _prepare(): void;
    /**
     * Shows the message editor.
     */
    protected _showEditor(data: AjaxResponseEditor): void;
    /**
     * Restores the message view.
     */
    protected _restoreMessage(): void;
    /**
     * Saves the editor message.
     */
    protected _save(): void;
    /**
     * Validates the message and invokes listeners to perform additional validation.
     */
    protected _validate(parameters: ArbitraryObject): Promise<void[]>;
    /**
     * Throws an error by showing an inline error for the target element.
     */
    throwError(element: HTMLElement, message: string): void;
    /**
     * Shows the update message.
     */
    protected _showMessage(data: AjaxResponseMessage): void;
    /**
     * Hides the editor from view.
     */
    protected _hideEditor(): void;
    /**
     * Restores the previously hidden editor.
     */
    protected _restoreEditor(): void;
    /**
     * Destroys the editor instance.
     */
    protected _destroyEditor(): void;
    /**
     * Returns the hash added to the url after successfully editing a message.
     */
    protected _getHash(objectId: string): string;
    /**
     * Updates the history to avoid old content when going back in the browser
     * history.
     */
    protected _updateHistory(hash: string): void;
    /**
     * Returns the unique editor id.
     */
    protected _getEditorId(): string;
    /**
     * Returns the element's `data-object-id` value.
     */
    protected _getObjectId(element: HTMLElement): string;
    _ajaxFailure(data: ResponseData): boolean;
    _ajaxSuccess(data: ResponseData): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    /** @deprecated  3.0 - used only for backward compatibility with `WCF.Message.InlineEditor` */
    legacyEdit(containerId: string): void;
}
export = UiMessageInlineEditor;
