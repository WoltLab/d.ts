/**
 * Handles a user ban button.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
import AbstractUserAction from "./Abstract";
export declare class BanAction extends AbstractUserAction {
    private banHandler;
    constructor(button: HTMLElement, userId: number, userDataElement: HTMLElement);
}
export default BanAction;
