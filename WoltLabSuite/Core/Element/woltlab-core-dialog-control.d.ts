/**
 * The web component `<woltlab-core-dialog-control>` adds
 * buttons to a dialog to allow for a consistent interaction
 * with dialogs in generals and dialogs containing forms in
 * particular. This is the low-level API, the controls are
 * automatically added through the `dialogFactory()`.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
interface WoltlabCoreDialogControlEventMap {
    cancel: CustomEvent;
    extra: CustomEvent;
}
export declare class WoltlabCoreDialogControlElement extends HTMLElement {
    #private;
    set primary(primary: string);
    get primary(): string;
    set cancel(cancel: string | undefined);
    get cancel(): string | undefined;
    set extra(extra: string | undefined);
    get extra(): string | undefined;
    connectedCallback(): void;
    addEventListener<T extends keyof WoltlabCoreDialogControlEventMap>(type: T, listener: (this: WoltlabCoreDialogControlElement, ev: WoltlabCoreDialogControlEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
}
export default WoltlabCoreDialogControlElement;
