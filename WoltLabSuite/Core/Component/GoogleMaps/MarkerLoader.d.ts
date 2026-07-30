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
/**
 * Loads the markers using the legacy `getMapMarkers` DBO action of the given class.
 *
 * @deprecated 6.3 use `setupWithEndpoint()` with a dedicated RPC endpoint instead
 */
export declare function setup(googleMaps: WoltlabCoreGoogleMapsElement, actionClassName: string, additionalParameters: AdditionalParameters): Promise<void>;
/**
 * Loads the markers using an RPC endpoint, e.g. `calendar/events/map-markers`.
 *
 * @since 6.3
 */
export declare function setupWithEndpoint(googleMaps: WoltlabCoreGoogleMapsElement, endpoint: string, additionalParameters?: AdditionalParameters): Promise<void>;
export {};
