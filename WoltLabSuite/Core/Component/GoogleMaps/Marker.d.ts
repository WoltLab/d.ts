/**
 * Provides functions to add markers to a map.
 *
 * @author  Marcel Werk
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import WoltlabCoreGoogleMapsElement from "./woltlab-core-google-maps";
import "./woltlab-core-google-maps";
export declare function addMarker(element: WoltlabCoreGoogleMapsElement, latitude: number, longitude: number, title: string, focus?: boolean): Promise<void>;
export declare function addDraggableMarker(element: WoltlabCoreGoogleMapsElement): Promise<google.maps.Marker>;
export declare function addDraggableMarker(element: WoltlabCoreGoogleMapsElement, latitude: number, longitude: number): Promise<google.maps.Marker>;
