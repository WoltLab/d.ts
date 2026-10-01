/**
 * Refreshes the package database and returns the link to the update page if
 * there are any updates available.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "WoltLabSuite/Core/Api/Result";
export type Response = {
    url: string;
};
export declare function searchForUpdates(): Promise<ApiResult<Response>>;
