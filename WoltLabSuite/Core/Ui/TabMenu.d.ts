/**
 * Common interface for tab menu access.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import TabMenuSimple from "./TabMenu/Simple";
/**
 * Selects the first tab containing an element with class `formError`.
 */
export declare function selectErroneousTabs(): void;
/**
 * Sets up tab menus and binds listeners.
 */
export declare function setup(): void;
/**
 * Returns a TabMenuSimple instance for given container id.
 */
export declare function getTabMenu(containerId: string): TabMenuSimple | undefined;
export declare function scrollToTab(tab: HTMLElement): void;
