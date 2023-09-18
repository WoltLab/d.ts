/**
 * Handler to sort reviews.
 *
 * @author  Joshua Ruesweg
 * @copyright 2001-2021 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.2
 */
import Loader from "./Loader";
declare class SortHandler {
    protected _activeSortField: HTMLElement;
    protected readonly dropdownToggle: HTMLElement;
    protected readonly loader: Loader;
    protected readonly sortFields: Map<string, HTMLElement>;
    protected sortOrderField: HTMLSpanElement;
    constructor(loader: Loader);
    protected clickSortField(sortField: string): void;
    protected toggleSortOrder(): void;
    activeSortOrder(): string;
    activeSortField(): string;
}
export = SortHandler;
