/**
 * Periodically stores the editor contents to the local storage. Opening the
 * same view again offers to restore the stored contents.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
import type { CKEditor5 } from "@woltlab/editor";
export type AutosavePayload = {
    html: string;
    timestamp: number;
};
export declare function deleteDraft(identifier: string): void;
export declare function setupRestoreDraft(editor: CKEditor5.ClassicEditor.ClassicEditor, identifier: string): void;
export declare function initializeAutosave(element: HTMLElement, configuration: CKEditor5.Core.EditorConfig, identifier: string): void;
