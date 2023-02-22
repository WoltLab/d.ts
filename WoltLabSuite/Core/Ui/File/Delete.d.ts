/**
 * Delete files which are uploaded via AJAX.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since  5.2
 * @woltlabExcludeBundle tiny
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../Ajax/Data";
import { FileUploadHandler } from "./Data";
interface AjaxResponse extends DatabaseObjectActionResponse {
    uniqueFileId: string;
}
declare class UiFileDelete implements AjaxCallbackObject {
    private readonly buttonContainer;
    private readonly containers;
    private deleteButton?;
    private readonly internalId;
    private readonly isSingleImagePreview;
    private readonly target;
    private readonly uploadHandler;
    constructor(buttonContainerId: string, targetId: string, isSingleImagePreview: boolean, uploadHandler: FileUploadHandler);
    /**
     * Creates the upload button.
     */
    private createButtons;
    /**
     * Init the delete button for a specific element.
     */
    private initDeleteButton;
    /**
     * Delete a specific file with the given uniqueFileId.
     */
    private deleteElement;
    /**
     * Rebuilds the delete buttons for unknown files.
     */
    rebuild(): void;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiFileDelete;
