/**
 * Handles the sorting of list view items.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
export declare class Sorting extends EventTarget {
    #private;
    constructor(dropdownMenu: HTMLElement | undefined, sortField: string, sortOrder: string);
    getSortField(): string;
    getSortOrder(): string;
    getQueryParameters(): [string, string][];
    updateFromSearchParams(params: URLSearchParams): void;
}
interface SortingEventMap {
    "list-view:change": CustomEvent<void>;
}
export interface Sorting extends EventTarget {
    addEventListener: {
        <T extends keyof SortingEventMap>(type: T, listener: (this: Sorting, ev: SortingEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
    } & HTMLElement["addEventListener"];
}
export default Sorting;
