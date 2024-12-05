/**
 * @woltlabExcludeBundle all
 */
import UiUserProfileMenuItemAbstract from "./Abstract";
interface AjaxResponse {
    isIgnoredUser: 1 | 0;
}
/**
 * @deprecated 6.2 Use `WoltLabSuite/Core/Component/User/Ignore` instead.
 */
declare class UiUserProfileMenuItemIgnore extends UiUserProfileMenuItemAbstract {
    private readonly dialog;
    constructor(userId: number, isActive: boolean);
    _getLabel(): string;
    _ajaxSuccess(data: AjaxResponse): void;
    protected _toggle(event: MouseEvent): void;
}
export = UiUserProfileMenuItemIgnore;
