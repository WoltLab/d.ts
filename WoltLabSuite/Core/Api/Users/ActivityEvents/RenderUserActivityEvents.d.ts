/**
 * Loads a paginated list of recent user activity events.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import { ApiResult } from "../../Result";
type Response = {
    lastEventID: number;
    lastEventTime: number;
    template: string;
};
export declare function renderUserActivityEvents(lastEventTime: number, lastEventID?: number, userID?: number, boxID?: number, filteredByFollowedUsers?: boolean): Promise<ApiResult<Response | Record<string, never>>>;
export {};
