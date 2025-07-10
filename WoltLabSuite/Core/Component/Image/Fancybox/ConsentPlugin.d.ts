/**
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { FancyboxInstance } from "@fancyapps/ui";
export declare class ConsentPlugin {
    #private;
    constructor();
    init(api: FancyboxInstance): void;
    destroy(): void;
    private getConsentHTML;
}
