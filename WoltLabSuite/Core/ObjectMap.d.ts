/**
 * Simple `object` to `object` map using a WeakMap.
 *
 * If you're looking for a dictionary with string keys, please see `WoltLabSuite/Core/Dictionary`.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/** @deprecated 5.4 Use a `WeakMap` instead. */
declare class ObjectMap {
    private _map;
    /**
     * Sets a new key with given value, will overwrite an existing key.
     */
    set(key: object, value: object): void;
    /**
     * Removes a key from the map.
     */
    delete(key: object): void;
    /**
     * Returns true if dictionary contains a value for given key.
     */
    has(key: object): boolean;
    /**
     * Retrieves a value by key, returns undefined if there is no match.
     */
    get(key: object): object | undefined;
}
export = ObjectMap;
