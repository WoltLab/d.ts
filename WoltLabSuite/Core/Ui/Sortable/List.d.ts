/**
 * Sortable lists with optimized handling per device sizes.
 *
 * @author  Olaf Braun, Alexander Ebert
 * @copyright  2001-2024 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 * @deprecated 6.3 Use `AbstractNodeTreeView` instead.
 */
import Sortable from "sortablejs";
interface UnknownObject {
    [key: string]: unknown;
}
interface SortableListOptions {
    containerId: string;
    className: string;
    offset: number;
    options: Sortable.Options;
    isSimpleSorting: boolean;
    toleranceElement?: string;
    maxNestingLevel?: number;
    additionalParameters: UnknownObject;
}
declare class UiSortableList {
    #private;
    protected readonly _options: SortableListOptions;
    /**
     * Initializes the sortable list controller.
     */
    constructor(opts: Partial<SortableListOptions>);
    save(): Promise<void>;
}
export = UiSortableList;
