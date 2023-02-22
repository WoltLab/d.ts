/**
 * Uploads file via AJAX.
 *
 * @author  Joshua Ruesweg, Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since  5.2
 * @woltlabExcludeBundle tiny
 */
import { ResponseData } from "../../Ajax/Data";
import { FileCollection, FileLikeObject, UploadId, UploadOptions } from "../../Upload/Data";
import { default as DeleteHandler } from "./Delete";
import Upload from "../../Upload";
import { FileUploadHandler } from "./Data";
interface FileUploadOptions extends UploadOptions {
    imagePreview: boolean;
    maxFiles: number | null;
    internalId: string;
}
interface FileData {
    filesize: number;
    icon: string;
    image: string | null;
    imageHeight: number | null;
    imageWidth: number | null;
    uniqueFileId: string;
}
interface ErrorData {
    errorMessage: string;
}
interface AjaxResponse {
    error: ErrorData[];
    files: FileData[];
}
declare class FileUpload extends Upload<FileUploadOptions> implements FileUploadHandler {
    protected readonly _deleteHandler: DeleteHandler;
    constructor(buttonContainerId: string, targetId: string, options: Partial<FileUploadOptions>);
    protected _createFileElement(file: File | FileLikeObject): HTMLElement;
    protected _failure(uploadId: number, data: ResponseData): boolean;
    protected _upload(event: Event): UploadId;
    protected _upload(event: null, file: File): UploadId;
    protected _upload(event: null, file: null, blob: Blob): UploadId;
    protected _success(uploadId: number, data: AjaxResponse): void;
    protected _getFormData(): ArbitraryObject;
    validateUpload(files: FileCollection): boolean;
    /**
     * Returns the count of the uploaded images.
     */
    countFiles(): number;
    /**
     * Checks the maximum number of files and enables or disables the upload button.
     */
    checkMaxFiles(): void;
}
export = FileUpload;
