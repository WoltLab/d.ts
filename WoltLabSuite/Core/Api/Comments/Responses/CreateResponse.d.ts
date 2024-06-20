/**
 * Creates a new comment response.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../../Result";
type Response = {
    responseID: number;
};
export declare function createResponse(commentId: number, message: string, guestToken?: string): Promise<ApiResult<Response>>;
export {};
