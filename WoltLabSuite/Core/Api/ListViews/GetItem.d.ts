/**
 * Gets a single item for rendering in a list view.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
import { ApiResult } from "../Result";
type Response = {
    template: string;
};
export declare function getItem(listViewClass: string, objectId: string | number, listViewParameters?: Map<string, string>): Promise<ApiResult<Response>>;
export {};
