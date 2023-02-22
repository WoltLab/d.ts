/**
 * Uploads replacemnts for media files.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.3
 * @woltlabExcludeBundle tiny
 */
import { MediaUploadAjaxResponseData, MediaUploadOptions } from "./Data";
import MediaUpload from "./Upload";
declare class MediaReplace extends MediaUpload {
    protected readonly _mediaID: number;
    constructor(mediaID: number, buttonContainerId: string, targetId: string, options: Partial<MediaUploadOptions>);
    protected _createButton(): void;
    protected _createFileElement(): HTMLElement;
    protected _getFormData(): ArbitraryObject;
    protected _success(uploadId: number, data: MediaUploadAjaxResponseData): void;
}
export = MediaReplace;
