/**
 * Handles a user ban.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
type Callback = () => void;
export declare class BanHandler {
    private userIDs;
    constructor(userIDs: number[]);
    ban(callback: Callback): void;
    unban(callback: Callback): void;
}
export default BanHandler;
