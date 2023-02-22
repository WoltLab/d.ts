/**
 * Provides the confirmation dialog overlay.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @deprecated 6.0 Use `confirmationFactory()` instead.
 */
type LegacyResult = "cancel" | "confirm";
export type ConfirmationCallbackParameters = {
    [key: string]: any;
};
interface BasicConfirmationOptions {
    message: string;
    messageIsHtml?: boolean;
    parameters?: ConfirmationCallbackParameters;
    template?: string;
}
interface LegacyConfirmationOptions extends BasicConfirmationOptions {
    cancel?: never;
    confirm?: never;
    legacyCallback: (result: LegacyResult, parameters: ConfirmationCallbackParameters, element: HTMLElement) => void;
}
type CallbackCancel = (parameters: ConfirmationCallbackParameters) => void;
type CallbackConfirm = (parameters: ConfirmationCallbackParameters, content: HTMLElement) => void;
interface NewConfirmationOptions extends BasicConfirmationOptions {
    cancel?: CallbackCancel;
    confirm: CallbackConfirm;
    legacyCallback?: never;
}
export type ConfirmationOptions = LegacyConfirmationOptions | NewConfirmationOptions;
/**
 * Shows the confirmation dialog.
 * @deprecated 6.0 Use `confirmationFactory()` instead.
 */
export declare function show(options: ConfirmationOptions): void;
/**
 * Returns content container element.
 */
export declare function getContentElement(): HTMLElement;
export {};
