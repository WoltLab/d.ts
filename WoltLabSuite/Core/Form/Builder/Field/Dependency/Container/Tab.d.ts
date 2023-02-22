/**
 * Container visibility handler implementation for a tab menu tab that, in addition to the
 * tab itself, also handles the visibility of the tab menu list item.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Form/Builder/Field/Dependency/Abstract
 * @since 5.2
 */
import Abstract from "./Abstract";
declare class Tab extends Abstract {
    checkContainer(): void;
}
export = Tab;
