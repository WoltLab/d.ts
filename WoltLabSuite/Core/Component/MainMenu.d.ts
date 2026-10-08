/**
 * Submenus and the overflow ("priority+") of the main menu rendered by `system_pageHeaderMenu`.
 *
 * Submenus are opened through the `aria-expanded` state of their toggle button. On desktop
 * they also open on hover intent, items that do not fit into the bar are moved into the
 * trailing overflow item, except for the item of the current page.
 *
 * @author    Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.3
 */
export declare function setup(): void;
