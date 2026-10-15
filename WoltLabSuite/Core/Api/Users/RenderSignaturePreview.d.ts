/**
 * Renders the preview of the active user's signature.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import { ApiResult } from "WoltLabSuite/Core/Api/Result";
type Response = {
    message: string;
};
export declare function renderSignaturePreview(message: string): Promise<ApiResult<Response>>;
export {};
