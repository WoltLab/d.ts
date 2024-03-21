/**
 * Requests the list of users and groups that match the provided query string.
 *
 * @author Alexander Ebert
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../Result";
type Item = {
    avatarTag: string;
    username: string;
    userID: number;
    type: "user";
} | {
    name: string;
    groupID: string;
    type: "group";
};
type Response = Item[];
export declare function mentionSuggestions(query: string): Promise<ApiResult<Response>>;
export {};
