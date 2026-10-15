/**
 * Handles the configuration of the visible columns of grid views. The
 * configuration is not persisted, but it is part of the url.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
export declare class ColumnConfiguration extends EventTarget {
    #private;
    constructor(gridId: string, visibleColumns?: string[]);
    /**
     * Returns the ids of the visible columns or `undefined` if the user
     * did not configure the columns.
     */
    getVisibleColumns(): string[] | undefined;
    getQueryParameters(): [string, string][];
    /**
     * Reads the visible columns from the given search params and returns
     * true if they differ from the current configuration.
     */
    updateFromSearchParams(params: URLSearchParams): boolean;
}
interface ColumnConfigurationEventMap {
    "grid-view:change": CustomEvent<void>;
}
export interface ColumnConfiguration extends EventTarget {
    addEventListener: {
        <T extends keyof ColumnConfigurationEventMap>(type: T, listener: (this: ColumnConfiguration, ev: ColumnConfigurationEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
    } & HTMLElement["addEventListener"];
}
export default ColumnConfiguration;
