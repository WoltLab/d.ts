/**
 * Gets the html code for the rendering of the detailed activity point list of a user.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type Response = {
    template: string;
};
export declare function getUserActivityPointList(userId: number): Promise<Response>;
export {};
