/**
 * UI element that shows individual lines of text as distinct list items but saves them as line
 * break-separated text.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.4
 * @woltlabExcludeBundle tiny
 */
export interface LineBreakSeparatedTextOptions {
    submitFieldName?: string;
}
export declare class UiItemListLineBreakSeparatedText {
    protected addButton?: HTMLAnchorElement;
    protected clearButton?: HTMLAnchorElement;
    protected itemInput?: HTMLInputElement;
    protected readonly itemList: HTMLUListElement;
    protected readonly items: Set<string>;
    protected readonly mutationObserver: MutationObserver;
    protected readonly options: LineBreakSeparatedTextOptions;
    protected readonly submitField?: HTMLInputElement;
    protected uiDisabled: boolean;
    constructor(itemList: HTMLUListElement, options?: LineBreakSeparatedTextOptions);
    /**
     * Adds an item to the list after clicking on the "add" button.
     */
    protected addItem(event: Event): void;
    /**
     * Builds the user interface during setup.
     */
    protected buildUi(): void;
    /**
     * Clears the item list after clicking on the clear button.
     */
    protected clearList(event: Event): void;
    /**
     * Deletes an item from the list after clicking on its delete icon.
     */
    protected deleteItem(event: Event): void;
    /**
     * Disables the user interface after the input field has been set readonly.
     */
    protected disableUi(): void;
    /**
     * Enables the user interface after the input field is no longer readonly.
     */
    protected enableUi(): void;
    /**
     * Hides the item list and clear button.
     */
    protected hideList(): void;
    /**
     * Adds the initial values to the list.
     */
    protected initValues(): void;
    /**
     * Inserts the given item to the list.
     */
    protected insertItem(item: string): void;
    /**
     * Adds an item to the list when pressing "Enter" in the input field.
     */
    protected keydown(event: KeyboardEvent): void;
    /**
     * Adds multiple items at one to the list when pasting multiple lines of text into the input
     * field.
     */
    protected paste(event: ClipboardEvent): void;
    /**
     * Resets the input field.
     */
    protected resetInput(): void;
    /**
     * Shows the item list and clear button.
     */
    protected showList(): void;
    /**
     * Adds a hidden input field with the data to the form before it is submitted.
     */
    protected submit(): void;
}
export default UiItemListLineBreakSeparatedText;
