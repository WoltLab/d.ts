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
    authorID: number | null;
    author: string;
    time: string;
    link: string;
    title: string;
    avatar: string;
    message: string | null;
    rawMessage: string | null;
};
export declare function renderQuote(objectType: string, className: string, objectID: number): Promise<ApiResult<Response>>;
export {};
