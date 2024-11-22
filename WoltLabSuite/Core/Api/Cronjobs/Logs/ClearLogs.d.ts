/**
 * Deletes all entries of the cronjob log.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
import { ApiResult } from "../../Result";
export declare function clearLogs(): Promise<ApiResult<[]>>;
