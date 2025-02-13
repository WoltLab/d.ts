/**
 * Requests render a full quote of a message.
 *
 * @author Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../Result";
type Response = {
    objectID: number;
    authorID: number;
    author: string;
    time: string;
    title: string;
    link: string;
    avatar: string;
};
export declare function messageAuthor(className: string, objectID: number): Promise<ApiResult<Response>>;
export {};
