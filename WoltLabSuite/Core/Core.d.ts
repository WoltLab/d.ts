/**
 * Provides the basic core functionality.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Deep clones an object.
 */
export declare function clone(obj: object | any[]): object | any[];
/**
 * Converts WCF 2.0-style URLs into the default URL layout.
 */
export declare function convertLegacyUrl(url: string): string;
/**
 * Merges objects with the first argument.
 *
 * @param  {object}  out    destination object
 * @param  {...object}  args  variable number of objects to be merged into the destination object
 * @return  {object}  destination object with all provided objects merged into
 */
export declare function extend(out: object, ...args: object[]): object;
/**
 * Inherits the prototype methods from one constructor to another
 * constructor.
 *
 * Usage:
 *
 * function MyDerivedClass() {}
 * Core.inherit(MyDerivedClass, TheAwesomeBaseClass, {
 *      // regular prototype for `MyDerivedClass`
 *
 *      overwrittenMethodFromBaseClass: function(foo, bar) {
 *              // do stuff
 *
 *              // invoke parent
 *              MyDerivedClass._super.prototype.overwrittenMethodFromBaseClass.call(this, foo, bar);
 *      }
 * });
 *
 * @see  https://github.com/nodejs/node/blob/7d14dd9b5e78faabb95d454a79faa513d0bbc2a5/lib/util.js#L697-L735
 * @deprecated 5.4 Use the native `class` and `extends` keywords instead.
 */
export declare function inherit(constructor: new () => any, superConstructor: new () => any, propertiesObject: object): void;
/**
 * Returns true if `obj` is an object literal.
 */
export declare function isPlainObject(obj: unknown): boolean;
/**
 * Returns the object's class name.
 */
export declare function getType(obj: object): string;
/**
 * Returns a RFC4122 version 4 compilant UUID.
 *
 * @see    http://stackoverflow.com/a/2117523
 */
export declare function getUuid(): string;
/**
 * Recursively serializes an object into an encoded URI parameter string.
 */
export declare function serialize(obj: object, prefix?: string): string;
/**
 * Triggers a custom or built-in event.
 */
export declare function triggerEvent(element: EventTarget, eventName: string): void;
/**
 * Returns the unique prefix for the localStorage.
 */
export declare function getStoragePrefix(): string;
/**
 * Interprets a string value as a boolean value similar to the behavior of the
 * legacy functions `elAttrBool()` and `elDataBool()`.
 */
export declare function stringToBool(value: string | null): boolean;
type DebounceCallback = (...args: any[]) => void;
interface DebounceOptions {
    isImmediate: boolean;
}
/**
 * A function that emits a side effect and does not return anything.
 *
 * @see https://github.com/chodorowicz/ts-debounce/blob/62f30f2c3379b7b5e778fb1793e1fbfa17354894/src/index.ts
 */
export declare function debounce<F extends DebounceCallback>(func: F, waitMilliseconds?: number, options?: DebounceOptions): (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
/**
 * @deprecated 6.0
 */
export declare function enableLegacyInheritance<T>(legacyClass: T): void;
export declare function getXsrfToken(): string;
export {};
