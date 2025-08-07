/**
 * Handles quotes selection in messages.
 *
 * @author Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
import { CKEditor } from "WoltLabSuite/Core/Component/Ckeditor";
export declare function registerContainer(containerSelector: string, messageBodySelector: string, objectType: string, className?: string): void;
export declare function setActiveEditor(editor?: CKEditor, supportDirectInsert?: boolean): void;
export declare function removeActiveEditor(editorSource: HTMLElement): void;
export declare function removeQuoteStatus(key: string): void;
