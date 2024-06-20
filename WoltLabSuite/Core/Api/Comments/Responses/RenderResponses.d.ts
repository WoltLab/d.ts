/**
 * Gets the html code for the rendering of responses.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 */
import { ApiResult } from "../../Result";
type Response = {
    lastResponseTime: number;
    lastResponseID: number;
    template: string;
};
export declare function renderResponses(commentId: number, lastResponseTime: number, lastResponseId: number, loadAllResponses: boolean): Promise<ApiResult<Response>>;
export {};
