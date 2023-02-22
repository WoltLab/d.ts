/**
 * Provides the menu items for the mobile main menu in the frontend.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { MenuItem, PageMenuMainProvider } from "./Provider";
export declare class UiPageMenuMainFrontend implements PageMenuMainProvider {
    getMenuItems(container: HTMLElement): MenuItem[];
}
export default UiPageMenuMainFrontend;
