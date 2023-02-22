/**
 * Provides a utility class to issue JSONP requests.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
/**
 * Dispatch a JSONP request, the `url` must not contain a callback parameter.
 */
export declare function send(url: string, success: (...args: unknown[]) => void, failure: () => void, options?: JsonpOptions): void;
interface JsonpOptions {
    parameterName: string;
    timeout: number;
}
export {};
