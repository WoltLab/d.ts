/**
 * Creates a new comment.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../Result";
type Response = {
    commentID: number;
};
export declare function createComment(objectTypeId: number, objectId: number, message: string, guestToken?: string): Promise<ApiResult<Response>>;
export {};
