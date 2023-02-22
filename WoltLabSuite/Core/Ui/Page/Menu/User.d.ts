/**
 * Provides the touch-friendly user menu.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { PageMenuProvider } from "./Provider";
export declare class PageMenuUser implements PageMenuProvider {
    private activeTab?;
    private readonly container;
    private readonly legacyUserPanels;
    private readonly observer;
    private readonly userMenuProviders;
    private readonly tabOrigins;
    private readonly tabPanels;
    private readonly tabs;
    private readonly userMenu;
    private readonly userMenuButton;
    constructor();
    enable(): void;
    disable(): void;
    getContent(): DocumentFragment;
    getMenuButton(): HTMLElement;
    sleep(): void;
    wakeup(): void;
    private isInMaintenanceMode;
    private openNotifications;
    private openTab;
    private closeActiveTab;
    private closeTab;
    private attachViewToPanel;
    private detachViewsFromPanel;
    private keydown;
    private buildTabMenu;
    private buildTab;
    private buildControlPanelTab;
    private buildLegacyTabs;
    private buildTabComponents;
    private refreshUnreadIndicator;
    private refreshTabUnreadIndicators;
}
export declare function hasValidUserMenu(): boolean;
export default PageMenuUser;
