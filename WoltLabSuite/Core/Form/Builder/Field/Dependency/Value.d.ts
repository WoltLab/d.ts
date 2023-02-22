/**
 * Form field dependency implementation that requires a field to have a certain value.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2019 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Form/Builder/Field/Dependency/Abstract
 * @since 5.2
 */
import Abstract from "./Abstract";
declare class Value extends Abstract {
    protected _isNegated: boolean;
    protected _values?: string[];
    checkDependency(): boolean;
    /**
     * Sets if the field value may not have any of the set values.
     */
    negate(negate: boolean): Value;
    /**
     * Sets the possible values the field may have for the dependency to be met.
     */
    values(values: string[]): Value;
}
export = Value;
