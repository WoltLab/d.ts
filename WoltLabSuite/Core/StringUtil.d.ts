/**
 * Provides helper functions for String handling.
 *
 * @author  Tim Duesterhus, Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Adds thousands separators to a given number.
 *
 * @deprecated 6.0 Use `formatNumeric()` instead.
 */
export declare function addThousandsSeparator(number: number): string;
/**
 * Escapes special HTML-characters within a string
 */
export declare function escapeHTML(string: string): string;
/**
 * Escapes a String to work with RegExp.
 *
 * @see    https://github.com/sstephenson/prototype/blob/master/src/prototype/lang/regexp.js#L25
 */
export declare function escapeRegExp(string: string): string;
/**
 * Rounds number to given count of floating point digits, localizes decimal-point and inserts thousands separators.
 */
export declare function formatNumeric(number: number, decimalPlaces?: number): string;
/**
 * Makes a string's first character lowercase.
 */
export declare function lcfirst(string: string): string;
/**
 * Makes a string's first character uppercase.
 */
export declare function ucfirst(string: string): string;
/**
 * Unescapes special HTML-characters within a string.
 */
export declare function unescapeHTML(string: string): string;
/**
 * Shortens numbers larger than 1000 by using unit suffixes.
 */
export declare function shortUnit(number: number): string;
/**
 * Converts a lower-case string containing dashed to camelCase for use
 * with the `dataset` property.
 */
export declare function toCamelCase(value: string): string;
