/**
 * Manages user permissions.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Adds a single permission to the store.
 */
export declare function add(permission: string, value: boolean): void;
/**
 * Adds all the permissions in the given object to the store.
 */
export declare function addObject(object: PermissionObject): void;
/**
 * Returns the value of a permission.
 *
 * If the permission is unknown, false is returned.
 */
export declare function get(permission: string): boolean;
interface PermissionObject {
    [key: string]: boolean;
}
export {};
