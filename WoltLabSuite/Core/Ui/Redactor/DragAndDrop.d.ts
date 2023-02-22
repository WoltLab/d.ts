/**
 * Drag and Drop file uploads.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { RedactorEditor } from "./Editor";
/**
 * Initializes drag and drop support for provided editor instance.
 */
export declare function init(editor: RedactorEditor | RedactorEditorLike): void;
export interface RedactorEditorLike {
    uuid: string;
    $editor: HTMLElement[];
    $element: HTMLElement[];
}
export interface OnDropPayload {
    file: File;
}
export interface OnGlobalDropPayload {
    cancelDrop: boolean;
    event: DragEvent;
}
