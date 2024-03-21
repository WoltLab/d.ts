/**
 * Deletes a user’s session, effectively forcing a device with that session id
 * to be logged out.
 *
 * @author Alexander Ebert
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../Result";
export declare function deleteSession(sessionId: string): Promise<ApiResult<[]>>;
