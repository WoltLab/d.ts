/**
 * Bootstraps WCF's JavaScript with additions for the ACP usage.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { BoostrapOptions } from "../Bootstrap";
interface AcpBootstrapOptions {
    bootstrap: BoostrapOptions;
}
/**
 * Bootstraps general modules and frontend exclusive ones.
 *
 * @param  {Object=}  options    bootstrap options
 */
export declare function setup(options: AcpBootstrapOptions): void;
export {};
