/**
 * Loads a paginated list of reactions for a user profile.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import { ApiResult } from "../../Result";
type Response = {
    lastLikeTime: number;
    template: string;
};
export declare function renderUserReactions(userID: number, targetType: string, lastLikeTime?: number, reactionTypeID?: number): Promise<ApiResult<Response | Record<string, never>>>;
export {};
