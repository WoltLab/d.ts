/**
 * Handles editing media files via dialog.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { Media, MediaEditorCallbackObject } from "./Data";
import { AjaxCallbackObject, AjaxCallbackSetup } from "../Ajax/Data";
import { DialogCallbackObject } from "../Ui/Dialog/Data";
interface InitEditorData {
    returnValues: {
        availableLanguageCount: number;
        categoryIDs: number[];
        mediaData?: Media;
    };
}
declare class MediaEditor implements AjaxCallbackObject {
    protected _availableLanguageCount: number;
    protected _categoryIds: number[];
    protected _dialogs: Map<string, DialogCallbackObject>;
    protected readonly _callbackObject: MediaEditorCallbackObject;
    protected _media: Media | null;
    protected _oldCategoryId: number;
    constructor(callbackObject: MediaEditorCallbackObject);
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(): void;
    /**
     * Is called if an editor is manually closed by the user.
     */
    protected _close(): void;
    /**
     * Initializes the editor dialog.
     *
     * @since 5.3
     */
    protected _initEditor(content: HTMLElement, data: InitEditorData): void;
    /**
     * Handles the `[ENTER]` key to submit the form.
     */
    protected _keyPress(event: KeyboardEvent): void;
    /**
     * Saves the data of the currently edited media.
     */
    protected _saveData(): void;
    private mapToI18nValues;
    /**
     * Updates language-related input fields depending on whether multilingualis is enabled.
     */
    protected _updateLanguageFields(event: Event | null, element?: HTMLInputElement): void;
    /**
     * Edits the media with the given data or id.
     */
    edit(editedMedia: Media | number): void;
    /**
     * Updates the data of the currently edited media file.
     */
    updateData(media: Media): void;
}
export = MediaEditor;
