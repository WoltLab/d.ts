/**
 * Uploads file via AJAX.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { RequestOptions, ResponseData } from "./Ajax/Data";
import { FileCollection, FileElements, FileLikeObject, UploadId, UploadOptions } from "./Upload/Data";
declare abstract class Upload<TOptions extends UploadOptions = UploadOptions> {
    protected _button: HTMLParagraphElement;
    protected readonly _buttonContainer: HTMLElement;
    protected readonly _fileElements: FileElements[];
    protected _fileUpload: HTMLInputElement;
    protected _internalFileId: number;
    protected readonly _multiFileUploadIds: unknown[];
    protected readonly _options: TOptions;
    protected readonly _target: HTMLElement;
    protected constructor(buttonContainerId: string, targetId: string, options: Partial<TOptions>);
    /**
     * Creates the upload button.
     */
    protected _createButton(): void;
    /**
     * Creates the document element for an uploaded file.
     */
    protected _createFileElement(file: File | FileLikeObject): HTMLElement;
    /**
     * Creates the document elements for uploaded files.
     */
    protected _createFileElements(files: FileCollection): number | null;
    protected _createFileTableRow(_file: File | FileLikeObject): HTMLTableRowElement;
    /**
     * Handles a failed file upload.
     */
    protected _failure(_uploadId: number, _data: ResponseData, _responseText: string, _xhr: XMLHttpRequest, _requestOptions: RequestOptions): boolean;
    /**
     * Return additional parameters for upload requests.
     */
    protected _getParameters(): ArbitraryObject;
    /**
     * Return additional form data for upload requests.
     *
     * @since       5.2
     */
    protected _getFormData(): ArbitraryObject;
    /**
     * Inserts the created button to upload files into the button container.
     */
    protected _insertButton(): void;
    /**
     * Updates the progress of an upload.
     */
    protected _progress(uploadId: number, event: ProgressEvent): void;
    /**
     * Removes the button to upload files.
     */
    protected _removeButton(): void;
    /**
     * Handles a successful file upload.
     */
    protected _success(_uploadId: number, _data: ResponseData, _responseText: string, _xhr: XMLHttpRequestEventTarget, _requestOptions: RequestOptions): void;
    /**
     * File input change callback to upload files.
     */
    protected _upload(event: Event): UploadId;
    protected _upload(event: null, file: File): UploadId;
    protected _upload(event: null, file: null, blob: Blob): UploadId;
    protected _upload(event: Event | null, file?: File | null, blob?: Blob | null): UploadId;
    /**
     * Validates the upload before uploading them.
     *
     * @since       5.2
     */
    validateUpload(_files: FileCollection): boolean;
    /**
     * Sends the request to upload files.
     */
    protected _uploadFiles(files: FileCollection, blob?: Blob | null): number | null;
    /**
     * Returns true if there are any pending uploads handled by this
     * upload manager.
     *
     * @since  5.2
     */
    hasPendingUploads(): boolean;
    /**
     * Uploads the given file blob.
     */
    uploadBlob(blob: Blob): number;
    /**
     * Uploads the given file.
     */
    uploadFile(file: File): number;
}
export = Upload;
