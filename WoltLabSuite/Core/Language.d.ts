/**
 * Manages language items.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
export declare function getPhrase(key: string, parameters?: object): string;
export declare function registerPhrase(key: string, value: string): void;
/**
 * @deprecated 6.0 Use `getPhrase()` instead
 */
export declare function get(key: string, parameters?: object): string;
/**
 * @deprecated 6.0 Use `registerPhrase()` instead
 */
export declare function add(key: string, value: string): void;
/**
 * @deprecated 6.0 Use `registerPhrase()` instead
 */
export declare function addObject(object: {
    [key: string]: string;
}): void;
