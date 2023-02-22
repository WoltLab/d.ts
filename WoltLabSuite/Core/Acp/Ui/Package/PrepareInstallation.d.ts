/**
 * Attempts to download the requested package from the file and prompts for the
 * authentication credentials on rejection.
 *
 * @author      Alexander Ebert
 * @copyright   2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackSetup } from "../../../Ajax/Data";
import { DialogCallbackSetup } from "../../../Ui/Dialog/Data";
interface AjaxResponse {
    returnValues: {
        queueID?: number;
        template?: string;
    };
}
declare class AcpUiPackagePrepareInstallation {
    private identifier;
    private version;
    start(identifier: string, version: string): void;
    private prepare;
    private submit;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = AcpUiPackagePrepareInstallation;
