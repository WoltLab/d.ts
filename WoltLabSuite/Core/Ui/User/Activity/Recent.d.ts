/**
 * @woltlabExcludeBundle all
 * @deprecated 6.1 use `WoltLabSuite/Core/Components/User/RecentActivity/Loader` instead
 */
import { AjaxCallbackObject, AjaxCallbackSetup } from "../../../Ajax/Data";
interface AjaxResponse {
    returnValues: {
        lastEventID: number;
        lastEventTime: number;
        template?: string;
    };
}
declare class UiUserActivityRecent implements AjaxCallbackObject {
    private readonly containerId;
    private readonly list;
    private readonly showMoreItem;
    constructor(containerId: string);
    private showMore;
    private switchContext;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiUserActivityRecent;
