/**
 * Gets the html code for the rendering of comments.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 */
import { ApiResult } from "../Result";
type Response = {
    template: string;
    lastCommentTime: number;
};
export declare function renderComments(objectTypeId: number, objectId: number, lastCommentTime?: number): Promise<ApiResult<Response>>;
export {};
