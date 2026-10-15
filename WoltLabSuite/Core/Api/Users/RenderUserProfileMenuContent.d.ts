/**
 * Renders the content of a user profile menu item.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type Response = {
    template: string;
};
export declare function renderUserProfileMenuContent(userId: number, menuItem: string): Promise<Response>;
export {};
