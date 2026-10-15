/**
 * Gets the html code for the rendering of the user profile header in the admin panel.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type Response = {
    template: string;
};
export declare function getAdminUserProfileHeader(userId: number): Promise<Response>;
export {};
