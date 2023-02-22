/**
 * Provides helper functions to sort boxes per page.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
interface BoxData {
    boxId: number;
    isDisabled: boolean;
    name: string;
}
/**
 * Initializes the sorting capabilities.
 */
export declare function init(pageId: number, boxes: Map<string, BoxData[]>): void;
export {};
