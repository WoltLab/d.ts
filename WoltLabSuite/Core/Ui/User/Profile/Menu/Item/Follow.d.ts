/**
 * @woltlabExcludeBundle all
 */
import { AjaxCallbackSetup, ResponseData } from "../../../../../Ajax/Data";
import UiUserProfileMenuItemAbstract from "./Abstract";
interface AjaxResponse extends ResponseData {
    returnValues: {
        following: 1 | 0;
    };
}
declare class UiUserProfileMenuItemFollow extends UiUserProfileMenuItemAbstract {
    constructor(userId: number, isActive: boolean);
    protected _getLabel(): string;
    protected _getAjaxActionName(): string;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiUserProfileMenuItemFollow;
