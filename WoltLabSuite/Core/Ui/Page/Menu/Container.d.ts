/**
 * Wrapper logic for elements that are placed over the main content
 * such as the mobile main menu and the user menu with its tabs.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { PageMenuProvider } from "./Provider";
export declare class PageMenuContainer {
    private readonly container;
    private readonly content;
    private focusTrap?;
    private readonly provider;
    constructor(provider: PageMenuProvider);
    open(): void;
    close(): void;
    toggle(): void;
    getContent(): HTMLElement;
    private buildElements;
    private getFocusTrap;
}
export default PageMenuContainer;
