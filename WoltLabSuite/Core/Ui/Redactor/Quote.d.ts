/**
 * Manages quotes.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { DialogCallbackSetup } from "../Dialog/Data";
import { RedactorEditor } from "./Editor";
interface QuoteData {
    author: string;
    content: string;
    isText: boolean;
    link: string;
}
declare class UiRedactorQuote {
    protected readonly _editor: RedactorEditor;
    protected readonly _elementId: string;
    protected readonly _knownElements: WeakSet<HTMLElement>;
    protected _quote: HTMLElement | null;
    /**
     * Initializes the quote management.
     */
    constructor(editor: RedactorEditor, button: JQuery);
    /**
     * Inserts a quote.
     */
    protected _insertQuote(data: QuoteData): void;
    /**
     * Toggles the quote block on button click.
     */
    protected _click(): void;
    /**
     * Binds event listeners and sets quote title on both editor
     * initialization and when switching back from code view.
     */
    protected _observeLoad(): void;
    /**
     * Opens the dialog overlay to edit the quote's properties.
     */
    protected _edit(event: MouseEvent): void;
    /**
     * Saves the changes to the quote's properties.
     *
     * @protected
     */
    _dialogSubmit(): void;
    /**
     * Sets or updates the quote's header title.
     */
    protected _setTitle(quote: HTMLElement): void;
    protected _delete(event: MouseEvent): void;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = UiRedactorQuote;
