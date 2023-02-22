/**
 * Search interface for the package server lists.
 *
 * @author      Alexander Ebert
 * @copyright   2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackObject, AjaxCallbackSetup } from "../../../Ajax/Data";
interface AjaxResponse {
    actionName: string;
    returnValues: {
        count: number;
        template: string;
    };
}
declare class AcpUiPackageSearch implements AjaxCallbackObject {
    private readonly input;
    private readonly installation;
    private isBusy;
    private isFirstRequest;
    private lastValue;
    private options;
    private request?;
    private readonly resultList;
    private readonly resultListContainer;
    private readonly resultCounter;
    private timerDelay?;
    constructor();
    private keyup;
    private search;
    private setStatus;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = AcpUiPackageSearch;
