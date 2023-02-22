/**
 * Initializes modules required for media list view.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
interface MediaListOptions {
    categoryId?: number;
    hasMarkedItems?: boolean;
}
export declare function init(options: MediaListOptions): void;
export {};
