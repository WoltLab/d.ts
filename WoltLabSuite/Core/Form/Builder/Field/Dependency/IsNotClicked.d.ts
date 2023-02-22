/**
 * Form field dependency implementation that requires that a button has not been clicked.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Form/Builder/Field/Dependency/Abstract
 * @since 5.4
 */
import Abstract from "./Abstract";
export declare class IsNotClicked extends Abstract {
    constructor(dependentElementId: string, fieldId: string);
    checkDependency(): boolean;
}
export default IsNotClicked;
