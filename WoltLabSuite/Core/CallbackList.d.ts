/**
 * Simple API to store and invoke multiple callbacks per identifier.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare class CallbackList {
    private readonly _callbacks;
    /**
     * Adds a callback for given identifier.
     */
    add(identifier: string, callback: Callback): void;
    /**
     * Removes all callbacks registered for given identifier
     */
    remove(identifier: string): void;
    /**
     * Invokes callback function on each registered callback.
     */
    forEach(identifier: string | null, callback: (cb: Callback) => unknown): void;
}
type Callback = (...args: any[]) => void;
export = CallbackList;
