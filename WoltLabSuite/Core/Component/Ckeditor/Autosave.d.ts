/**
 * Periodically stores the editor contents to the local storage. Opening the
 * same view again offers to restore the stored contents.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import type { ClassicEditor, EditorConfig } from "./Types";
export declare function deleteDraft(identifier: string): void;
export declare function setupRestoreDraft(editor: ClassicEditor, identifier: string): void;
export declare function initializeAutosave(autosave: string, configuration: EditorConfig): void;
