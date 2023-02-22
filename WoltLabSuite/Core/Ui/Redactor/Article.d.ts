/**
 * Converts `<woltlab-metacode>` into the bbcode representation.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { RedactorEditor } from "./Editor";
declare class UiRedactorArticle {
    protected readonly _editor: RedactorEditor;
    constructor(editor: RedactorEditor, button: HTMLAnchorElement);
    protected _click(event: MouseEvent): void;
    protected _insert(articleId: number): void;
}
export = UiRedactorArticle;
