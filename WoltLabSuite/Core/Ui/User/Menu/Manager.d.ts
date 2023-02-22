/**
 * Controls the behavior of the user menus.
 *
 * @author Alexander Ebert
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { UserMenuProvider } from "./Data/Provider";
export declare function getUserMenuProviders(): ReadonlySet<UserMenuProvider>;
export declare function getContainer(): HTMLElement;
export declare function registerProvider(provider: UserMenuProvider): void;
