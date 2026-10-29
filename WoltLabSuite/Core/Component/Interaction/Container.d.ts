/**
 * Helper functions for containers that handle interactions.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
/**
 * Returns true if the element belongs to the interactions of the given
 * container rather than to a nested container that handles its own
 * interactions, such as an embedded poll widget.
 */
export declare function isOwnInteraction(container: HTMLElement, element: HTMLElement): boolean;
