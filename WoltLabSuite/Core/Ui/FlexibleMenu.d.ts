/**
 * Dynamically transforms menu-like structures to handle items exceeding the available width
 * by moving them into a separate dropdown.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @deprecated 5.5 This module is unused and will be removed.
 * @woltlabExcludeBundle all
 */
/**
 * Register default menus and set up event listeners.
 */
export declare function setup(): void;
/**
 * Registers a menu by element id.
 */
export declare function register(containerId: string): void;
/**
 * Registers tab menus.
 */
export declare function registerTabMenus(): void;
/**
 * Rebuilds all menus, e.g. on window resize.
 */
export declare function rebuildAll(): void;
/**
 * Rebuild the menu identified by given element id.
 */
export declare function rebuild(containerId: string): void;
