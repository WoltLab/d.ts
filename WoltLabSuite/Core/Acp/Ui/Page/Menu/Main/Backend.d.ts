/**
 * Provides the menu items for the mobile main menu in the admin panel.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { MenuItem, PageMenuMainProvider } from "../../../../../Ui/Page/Menu/Main/Provider";
export declare class AcpUiPageMenuMainBackend implements PageMenuMainProvider {
    getMenuItems(_container: HTMLElement): MenuItem[];
}
export default AcpUiPageMenuMainBackend;
