/**
 * Handles the selection of grid view rows.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
export declare class Selection extends EventTarget {
    #private;
    constructor(gridId: string, table: HTMLTableElement);
    selectionBarVisible(): boolean;
    refresh(): void;
    getSelectedIds(): number[];
    setBulkInteractionContextMenuOptions(options: string): void;
    resetSelection(): void;
    removeSelection(objectId: number): void;
}
interface SelectionEventMap {
    "grid-view:get-bulk-interactions": CustomEvent<{
        objectIds: number[];
    }>;
    "grid-view:update-selection": CustomEvent<void>;
}
export interface Selection extends EventTarget {
    addEventListener: {
        <T extends keyof SelectionEventMap>(type: T, listener: (this: Selection, ev: SelectionEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
    } & HTMLElement["addEventListener"];
}
export default Selection;
