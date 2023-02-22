/**
 * Helper class to deal with clickable block headers using the pseudo
 * `::before` element.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
/**
 * Returns the height within a click should be treated as a click
 * within the block element's title. This method expects that the
 * `::before` element is used and that removing the attribute
 * `data-title` does cause the title to collapse.
 */
export declare function getHeight(element: HTMLElement): number;
