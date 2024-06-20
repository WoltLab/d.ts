/**
 * Gets the html code for the editing of a comment response.
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
export declare function editResponse(responseId: number): Promise<ApiResult<Response>>;
export {};
