/**
 * Removes the subscription of the active user to a watchable object.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
export declare function unsubscribe(objectType: string, objectID: number): Promise<void>;
