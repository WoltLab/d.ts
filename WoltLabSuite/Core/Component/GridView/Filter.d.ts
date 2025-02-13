/**
 * Handles the filterung of grid views.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
export declare class Filter extends EventTarget {
    #private;
    constructor(gridId: string);
    getActiveFilters(): Map<string, string>;
    getQueryParameters(): [string, string][];
    updateFromSearchParams(params: URLSearchParams): void;
    setFilterLabels(labels: ArrayLike<string>): void;
}
interface FilterEventMap {
    "grid-view:change": CustomEvent<void>;
}
export interface Filter extends EventTarget {
    addEventListener: {
        <T extends keyof FilterEventMap>(type: T, listener: (this: Filter, ev: FilterEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
    } & HTMLElement["addEventListener"];
}
export default Filter;
