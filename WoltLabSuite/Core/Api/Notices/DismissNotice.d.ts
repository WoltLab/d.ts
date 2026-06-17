/**
 * Dismiss a notice.
 *
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import { ApiResult } from "../Result";
export declare function dismissNotice(noticeId: number): Promise<ApiResult<[]>>;
