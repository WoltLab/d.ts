/**
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import WoltlabCoreDialog from "WoltLabSuite/Core/Element/woltlab-core-dialog";
import type { PromptOptions } from "../Dialog/Controls";
export declare class ListViewSetup {
    fromPreset(title: string, listViewClass: string, listViewParameters?: Map<string, string | string[]>, filters?: Map<string, string>, sortField?: string, sortOrder?: string, pageNo?: number, promptOptions?: Partial<PromptOptions>): Promise<WoltlabCoreDialog>;
}
export default ListViewSetup;
