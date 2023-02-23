import type ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import type { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
export declare function deleteDraft(identifier: string): void;
export declare function setupRestoreDraft(editor: ClassicEditor, identifier: string): void;
export declare function initializeAutosave(autosave: string, configuration: EditorConfig): void;
