/**
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.4
 */
import { AjaxCallbackObject, AjaxCallbackSetup } from "../../../../../../Ajax/Data";
export declare class List implements AjaxCallbackObject {
    protected readonly clearExistingLogButton: HTMLAnchorElement;
    protected readonly clearLogButton: HTMLAnchorElement;
    constructor();
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(): void;
    protected clearLog(): void;
    protected clearExistingLog(): void;
    protected showStackTrace(event: Event): void;
}
export default List;
