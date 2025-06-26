/**
 * Data handler for a Google Maps form builder field in an Ajax form.
 *
 * @author    Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.2
 */
import { FormBuilderData } from "../Data";
import Value from "./Value";
declare class GoogleMaps extends Value {
    protected _getData(): FormBuilderData;
}
export = GoogleMaps;
