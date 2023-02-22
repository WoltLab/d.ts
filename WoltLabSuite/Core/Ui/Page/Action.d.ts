/**
 * Provides page actions such as "jump to top" and clipboard actions.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2020 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Initializes the page action container.
 */
export declare function setup(): void;
/**
 * Adds a button to the page action list. You can optionally provide a button name to
 * insert the button right before it. Unmatched button names or empty value will cause
 * the button to be prepended to the list.
 */
export declare function add(buttonName: string, button: HTMLElement, insertBeforeButton?: string): void;
/**
 * Returns true if there is a registered button with the provided name.
 */
export declare function has(buttonName: string): boolean;
/**
 * Returns the stored button by name or undefined.
 */
export declare function get(buttonName: string): HTMLElement | undefined;
/**
 * Removes a button by its button name.
 */
export declare function remove(buttonName: string): void;
/**
 * Hides a button by its button name.
 */
export declare function hide(buttonName: string): void;
/**
 * Shows a button by its button name.
 */
export declare function show(buttonName: string): void;
