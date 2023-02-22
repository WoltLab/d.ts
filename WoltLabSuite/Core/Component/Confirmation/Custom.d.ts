/**
 * Helper module to expose a fluent API for custom
 * prompts created through `notificationFactory()`.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import WoltlabCoreDialogElement from "../../Element/woltlab-core-dialog";
type CallbackWithFormElements = (dialog: WoltlabCoreDialogElement) => void;
type ResultWithFormElements = {
    result: boolean;
    dialog: WoltlabCoreDialogElement;
};
export declare class ConfirmationCustom {
    #private;
    constructor(question: string);
    message(message: string): Promise<boolean>;
    withFormElements(callback: CallbackWithFormElements): Promise<ResultWithFormElements>;
    withoutMessage(): Promise<boolean>;
}
export {};
