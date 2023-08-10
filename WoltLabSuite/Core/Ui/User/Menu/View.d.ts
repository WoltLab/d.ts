/**
 * Provides the UI elements of a user menu.
 *
 * @author Alexander Ebert
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { UserMenuProvider } from "./Data/Provider";
export declare class UserMenuView {
    private readonly element;
    private usePerfectScrollbar;
    private readonly focusTrap;
    private readonly markAllAsReadButton;
    private perfectScrollbar;
    private readonly provider;
    constructor(provider: UserMenuProvider);
    getElement(): HTMLElement;
    open(): Promise<void>;
    close(): void;
    getItems(): HTMLElement[];
    private setContent;
    private rebuildScrollbar;
    private enablePerfectScrollbar;
    private disablePerfectScrollbar;
    private createItem;
    private markAsRead;
    private reset;
    private buildElement;
    private buildButton;
    private markAllAsRead;
    private buildFooter;
    getContent(): HTMLElement;
}
export default UserMenuView;
