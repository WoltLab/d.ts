/**
 * Marks all moderation queues as read.
 *
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../Result";
export declare function markAllModerationQueuesAsRead(): Promise<ApiResult<[]>>;
