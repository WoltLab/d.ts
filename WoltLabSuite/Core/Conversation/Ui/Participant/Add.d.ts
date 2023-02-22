/**
 * Adds participants to an existing conversation.
 *
 * @author  Alexander Ebert
 * @copyright   2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackObject } from "WoltLabSuite/Core/Ajax/Data";
import { AjaxCallbackSetup, ResponseData } from "WoltLabSuite/Core/Ajax/Data";
import { DialogCallbackObject, DialogCallbackSetup } from "WoltLabSuite/Core/Ui/Dialog/Data";
interface AjaxResponseData extends ResponseData {
    actionName: "addParticipants" | "getAddParticipantsForm";
}
interface AjaxAddParticipantsData extends AjaxResponseData {
    returnValues: {
        count?: number;
        errorMessage?: string;
        successMessage?: string;
    };
}
interface AjaxGetAddParticipantsFormData extends AjaxResponseData {
    returnValues: {
        canAddGroupParticipants: boolean;
        csvPerType: boolean;
        excludedSearchValues: string[];
        maxItems: number;
        restrictUserGroupIDs: number[];
        template: string;
    };
}
declare class UiParticipantAdd implements AjaxCallbackObject, DialogCallbackObject {
    protected readonly conversationId: number;
    constructor(conversationId: number);
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: AjaxResponseData): void;
    /**
     * Shows the success message and closes the dialog overlay.
     */
    protected handleResponse(data: AjaxAddParticipantsData): void;
    /**
     * Renders the dialog to add participants.
     * @protected
     */
    protected render(data: AjaxGetAddParticipantsFormData): void;
    /**
     * Sends a request to add participants.
     */
    protected submit(): void;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = UiParticipantAdd;
