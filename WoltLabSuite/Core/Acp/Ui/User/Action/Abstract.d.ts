/**
 * An abstract action, to handle user actions.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
export declare abstract class AbstractUserAction {
    protected readonly button: HTMLElement;
    protected readonly userDataElement: HTMLElement;
    protected readonly userId: number;
    constructor(button: HTMLElement, userId: number, userDataElement: HTMLElement);
}
export default AbstractUserAction;
