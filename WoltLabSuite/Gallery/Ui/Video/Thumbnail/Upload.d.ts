/**
 * Handles uploading video thumbnails.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 3.1
 */
import Upload from "WoltLabSuite/Core/Upload";
import { VideoThumbnailDataHandler } from "../../../LegacyTypes";
interface AjaxResponse {
    returnValues: {
        errorType: string;
        errorMessage: string;
    } | {
        imageID: number;
        url: string;
    };
}
declare class ThumbnailUpload extends Upload {
    protected readonly dataHandler: VideoThumbnailDataHandler;
    protected readonly _target: HTMLImageElement;
    constructor(dataHandler: VideoThumbnailDataHandler);
    protected _createFileElement(): HTMLElement;
    protected _getParameters(): ArbitraryObject;
    protected _refreshImage(): void;
    protected _success(uploadId: number, data: AjaxResponse): void;
}
export = ThumbnailUpload;
