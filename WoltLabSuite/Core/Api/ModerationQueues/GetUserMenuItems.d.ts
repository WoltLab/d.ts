/**
 * Retrieves the user menu items for the moderation queues.
 *
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../Result";
import { UserMenuData } from "WoltLabSuite/Core/Ui/User/Menu/Data/Provider";
type Response = {
    unreadModerationCount: number;
    items: UserMenuData[];
};
export declare function getUserMenuItems(): Promise<ApiResult<Response>>;
export {};
