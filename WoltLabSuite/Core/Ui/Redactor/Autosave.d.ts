/**
 * Manages the autosave process storing the current editor message in the local
 * storage to recover it on browser crash or accidental navigation.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { RedactorEditor } from "./Editor";
interface AutosaveMetaData {
    [key: string]: unknown;
}
declare class UiRedactorAutosave {
    protected _container: HTMLElement | null;
    protected _editor: RedactorEditor | null;
    protected readonly _element: HTMLTextAreaElement;
    protected _isActive: boolean;
    protected _isPending: boolean;
    protected readonly _key: string;
    protected _lastMessage: string;
    protected _metaData: AutosaveMetaData;
    protected _originalMessage: string;
    protected _restored: boolean;
    protected _timer: number | null;
    /**
     * Initializes the autosave handler and removes outdated messages from storage.
     *
     * @param       {Element}       element         textarea element
     */
    constructor(element: HTMLTextAreaElement);
    protected _onVisibilityChange(): void;
    /**
     * Returns the initial value for the textarea, used to inject message
     * from storage into the editor before initialization.
     *
     * @return      {string}        message content
     */
    getInitialValue(): string;
    /**
     * Returns the stored meta data.
     */
    getMetaData(): AutosaveMetaData;
    /**
     * Enables periodical save of editor contents to local storage.
     */
    watch(editor: RedactorEditor): void;
    /**
     * Disables autosave handler, for use on editor destruction.
     */
    destroy(): void;
    /**
     * Removed the stored message, for use after a message has been submitted.
     */
    clear(): void;
    /**
     * Creates the autosave controls, used to keep or discard the restored draft.
     */
    createOverlay(): void;
    /**
     * Hides the autosave controls.
     */
    hideOverlay(): void;
    /**
     * Saves the current message to storage unless there was no change.
     */
    protected _saveToStorage(): void;
    /**
     * Removes stored messages older than one week.
     */
    protected _cleanup(): void;
}
export = UiRedactorAutosave;
