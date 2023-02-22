/**
 * Map route planner based on Google Maps.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 * @deprecated 6.0 This feature is discontinued, opening Google Maps in a separate window already offers a route planer.
 */
/// <reference types="google.maps" />
import { DialogCallbackObject, DialogCallbackSetup } from "../../../Ui/Dialog/Data";
interface LocationData {
    label?: string;
    location: google.maps.LatLng;
}
declare class ControllerMapRoutePlanner implements DialogCallbackObject {
    private readonly button;
    private readonly destination;
    private didInitDialog;
    private directionsRenderer?;
    private directionsService?;
    private googleLink?;
    private lastOrigin?;
    private map?;
    private originInput?;
    private travelMode?;
    constructor(buttonId: string, destination: google.maps.LatLng);
    /**
     * Calculates the route based on the given result of a location search.
     */
    _calculateRoute(data: LocationData): void;
    /**
     * Returns the Google Maps link based on the given optional directions origin
     * and optional travel mode.
     */
    private getGoogleMapsLink;
    /**
     * Initializes the route planning dialog.
     */
    private initDialog;
    /**
     * Opens the route planning dialog.
     */
    private openDialog;
    /**
     * Handles the response of the direction service.
     */
    private setRoute;
    /**
     * Updates the route after the travel mode has been changed.
     */
    private updateRoute;
    /**
     * Sets up the route planner dialog.
     */
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = ControllerMapRoutePlanner;
