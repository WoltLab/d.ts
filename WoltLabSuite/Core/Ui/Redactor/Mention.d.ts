/**
 * @woltlabExcludeBundle tiny
 */
import { AjaxCallbackSetup, ResponseData } from "../../Ajax/Data";
import { RedactorEditor, WoltLabEventData } from "./Editor";
interface DropDownPosition {
    top: number;
    left: number;
}
interface Mention {
    range: Range;
    selection: Selection;
}
interface MentionItem {
    icon: string;
    label: string;
    objectID: number;
}
interface AjaxResponse extends ResponseData {
    returnValues: MentionItem[];
}
declare class UiRedactorMention {
    protected _active: boolean;
    protected _dropdownActive: boolean;
    protected _dropdownMenu: HTMLOListElement | null;
    protected _itemIndex: number;
    protected _lineHeight: number | null;
    protected _mentionStart: string;
    protected _redactor: RedactorEditor;
    protected _timer: number | null;
    constructor(redactor: RedactorEditor);
    protected _keyDown(data: WoltLabEventData): void;
    protected _keyUp(data: WoltLabEventData): void;
    protected _getTextLineInFrontOfCaret(): string;
    protected _getDropdownMenuPosition(): DropDownPosition | null;
    protected _setUsername(event: MouseEvent | null, item?: HTMLElement): void;
    protected _selectMention(skipCheck?: boolean): Mention | null;
    protected _updateDropdownPosition(): void;
    protected _selectItem(step: number): void;
    protected _hideDropdown(): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: AjaxResponse): void;
}
export = UiRedactorMention;
