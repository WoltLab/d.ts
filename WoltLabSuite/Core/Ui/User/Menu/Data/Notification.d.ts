/**
 * User menu for notifications.
 *
 * @author Alexander Ebert
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
type Options = {
    noItems: string;
    settingsLink: string;
    settingsTitle: string;
    showAllLink: string;
    showAllTitle: string;
    title: string;
};
export interface DesktopNotifications {
    getDesktopNotifications(): HTMLElement | null;
}
export declare function setup(options: Options): void;
export {};
