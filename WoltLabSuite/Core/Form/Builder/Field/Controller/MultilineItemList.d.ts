/**
 * Handles the JavaScript part of a multiline item list form field.
 *
 * @author      Olaf Braun
 * @copyright   2001-2024 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       6.0
 */
import * as UiItemList from "WoltLabSuite/Core/Ui/ItemList/LineBreakSeparatedText";
export declare class MultilineItemListFormField extends UiItemList.UiItemListLineBreakSeparatedText {
    /**
     @inheritDoc
     */
    constructor(itemList: HTMLUListElement, options: UiItemList.LineBreakSeparatedTextOptions);
    getItems(): Set<string>;
    /**
     * @inheritDoc
     */
    protected initValues(): void;
    /**
     * Begin the editing of an item.
     */
    protected editItem(event: Event): void;
    /**
     * @inheritDoc
     */
    protected insertItem(item: string): void;
    /**
     * @inheritDoc
     */
    protected submit(): void;
}
export declare function getValues(elementId: string): Set<string>;
