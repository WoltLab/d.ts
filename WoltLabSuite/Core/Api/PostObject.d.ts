/**
 * Sends a post request to the given endpoint.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "./Result";
type Payload = Blob | FormData | Record<string, unknown>;
export declare function postObject(endpoint: string, payload?: Payload): Promise<ApiResult<[]>>;
export {};
