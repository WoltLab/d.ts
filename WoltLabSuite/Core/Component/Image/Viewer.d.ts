/**
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { CarouselSlide, FancyboxInstance } from "@fancyapps/ui";
export declare function setup(): void;
export declare function setupLegacy(): void;
export declare function showFancybox(userSlides?: Array<CarouselSlide>): FancyboxInstance;
export declare function getLocalization(): Record<string, string>;
