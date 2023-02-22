/**
 * Utility class to provide a 'Jump To' overlay.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Initializes a 'Jump To' element.
 */
export declare function init(element: HTMLElement, callback?: Callback | null): void;
type Callback = (pageNo: number) => void;
export {};
