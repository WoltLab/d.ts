/**
 * Form field dependency implementation that requires the value of a field not to be empty.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Form/Builder/Field/Dependency/Abstract
 * @since 5.2
 */
import Abstract from "./Abstract";
declare class NonEmpty extends Abstract {
    checkDependency(): boolean;
}
export = NonEmpty;
