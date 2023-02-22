/**
 * Suggestions for page object ids with external response data processing.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import UiSearchInput from "../../Search/Input";
import { SearchInputOptions } from "../../Search/Data";
import { DatabaseObjectActionPayload, DatabaseObjectActionResponse } from "../../../Ajax/Data";
type CallbackSuccess = (data: DatabaseObjectActionResponse) => void;
interface PageSearchOptions extends SearchInputOptions {
    callbackSuccess: CallbackSuccess;
}
declare class UiPageSearchInput extends UiSearchInput {
    private readonly callbackSuccess;
    private pageId;
    constructor(element: HTMLInputElement, options: PageSearchOptions);
    /**
     * Sets the target page id.
     */
    setPageId(pageId: number): void;
    protected getParameters(value: string): Partial<DatabaseObjectActionPayload>;
    _ajaxSuccess(data: DatabaseObjectActionResponse): void;
}
export = UiPageSearchInput;
