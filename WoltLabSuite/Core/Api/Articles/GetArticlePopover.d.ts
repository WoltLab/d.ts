/**
 * Gets the html code for the rendering of an article popover.
 *
 * @author  Marcel Werk
 * @copyright  2001-2025 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
import { ApiResult } from "WoltLabSuite/Core/Api/Result";
export declare function getArticlePopover(articleId: number): Promise<ApiResult<string>>;
