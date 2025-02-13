/**
 * Provides the touch-friendly main menu.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { PageMenuProvider } from "./Provider";
import { PageMenuMainProvider } from "./Main/Provider";
export declare class PageMenuMain implements PageMenuProvider {
    private readonly container;
    private readonly mainMenu;
    private readonly mainMenuButton;
    private readonly menuItemBadges;
    private readonly menuItemProvider;
    private readonly observer;
    constructor(menuItemProvider: PageMenuMainProvider);
    enable(): void;
    disable(): void;
    getContent(): DocumentFragment;
    getMenuButton(): HTMLElement;
    sleep(): void;
    wakeup(): void;
    private watchForChanges;
    private buildMainMenu;
    private showActiveMenuItem;
    private buildLanguageMenu;
    private buildFooterMenu;
    private buildMenu;
    private buildMenuItemList;
    private buildMenuItem;
    private toggleList;
    private refreshUnreadIndicator;
    private refreshUnreadBage;
    private updateOverflowIndicator;
}
export default PageMenuMain;
