/**
 * Creates and handles the dialog to ban a user.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
import { DialogCallbackSetup } from "../../../../../../Ui/Dialog/Data";
type Callback = () => void;
export declare class BanDialog {
    private static instance;
    private banCallback;
    private userIDs;
    private submitElement;
    private neverExpiresCheckbox;
    private reasonInput;
    private userBanExpiresSettingsElement;
    private dialogContent;
    static open(userIDs: number[], callback: Callback): void;
    private openDialog;
    private setCallback;
    private setUserIDs;
    private banSubmit;
    private cleanupDialog;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export default BanDialog;
