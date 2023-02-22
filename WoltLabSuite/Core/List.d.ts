/**
 * List implementation relying on an array or if supported on a Set to hold values.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/** @deprecated 5.4 Use a `Set` instead. */
declare class List<T = any> {
    private _set;
    /**
     * Appends an element to the list, silently rejects adding an already existing value.
     */
    add(value: T): void;
    /**
     * Removes all elements from the list.
     */
    clear(): void;
    /**
     * Removes an element from the list, returns true if the element was in the list.
     */
    delete(value: T): boolean;
    /**
     * Invokes the `callback` for each element in the list.
     */
    forEach(callback: (value: T) => void): void;
    /**
     * Returns true if the list contains the element.
     */
    has(value: T): boolean;
    get size(): number;
}
export = List;
