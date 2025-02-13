/**
 * Provides desktop notifications via periodic polling with an
 * increasing request delay on inactivity.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
interface NotificationHandlerOptions {
    icon: string;
}
/**
 * Initializes the desktop notification system.
 */
export declare function setup(options: NotificationHandlerOptions): void;
export declare function enableNotifications(): void;
export declare function poll(): void;
export {};
