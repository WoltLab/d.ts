/**
 * Dictionary implementation relying on an object or if supported on a Map to hold key => value data.
 *
 * If you're looking for a dictionary with object keys, please see `WoltLabSuite/Core/ObjectMap`.
 *
 * This is a legacy implementation, that does not implement all methods of `Map`, furthermore it has
 * the side effect of converting all numeric keys to string values, treating 1 === "1".
 *
 * @author  Tim Duesterhus, Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/** @deprecated 5.4 Use a `Map` instead. */
declare class Dictionary<T> {
    private readonly _dictionary;
    /**
     * Sets a new key with given value, will overwrite an existing key.
     */
    set(key: number | string, value: T): void;
    /**
     * Removes a key from the dictionary.
     */
    delete(key: number | string): boolean;
    /**
     * Returns true if dictionary contains a value for given key and is not undefined.
     */
    has(key: number | string): boolean;
    /**
     * Retrieves a value by key, returns undefined if there is no match.
     */
    get(key: number | string): unknown;
    /**
     * Iterates over the dictionary keys and values, callback function should expect the
     * value as first parameter and the key name second.
     */
    forEach(callback: (value: T, key: number | string) => void): void;
    /**
     * Merges one or more Dictionary instances into this one.
     */
    merge(...dictionaries: Dictionary<T>[]): void;
    /**
     * Returns the object representation of the dictionary.
     */
    toObject(): object;
    /**
     * Creates a new Dictionary based on the given object.
     * All properties that are owned by the object will be added
     * as keys to the resulting Dictionary.
     */
    static fromObject(object: object): Dictionary<any>;
    get size(): number;
}
export = Dictionary;
