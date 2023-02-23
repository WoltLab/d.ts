/**
 * Provides the media manager dialog.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { Media, MediaManagerOptions, MediaEditorCallbackObject, MediaUploadSuccessEventData } from "../Data";
import { DialogCallbackSetup, DialogCallbackObject } from "../../Ui/Dialog/Data";
import UiPagination from "../../Ui/Pagination";
import MediaManagerSearch from "./Search";
import MediaUpload from "../Upload";
import MediaEditor from "../Editor";
interface DialogInitAjaxResponseData {
    returnValues: {
        hasMarkedItems: number;
        media: object;
        pageCount: number;
    };
}
interface SetMediaAdditionalData {
    pageCount: number;
    pageNo: number;
}
declare abstract class MediaManager<TOptions extends MediaManagerOptions = MediaManagerOptions> implements DialogCallbackObject, MediaEditorCallbackObject {
    protected _forceClipboard: boolean;
    protected _hadInitiallyMarkedItems: boolean;
    protected readonly _id: string;
    protected readonly _listItems: Map<number, HTMLLIElement>;
    protected _media: Map<number, Media>;
    protected _mediaCategorySelect: HTMLSelectElement | null;
    protected readonly _mediaEditor: MediaEditor | null;
    protected _mediaManagerMediaList: HTMLElement | null;
    protected _pagination: UiPagination | null;
    protected _search: MediaManagerSearch | null;
    protected _upload: MediaUpload | null;
    protected readonly _options: TOptions;
    constructor(options: Partial<TOptions>);
    /**
     * Adds click event listeners to media buttons.
     */
    protected _addButtonEventListeners(): void;
    /**
     * Is called when a new category is selected.
     */
    protected _categoryChange(): void;
    /**
     * Handles clicks on the media manager button.
     */
    protected _click(event: Event): void;
    /**
     * Is called if the media manager dialog is closed.
     */
    protected _dialogClose(): void;
    /**
     * Initializes the dialog when first loaded.
     */
    protected _dialogInit(content: HTMLElement, data: DialogInitAjaxResponseData): void;
    /**
     * Returns all data to setup the media manager dialog.
     */
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
    /**
     * Is called if the media manager dialog is shown.
     */
    protected _dialogShow(): void;
    /**
     * Opens the media editor for a media file.
     */
    protected _editMedia(event: Event): void;
    /**
     * Re-opens the manager dialog after closing the editor dialog.
     */
    _editorClose(): void;
    /**
     * Re-opens the manager dialog and updates the media data after successfully editing a media file.
     */
    _editorSuccess(media: Media, oldCategoryId?: number, closedEditorDialog?: boolean): void;
    /**
     * Initializes the dialog pagination.
     */
    protected _initPagination(pageCount: number, pageNo?: number): void;
    /**
     * Removes all media clipboard checkboxes.
     */
    _removeClipboardCheckboxes(): void;
    /**
     * Opens the media editor after uploading a single file.
     *
     * @since 5.2
     */
    _openEditorAfterUpload(data: MediaUploadSuccessEventData): void;
    /**
     * Sets the displayed media (after a search).
     */
    _setMedia(media: object): void;
    /**
     * Adds a media file to the manager.
     */
    addMedia(media: Media, listItem: HTMLLIElement): void;
    /**
     * Is called after the media files with the given ids have been deleted via clipboard.
     */
    clipboardDeleteMedia(mediaIds: number[]): void;
    /**
     * Returns the id of the currently selected category or `0` if no category is selected.
     */
    getCategoryId(): number;
    /**
     * Returns the media manager dialog element.
     */
    getDialog(): HTMLElement;
    /**
     * Returns the mode of the media manager.
     */
    getMode(): string;
    /**
     * Returns the media manager option with the given name.
     */
    getOption(name: string): any;
    /**
     * Removes a media file.
     */
    removeMedia(mediaId: number): void;
    /**
     * Changes the displayed media to the previously displayed media.
     */
    resetMedia(): void;
    /**
     * Sets the media files currently displayed.
     */
    setMedia(media: object, template: string, additionalData: SetMediaAdditionalData): void;
    /**
     * Sets up a new media element.
     */
    setupMediaElement(media: Media, mediaElement: HTMLElement): void;
}
export = MediaManager;
