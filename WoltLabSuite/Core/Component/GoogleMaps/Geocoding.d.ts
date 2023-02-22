/**
 * Provides geocoding functions for searching map locations.
 *
 * @author  Marcel Werk
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import "./woltlab-core-google-maps";
export type MoveMarkerEventPayload = {
    latitude: number;
    longitude: number;
};
export type ResolveEventPayload = {
    callback: (location: string) => void;
    latitude: number;
    longitude: number;
};
export declare function setup(): void;
