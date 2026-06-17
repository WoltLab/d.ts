/**
 * Marks a moderation queue as read.
 *
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../Result";
type Response = {
    unreadModerationItems: number;
};
export declare function markModerationQueueAsRead(queueId: number): Promise<ApiResult<Response>>;
export {};
