/**
 * Gets the html code for the rendering of a response.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 */
import { ApiResult } from "../../Result";
type Response = {
    template: string;
};
export declare function renderResponse(responseId: number, messageOnly?: boolean, objectTypeId?: number | undefined): Promise<ApiResult<Response>>;
export {};
