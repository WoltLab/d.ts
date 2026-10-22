/**
 * Tests a user notification event by rendering all possible notifications.
 *
 * @author    Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.3
 * @woltlabExcludeBundle all
 */
type Response = {
    template: string;
};
export declare function testNotificationEvent(eventId: number): Promise<Response>;
export {};
