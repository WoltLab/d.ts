/**
 * Container visibility handler implementation for a tab menu that checks visibility
 * based on the visibility of its tab menu list items.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Form/Builder/Field/Dependency/Abstract
 * @since	5.2
 */
import Abstract from "./Abstract";
declare class TabMenu extends Abstract {
    checkContainer(): void;
}
export = TabMenu;
