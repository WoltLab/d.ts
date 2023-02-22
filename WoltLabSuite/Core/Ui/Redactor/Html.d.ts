/**
 * Manages html code blocks.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { RedactorEditor } from "./Editor";
declare class UiRedactorHtml {
    protected readonly _editor: RedactorEditor;
    protected readonly _elementId: string;
    protected _pre: HTMLElement | null;
    /**
     * Initializes the source code management.
     */
    constructor(editor: RedactorEditor);
    /**
     * Intercepts the insertion of `[woltlabHtml]` tags and uses a native `<pre>` instead.
     */
    protected _bbcodeCode(data: {
        cancel: boolean;
    }): void;
    /**
     * Binds event listeners and sets quote title on both editor
     * initialization and when switching back from code view.
     */
    protected _observeLoad(): void;
    /**
     * Sets or updates the code's header title.
     */
    protected _setTitle(pre: HTMLElement): void;
}
export = UiRedactorHtml;
