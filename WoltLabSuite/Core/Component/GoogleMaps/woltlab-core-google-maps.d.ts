/**
 * The `<woltlab-core-google-maps>` element creates a map via Google Maps.
 *
 * @author Marcel Werk
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
/// <reference types="google.maps" />
type Bounds = {
    southWest: {
        latitude: number;
        longitude: number;
    };
    northEast: {
        latitude: number;
        longitude: number;
    };
};
export declare class WoltlabCoreGoogleMapsElement extends HTMLElement {
    #private;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    static get observedAttributes(): string[];
    get apiKey(): string;
    getMap(): Promise<google.maps.Map>;
    get lat(): number;
    get lng(): number;
    get zoom(): number;
    get bounds(): Bounds | null;
    getGeocoder(): Promise<google.maps.Geocoder>;
}
export default WoltlabCoreGoogleMapsElement;
