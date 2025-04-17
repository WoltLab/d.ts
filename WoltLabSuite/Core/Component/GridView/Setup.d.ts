/**
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
import WoltlabCoreDialog from "WoltLabSuite/Core/Element/woltlab-core-dialog";
export declare class GridViewSetup {
    fromPreset(title: string, gridViewClass: string, pageNo?: number, sortField?: string, sortOrder?: string, filters?: Map<string, string>, gridViewParameters?: Map<string, string>): Promise<WoltlabCoreDialog>;
}
export default GridViewSetup;
