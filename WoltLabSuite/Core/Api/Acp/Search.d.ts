/**
 * Fetches ACP search results for a given query.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "WoltLabSuite/Core/Api/Result";
export type AcpSearchResultItem = {
    link: string;
    title: string;
    subtitle?: string;
};
export type AcpSearchResultGroup = {
    title: string;
    items: AcpSearchResultItem[];
};
type Response = {
    results: AcpSearchResultGroup[];
};
export declare function searchAcp(query: string, provider?: string): Promise<ApiResult<Response>>;
export {};
