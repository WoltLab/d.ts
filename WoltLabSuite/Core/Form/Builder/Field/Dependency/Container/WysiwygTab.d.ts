/**
 * Container visibility handler implementation for a wysiwyg tab menu tab that, in addition to the
 * tab itself, also handles the visibility of the tab menu list item.
 *
 * @author  Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
import Abstract from "./Abstract";
export declare class WysiwygTab extends Abstract {
    #private;
    constructor(containerId: string, tabName: string, wysiwygId: string);
    checkContainer(): void;
}
