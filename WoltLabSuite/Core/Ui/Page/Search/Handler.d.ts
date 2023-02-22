/**
 * Provides access to the lookup function of page handlers, allowing the user to search and
 * select page object ids.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
type CallbackSelect = (objectId: number) => void;
/**
 * Opens the lookup overlay for provided page id.
 */
export declare function open(pageId: number, title: string, callback: CallbackSelect, labelLanguageItem?: string): void;
export {};
