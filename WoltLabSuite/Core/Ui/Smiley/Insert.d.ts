/**
 * Inserts smilies into a WYSIWYG editor instance, with WAI-ARIA keyboard support.
 *
 * @author      Alexander Ebert
 * @copyright   2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
declare class UiSmileyInsert {
    private readonly container;
    private readonly editorId;
    constructor(editorId: string);
    keydown(event: KeyboardEvent): void;
    mousedown(event: MouseEvent): void;
    insert(img: HTMLImageElement): void;
}
export = UiSmileyInsert;
