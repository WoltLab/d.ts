/**
 * Wrapper around the web browser's various clipboard APIs.
 *
 * @author	Tim Duesterhus
 * @copyright	2001-2020 WoltLab GmbH
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
export declare function copyTextToClipboard(text: string): Promise<void>;
export declare function copyElementTextToClipboard(element: HTMLElement): Promise<void>;
