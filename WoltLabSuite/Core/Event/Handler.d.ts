/**
 * Versatile event system similar to the WCF-PHP counter part.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type Identifier = string;
type Action = string;
type Uuid = string;
/**
 * Registers an event listener.
 */
export declare function add(identifier: Identifier, action: Action, callback: Callback): Uuid;
/**
 * Fires an event and notifies all listeners.
 */
export declare function fire(identifier: Identifier, action: Action, data?: object): void;
/**
 * Removes an event listener, requires the uuid returned by add().
 */
export declare function remove(identifier: Identifier, action: Action, uuid: Uuid): void;
/**
 * Removes all event listeners for given action. Omitting the second parameter will
 * remove all listeners for this identifier.
 */
export declare function removeAll(identifier: Identifier, action?: Action): void;
/**
 * Removes all listeners registered for an identifier and ending with a special suffix.
 * This is commonly used to unbound event handlers for the editor.
 */
export declare function removeAllBySuffix(identifier: Identifier, suffix: string): void;
type Callback = (...args: any[]) => void;
export {};
