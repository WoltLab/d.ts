/**
 * Default implementation for user interaction menu items used in the user profile.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import { AjaxCallbackObject, AjaxCallbackSetup, ResponseData } from "../../../../../Ajax/Data";
declare abstract class UiUserProfileMenuItemAbstract implements AjaxCallbackObject {
    protected readonly _button: HTMLAnchorElement;
    protected _isActive: boolean;
    protected readonly _listItem: HTMLLIElement;
    protected readonly _userId: number;
    /**
     * Creates a new user profile menu item.
     */
    protected constructor(userId: number, isActive: boolean);
    /**
     * Initializes the menu item.
     */
    protected _initButton(): void;
    /**
     * Handles clicks on the menu item button.
     */
    protected _toggle(event: MouseEvent): void;
    /**
     * Updates the button state and label.
     *
     * @protected
     */
    protected _updateButton(): void;
    /**
     * Returns the button label.
     */
    protected _getLabel(): string;
    /**
     * Returns the Ajax action name.
     */
    protected _getAjaxActionName(): string;
    /**
     * Handles successful Ajax requests.
     */
    _ajaxSuccess(_data: ResponseData): void;
    /**
     * Returns the default Ajax request data
     */
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiUserProfileMenuItemAbstract;
