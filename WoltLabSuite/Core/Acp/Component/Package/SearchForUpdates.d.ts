/**
 * Handles the button to search for package updates.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import { Response as ResponseSearchForUpdates } from "WoltLabSuite/Core/Api/Packages/Updates/SearchForUpdates";
declare global {
    interface Window {
        _trackSearchForUpdates?: (data: {
            returnValues: ResponseSearchForUpdates;
        }) => void;
    }
}
export declare function setup(button: HTMLButtonElement): void;
