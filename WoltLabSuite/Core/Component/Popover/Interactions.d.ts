/**
 * Handles the interactions of the context menu inside a popover. The dropdown
 * menu is moved into the global container, the clicks on the interactions are
 * therefore forwarded to the popover content that serves as the container.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
export declare function setup(container: HTMLElement, popoverIdentifier: string, objectId: number, providerClassName: string): void;
