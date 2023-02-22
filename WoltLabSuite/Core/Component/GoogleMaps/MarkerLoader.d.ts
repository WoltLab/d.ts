/**
 * Handles a large map with many markers where (new) markers are loaded via AJAX.
 *
 * @author  Marcel Werk
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import WoltlabCoreGoogleMapsElement from "./woltlab-core-google-maps";
import "./woltlab-core-google-maps";
type AdditionalParameters = Record<string, unknown>;
export declare function setup(googleMaps: WoltlabCoreGoogleMapsElement, actionClassName: string, additionalParameters: AdditionalParameters): Promise<void>;
export {};
