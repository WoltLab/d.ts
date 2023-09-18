/**
 * Handles adding video links.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import { AjaxCallbackObject, AjaxCallbackSetup } from "WoltLabSuite/Core/Ajax/Data";
import { DialogCallbackObject, DialogCallbackSetup } from "WoltLabSuite/Core/Ui/Dialog/Data";
import { ImageHandler } from "../../../LegacyTypes";
type VideoLinkHandlerOptions = {
    action: "add" | "edit";
    tmpHash: string;
};
interface AjaxResponse {
    returnValues: {
        errorMessage: string;
        errorType: string;
    } | {
        data: {
            imageID: number;
            hasThumbnail?: 1 | 0;
            [key: string]: unknown;
        };
        restrictions: string;
        userVideoLinkCount: number;
    };
}
declare class VideoLinkHandler implements AjaxCallbackObject, DialogCallbackObject {
    protected addButton: HTMLLIElement;
    protected disableAdding: boolean;
    protected readonly editButton: HTMLAnchorElement;
    protected readonly imageHandler: ImageHandler;
    protected readonly options: VideoLinkHandlerOptions;
    protected overwriteData: HTMLInputElement;
    protected submitButton: HTMLInputElement | undefined;
    protected readonly thumbnailList: HTMLUListElement;
    protected videoLink: HTMLInputElement;
    constructor(imageHandler: ImageHandler, options: VideoLinkHandlerOptions);
    /**
     * Saves the entered link.
     */
    protected addLink(): void;
    /**
     * Handles `keypress` event for the video link input element to submit form.
     */
    protected addLinkByEnter(event: KeyboardEvent): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: AjaxResponse): void;
    /**
     * Shows the dialog to add video links.
     */
    protected click(): void;
    /**
     * Returns the data to set up the video link adding dialog.
     */
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
    /**
     * Shows the dialog to edit a video link.
     */
    protected edit(): void;
    /**
     * Replaces the link of the current video with the link currently entered in the video link edit dialog.
     */
    protected editLink(): void;
    /**
     * Returns the error element for the video link in the dialog or `null` if no exists yet.
     */
    protected getInnerError(createInnerError: true): HTMLElement;
    protected getInnerError(createInnerError?: boolean): HTMLElement | null;
    /**
     * Initializes the dialog.
     */
    protected showDialog(): void;
    /**
     * Updates the interface based on the current user link count.
     */
    updateInterface(): void;
}
export = VideoLinkHandler;
