/**
 * Provides the media manager dialog for selecting media for Redactor editors.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import MediaManager from "./Base";
import { Media, MediaManagerEditorOptions, MediaUploadSuccessEventData } from "../Data";
import { OnDropPayload } from "../../Ui/Redactor/DragAndDrop";
interface PasteFromClipboard {
    blob: Blob;
}
declare class MediaManagerEditor extends MediaManager<MediaManagerEditorOptions> {
    protected _activeButton: any;
    protected readonly _buttons: HTMLCollectionOf<HTMLElement>;
    protected _mediaToInsert: Map<number, Media>;
    protected _mediaToInsertByClipboard: boolean;
    protected _uploadData: OnDropPayload | PasteFromClipboard | null;
    protected _uploadId: number | null;
    constructor(options: Partial<MediaManagerEditorOptions>);
    protected _addButtonEventListeners(): void;
    /**
     * Builds the dialog to setup inserting media files.
     */
    protected _buildInsertDialog(): void;
    protected _click(event: Event): void;
    protected _dialogShow(): void;
    /**
     * Handles pasting and dragging and dropping files into the editor.
     */
    protected _editorUpload(data: OnDropPayload): void;
    /**
     * Returns the id of the insert dialog based on the media files to be inserted.
     */
    protected _getInsertDialogId(): string;
    /**
     * Returns the supported thumbnail sizes (excluding `original`) for all media images to be inserted.
     */
    protected _getThumbnailSizes(): string[];
    /**
     * Inserts media files into the editor.
     */
    protected _insertMedia(event?: Event | null, thumbnailSize?: string, closeEditor?: boolean): void;
    /**
     * Inserts a single media item into the editor.
     */
    protected _insertMediaItem(thumbnailSize: string | undefined, media: Media): void;
    /**
     * Is called after media files are successfully uploaded to insert copied media.
     */
    protected _mediaUploaded(data: MediaUploadSuccessEventData): void;
    /**
     * Handles clicking on the insert button.
     */
    protected _openInsertDialog(event: Event): void;
    /**
     * Is called to insert the media files with the given ids into an editor.
     */
    clipboardInsertMedia(mediaIds: number[]): void;
    /**
     * Prepares insertion of the media files with the given ids.
     */
    insertMedia(mediaIds: number[], insertedByClipboard?: boolean): void;
    getMode(): string;
    setupMediaElement(media: Media, mediaElement: HTMLElement): void;
}
export = MediaManagerEditor;
