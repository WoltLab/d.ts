/**
 * Replaces a `<textarea>` with a code editor based on CodeMirror 6. The
 * textarea stays in the form and receives every change.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import { EditorView } from "@woltlab/codemirror";
export type CodeMirrorOptions = {
    language?: string;
    readOnly?: boolean;
};
export declare function setupCodeMirror(textarea: HTMLTextAreaElement, options?: CodeMirrorOptions): EditorView;
export declare function getCodeMirror(textarea: HTMLTextAreaElement): EditorView | undefined;
/**
 * Replaces the current selection, or inserts at the cursor position.
 */
export declare function insertText(textarea: HTMLTextAreaElement, text: string): void;
