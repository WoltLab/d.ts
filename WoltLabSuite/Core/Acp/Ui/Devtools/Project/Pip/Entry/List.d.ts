/**
 * Handles the JavaScript part of the devtools project pip entry list.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackSetup } from "../../../../../../Ajax/Data";
interface AjaxResponse {
    returnValues: {
        identifier: string;
    };
}
declare class DevtoolsProjectPipEntryList {
    private readonly entryType;
    private readonly pip;
    private readonly projectId;
    private readonly supportsDeleteInstruction;
    private readonly table;
    /**
     * Initializes the devtools project pip entry list handler.
     */
    constructor(tableId: string, projectId: number, pip: string, entryType: string, supportsDeleteInstruction: boolean);
    /**
     * Returns the data used to setup the AJAX request object.
     */
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    /**
     * Handles successful AJAX request.
     */
    _ajaxSuccess(data: AjaxResponse): void;
    /**
     * Shows the confirmation dialog when deleting a pip entry.
     */
    private _confirmDeletePipEntry;
    /**
     * Sends the AJAX request to delete a pip entry.
     */
    private deletePipEntry;
}
export = DevtoolsProjectPipEntryList;
