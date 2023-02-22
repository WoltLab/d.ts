/**
 * Modifies the interface to provide a better usability for mobile devices.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { PageMenuMainProvider } from "./Page/Menu/Main/Provider";
/**
 * Initializes the mobile UI.
 */
export declare function setup(enableMobileMenu: boolean, pageMenuMainProvider: PageMenuMainProvider): void;
/**
 * Enables the mobile UI.
 */
export declare function enable(): void;
/**
 * Enables shadow links for larger click areas on messages.
 */
export declare function enableShadow(): void;
/**
 * Disables the mobile UI.
 */
export declare function disable(): void;
/**
 * Disables shadow links.
 */
export declare function disableShadow(): void;
export declare function rebuildShadow(elements: HTMLElement[] | HTMLCollection, linkSelector: string): void;
export declare function removeShadow(elements: HTMLElement[] | HTMLCollection): void;
