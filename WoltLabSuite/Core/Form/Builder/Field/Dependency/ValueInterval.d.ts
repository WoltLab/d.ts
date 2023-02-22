/**
 * Form field dependency implementation that requires the value of a field to be in the interval
 * [minimum, maximum].
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Form/Builder/Field/Dependency/Abstract
 * @since 5.5
 */
import Abstract from "./Abstract";
export declare class ValueInterval extends Abstract {
    protected _maximum: number | null;
    protected _minimum: number | null;
    checkDependency(): boolean;
    /**
     * Sets the maximum value of the value interval or unsets the maximum value if `null` is given.
     */
    maximum(maximum: number | null): ValueInterval;
    /**
     * Sets the minimum value of the value interval or unsets the minimum value if `null` is given.
     */
    minimum(minimum: number | null): ValueInterval;
}
export default ValueInterval;
