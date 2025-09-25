/**
 * Handles the state of a list view.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
export declare const enum StateChangeCause {
    Change = 0,
    History = 1,
    Pagination = 2
}
export declare class State extends EventTarget {
    #private;
    constructor(viewId: string, viewElement: HTMLElement, pageNo: number, baseUrl: string, sortField: string, sortOrder: string, defaultSortField: string, defaultSortOrder: string);
    getPageNo(): number;
    getSortField(): string;
    getSortOrder(): string;
    getActiveFilters(): Map<string, string>;
    getSelectedIds(): number[];
    updateFromResponse(cause: StateChangeCause, count: number, filterLabels: ArrayLike<string>): void;
    setBulkInteractionContextMenuOptions(options: string): void;
    resetSelection(): void;
    refreshSelection(): void;
}
interface StateEventMap {
    "list-view:change": CustomEvent<{
        source: StateChangeCause;
    }>;
    "list-view:get-bulk-interactions": CustomEvent<{
        objectIds: number[];
    }>;
}
export interface State extends EventTarget {
    addEventListener: {
        <T extends keyof StateEventMap>(type: T, listener: (this: State, ev: StateEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
    } & HTMLElement["addEventListener"];
}
export default State;
