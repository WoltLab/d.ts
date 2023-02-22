/**
 * Uploads media files.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import Upload from "../Upload";
import { Media, MediaUploadOptions, MediaUploadAjaxResponseData } from "./Data";
import MediaManager from "./Manager/Base";
declare class MediaUpload<TOptions extends MediaUploadOptions = MediaUploadOptions> extends Upload<TOptions> {
    protected _categoryId: number | null;
    protected readonly _elementTagSize: number;
    protected readonly _mediaManager: MediaManager | null;
    constructor(buttonContainerId: string, targetId: string, options: Partial<TOptions>);
    protected _createFileElement(file: File): HTMLElement;
    protected _getParameters(): ArbitraryObject;
    protected _replaceFileIcon(fileIcon: FaIcon, media: Media, size: number): void;
    protected _success(uploadId: number, data: MediaUploadAjaxResponseData): void;
}
export = MediaUpload;
