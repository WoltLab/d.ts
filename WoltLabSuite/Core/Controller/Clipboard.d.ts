/**
 * Clipboard API Handler.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { ClipboardOptions } from "./Clipboard/Data";
/**
 * Initializes the clipboard API handler.
 */
export declare function setup(options: ClipboardOptions): void;
/**
 * Reloads the clipboard data.
 */
export declare function reload(): void;
/**
 * Hides the clipboard editor for the given object type.
 */
export declare function hideEditor(objectType: string): void;
/**
 * Shows the clipboard editor.
 */
export declare function showEditor(): void;
/**
 * Unmarks the objects with given clipboard object type and ids.
 */
export declare function unmark(objectType: string, objectIds: number[]): void;
