/**
 * The userland API for interactions with a CKEditor instance.
 *
 * The purpose of this implementation is to provide a stable and strongly typed
 * API that can be reused in components. Access to the raw API of CKEditor is
 * not exposed, if you feel that you need additional helper methods then please
 * submit an issue.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
import type { CKEditor5 } from "@woltlab/editor";
import { Features } from "./Ckeditor/Configuration";
declare class Ckeditor {
    #private;
    constructor(editor: CKEditor5.ClassicEditor.ClassicEditor, features: Features);
    destroy(): Promise<void>;
    discardDraft(): void;
    focus(): void;
    getHtml(): string;
    insertHtml(html: string): void;
    insertText(text: string): void;
    isVisible(): boolean;
    setHtml(html: string, focusEditor?: boolean): void;
    removeAll(model: string, attributes: Record<string, string | number | boolean>): void;
    reset(): void;
    get element(): HTMLElement;
    get features(): Features;
    get sourceElement(): HTMLElement;
}
type WoltlabBbcodeItem = {
    icon: string;
    name: string;
    label: string;
};
export declare function setupCkeditor(element: HTMLElement, features: Features, bbcodes: WoltlabBbcodeItem[], codeBlockLanguages: CKEditor5.CodeBlock.CodeBlockConfig["languages"], licenseKey: string): Promise<CKEditor>;
export declare function getCkeditor(element: HTMLElement): CKEditor | undefined;
export declare function getCkeditorById(id: string, throwIfNotExists?: boolean): Ckeditor | undefined;
export type CKEditor = InstanceType<typeof Ckeditor>;
export {};
