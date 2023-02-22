/**
 * Manages code blocks.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { DialogCallbackObject, DialogCallbackSetup } from "../Dialog/Data";
import { RedactorEditor, WoltLabEventData } from "./Editor";
declare class UiRedactorCode implements DialogCallbackObject {
    protected readonly _callbackEdit: (ev: MouseEvent) => void;
    protected readonly _editor: RedactorEditor;
    protected readonly _elementId: string;
    protected _pre: HTMLElement | null;
    private readonly knownElements;
    /**
     * Initializes the source code management.
     */
    constructor(editor: RedactorEditor);
    /**
     * Intercepts the insertion of `[code]` tags and uses a native `<pre>` instead.
     */
    protected _bbcodeCode(data: WoltLabEventData): void;
    /**
     * Binds event listeners and sets quote title on both editor
     * initialization and when switching back from code view.
     */
    protected _observeLoad(): void;
    /**
     * Opens the dialog overlay to edit the code's properties.
     */
    protected _edit(event: MouseEvent): void;
    /**
     * Saves the changes to the code's properties.
     */
    _dialogSubmit(): void;
    /**
     * Sets or updates the code's header title.
     */
    protected _setTitle(pre: HTMLElement): void;
    protected _delete(event: MouseEvent): void;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = UiRedactorCode;
