/**
 * Handles a send new password action.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
interface AjaxResponse {
    loopCount: number;
    parameters: ArbitraryObject;
    proceedURL: string;
    progress: number;
    template?: string;
}
type CallbackSuccess = (data: AjaxResponse) => void;
export declare class SendNewPassword {
    private userIDs;
    private successCallback;
    constructor(userIDs: number[], successCallback: CallbackSuccess | null);
    send(): void;
}
export default SendNewPassword;
