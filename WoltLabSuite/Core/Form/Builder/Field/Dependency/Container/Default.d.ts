/**
 * Default implementation for a container visibility handler due to the dependencies of its
 * children that only considers the visibility of all of its children.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Form/Builder/Field/Dependency/Abstract
 * @since 5.2
 */
import Abstract from "./Abstract";
declare class Default extends Abstract {
    checkContainer(): void;
}
export = Default;
