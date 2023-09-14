/**
 * Modifies the behavior of the 'Enter' key to submit the editor instead of
 * starting a new paragraph. 'Shift' + 'Enter' can be used to create a line
 * break.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
import type { CKEditor5 } from "@woltlab/editor";
import type { CKEditor } from "../Ckeditor";
export declare function setup(editor: CKEditor5.ClassicEditor.ClassicEditor, ckeditor: CKEditor): void;
