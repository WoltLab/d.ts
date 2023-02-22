/**
 * Manages spoilers.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { DialogCallbackObject, DialogCallbackSetup } from "../Dialog/Data";
import { RedactorEditor, WoltLabEventData } from "./Editor";
declare class UiRedactorSpoiler implements DialogCallbackObject {
    protected readonly _editor: RedactorEditor;
    protected readonly _elementId: string;
    protected _spoiler: HTMLElement | null;
    private readonly knownElements;
    /**
     * Initializes the spoiler management.
     */
    constructor(editor: RedactorEditor);
    /**
     * Intercepts the insertion of `[spoiler]` tags and uses
     * the custom `<woltlab-spoiler>` element instead.
     */
    protected _bbcodeSpoiler(data: WoltLabEventData): void;
    /**
     * Binds event listeners and sets quote title on both editor
     * initialization and when switching back from code view.
     */
    protected _observeLoad(): void;
    /**
     * Opens the dialog overlay to edit the spoiler's properties.
     */
    protected _edit(event: MouseEvent): void;
    /**
     * Saves the changes to the spoiler's properties.
     *
     * @protected
     */
    _dialogSubmit(): void;
    /**
     * Sets or updates the spoiler's header title.
     */
    protected _setTitle(spoiler: HTMLElement): void;
    protected _delete(event: MouseEvent): void;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = UiRedactorSpoiler;
