/**
 * Updates a comment response.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../../Result";
export declare function updateResponse(responseId: number, message: string): Promise<ApiResult<[]>>;
