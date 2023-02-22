/**
 * Simple interface to work with reusable dropdowns that are not bound to a specific item.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { NotificationCallback } from "./Data";
/**
 * Initializes a new reusable dropdown.
 */
export declare function init(identifier: string, menu: HTMLElement): void;
/**
 * Returns the dropdown menu element.
 */
export declare function getDropdownMenu(identifier: string): HTMLElement;
/**
 * Registers a callback invoked upon open and close.
 */
export declare function registerCallback(identifier: string, callback: NotificationCallback): void;
/**
 * Toggles a dropdown.
 */
export declare function toggleDropdown(identifier: string, referenceElement: HTMLElement): void;
