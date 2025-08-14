/**
 * Reverts a version tracker object to a previous version.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
export declare function revertVersion(objectType: string, objectId: number, versionId: number): Promise<[]>;
