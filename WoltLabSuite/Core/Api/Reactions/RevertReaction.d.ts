/**
 * Reverts a reaction on an object.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
type Response = {
    reactions: Record<number, number>;
};
export declare function revertReaction(objectType: string, objectID: number): Promise<Response>;
export {};
