/**
 * Inline editor for posts.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import UiMessageInlineEditor from "WoltLabSuite/Core/Ui/Message/InlineEditor";
import { AjaxResponseMessage, ElementVisibility, ItemData, MessageInlineEditorOptions } from "WoltLabSuite/Core/Ui/Message/InlineEditor/Data";
import UiPostManager from "./Manager";
interface PostInlineEditorOptions extends MessageInlineEditorOptions {
    disableEdit: boolean;
}
interface PostAjaxResponseMessage extends AjaxResponseMessage {
    returnValues: {
        attachmentList?: string;
        isOfficial?: boolean;
        message: string;
        notes: Record<string, string>;
        poll?: string;
        threadFormOptions?: string;
    };
}
declare class UiPostInlineEditor extends UiMessageInlineEditor {
    private readonly threadId;
    private readonly disableEdit;
    private readonly postManager;
    constructor(threadId: number, postManager: UiPostManager, opts: Partial<PostInlineEditorOptions>);
    protected _showMessage(data: PostAjaxResponseMessage): void;
    /**
     * @see WoltLabSuite/Core/Ui/Message/InlineEditor._dropdownGetItems()
     */
    protected _dropdownGetItems(): ItemData[];
    /**
     * @see WoltLabSuite/Core/Ui/Message/InlineEditor._dropdownOpen()
     */
    protected _dropdownOpen(): ElementVisibility;
    /**
     * @see WoltLabSuite/Core/Ui/Message/InlineEditor._dropdownSelect()
     */
    protected _dropdownSelect(item: string): void;
    /**
     * @see WoltLabSuite/Core/Ui/Message/InlineEditor._getHash()
     */
    protected _getHash(objectId: string): string;
}
export = UiPostInlineEditor;
