/**
 * @woltlabExcludeBundle all
 */
import UiUserProfileMenuItemAbstract from "./Abstract";
interface AjaxResponse {
    isIgnoredUser: 1 | 0;
}
declare class UiUserProfileMenuItemIgnore extends UiUserProfileMenuItemAbstract {
    private readonly dialog;
    constructor(userId: number, isActive: boolean);
    _getLabel(): string;
    _ajaxSuccess(data: AjaxResponse): void;
    protected _toggle(event: MouseEvent): void;
}
export = UiUserProfileMenuItemIgnore;
