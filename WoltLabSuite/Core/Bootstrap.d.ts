/**
 * Bootstraps WCF's JavaScript.
 * It defines globals needed for backwards compatibility
 * and runs modules that are needed on page load.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { PageMenuMainProvider } from "./Ui/Page/Menu/Main/Provider";
import "perfect-scrollbar";
export interface BoostrapOptions {
    dynamicColorScheme: boolean;
    enableMobileMenu: boolean;
    pageMenuMainProvider: PageMenuMainProvider;
}
/**
 * Initializes the core UI modifications and unblocks jQuery's ready event.
 */
export declare function setup(options: BoostrapOptions): void;
