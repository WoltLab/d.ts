/**
 * Sortable lists with optimized handling per device sizes.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
interface UnknownObject {
    [key: string]: unknown;
}
interface SortableListOptions {
    containerId: string;
    className: string;
    offset: number;
    options: UnknownObject;
    isSimpleSorting: boolean;
    additionalParameters: UnknownObject;
}
declare class UiSortableList {
    protected readonly _options: SortableListOptions;
    /**
     * Initializes the sortable list controller.
     */
    constructor(opts: Partial<SortableListOptions>);
    /**
     * Enables sorting with an optional sort handle.
     */
    protected _enable(hasHandle: boolean): void;
    /**
     * Disables sorting for registered containers.
     */
    protected _disable(): void;
}
export = UiSortableList;
