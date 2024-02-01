/**
 * Shared cache for popover instances serving the same selector.
 *
 * @author Alexander Ebert
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 */
type ObjectId = number;
export declare class SharedCache {
    #private;
    constructor(endpoint: string);
    get(objectId: ObjectId): Promise<string>;
    reset(objectId: ObjectId): void;
}
export default SharedCache;
