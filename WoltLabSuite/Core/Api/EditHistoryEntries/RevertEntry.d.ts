/**
 * Reverts an object to the version stored in the given edit history entry.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
export declare function revertEntry(entryId: number): Promise<[]>;
