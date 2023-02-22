/**
 * Helper module to expose a fluent API to create
 * dialogs through `dialogFactory()`.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import WoltlabCoreDialogElement from "../../Element/woltlab-core-dialog";
type AlertOptions = {
    primary: string;
};
type ConfirmationOptions = {
    primary: string;
};
type PromptOptions = {
    extra: string;
    primary: string;
};
export declare class DialogControls {
    #private;
    constructor(dialog: WoltlabCoreDialogElement);
    asAlert(options?: Partial<AlertOptions>): WoltlabCoreDialogElement;
    asConfirmation(options?: Partial<ConfirmationOptions>): WoltlabCoreDialogElement;
    asPrompt(options?: Partial<PromptOptions>): WoltlabCoreDialogElement;
    withoutControls(): WoltlabCoreDialogElement;
}
export default DialogControls;
