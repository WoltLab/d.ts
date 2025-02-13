/**
 * Gets the html code for the rendering of a exception log entry.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
import { ApiResult } from "../Result";
type Response = {
    template: string;
};
export declare function renderException(exceptionId: string): Promise<ApiResult<Response>>;
export {};
