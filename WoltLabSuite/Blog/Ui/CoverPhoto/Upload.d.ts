/**
 * Uploads a cover photo using AJAX.
 *
 * @author  Alexander Ebert
 * @copyright 2001-2021 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.2
 */
import Upload from "WoltLabSuite/Core/Upload";
import { ResponseData } from "WoltLabSuite/Core/Ajax/Data";
interface AjaxResponseData extends ResponseData {
    returnValues: {
        errorMessage: string;
        errorType: string;
    } | {
        coverPhotoID: number;
        url: string;
    };
}
declare class UiCoverPhotoUpload extends Upload {
    protected coverPhotoId: HTMLInputElement | null;
    protected readonly deleteButton: HTMLAnchorElement;
    constructor();
    protected _success(uploadId: number, data: AjaxResponseData): void;
    protected delete(event: MouseEvent): void;
    protected getCoverPhotoInput(): HTMLInputElement;
}
export = UiCoverPhotoUpload;
