/**
 * Gets the rendered widget of a standalone poll.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type Response = {
    template: string;
};
export declare function getWidget(pollId: number): Promise<Response>;
export {};
