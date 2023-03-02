/**
 * The web component `<woltlab-core-dialog>` represents a
 * modal dialog with a unified event access for consistent
 * interactions. This is the low-level API of dialogs, you
 * should use the `dialogFactory()` to create them.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
type ValidateCallback = Promise<boolean>;
interface WoltlabCoreDialogEventMap {
    afterClose: CustomEvent;
    backdrop: CustomEvent;
    cancel: CustomEvent;
    close: CustomEvent;
    extra: CustomEvent;
    primary: CustomEvent;
    validate: CustomEvent<ValidateCallback[]>;
}
export type WoltlabCoreDialogControlOptions = {
    cancel: string | undefined;
    extra: string | undefined;
    isAlert: boolean;
    primary: string;
};
export declare class WoltlabCoreDialogElement extends HTMLElement {
    #private;
    constructor();
    show(title: string): void;
    close(): void;
    get dialog(): HTMLDialogElement;
    get content(): HTMLElement;
    get open(): boolean;
    get incomplete(): boolean;
    set incomplete(incomplete: boolean);
    attachControls(options: WoltlabCoreDialogControlOptions): void;
    connectedCallback(): void;
}
export interface WoltlabCoreDialogElement extends HTMLElement {
    addEventListener: {
        <T extends keyof WoltlabCoreDialogEventMap>(type: T, listener: (this: WoltlabCoreDialogElement, ev: WoltlabCoreDialogEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
    } & HTMLElement["addEventListener"];
}
export default WoltlabCoreDialogElement;
