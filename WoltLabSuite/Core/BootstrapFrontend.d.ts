/**
 * Bootstraps WCF's JavaScript with additions for the frontend usage.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { ShareProvider } from "./Ui/Message/Share/Providers";
interface BootstrapOptions {
    backgroundQueue: {
        url: string;
        force: boolean;
    };
    dynamicColorScheme: boolean;
    enableUserPopover: boolean;
    executeCronjobs: string | undefined;
    shareButtonProviders?: ShareProvider[];
    styleChanger: boolean;
}
/**
 * Bootstraps general modules and frontend exclusive ones.
 */
export declare function setup(options: BootstrapOptions): void;
export {};
