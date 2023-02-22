/**
 * Handles a user delete button.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
import AbstractUserAction from "./Abstract";
export declare class DeleteAction extends AbstractUserAction {
    constructor(button: HTMLElement, userId: number, userDataElement: HTMLElement);
}
export default DeleteAction;
