/**
 * Callback-based pagination.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @deprecated 6.0 Use `<woltlab-core-pagination>` directly.
 */
declare class UiPagination {
    #private;
    constructor(element: HTMLElement, options: PaginationOptions);
    getActivePage(): number;
    getElement(): HTMLElement;
    getMaxPage(): number;
    /**
     * Switches to given page number.
     */
    switchPage(pageNo: number, event?: MouseEvent): void;
}
export = UiPagination;
type CallbackSwitch = (pageNo: number) => void;
type CallbackShouldSwitch = (pageNo: number) => boolean;
interface PaginationOptions {
    activePage: number;
    maxPage: number;
    callbackShouldSwitch?: CallbackShouldSwitch | null;
    callbackSwitch?: CallbackSwitch | null;
}
