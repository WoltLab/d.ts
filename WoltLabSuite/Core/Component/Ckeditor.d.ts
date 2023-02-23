import { Features } from "./Ckeditor/Configuration";
import type ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import "ckeditor5-bundle";
declare class Ckeditor {
    #private;
    constructor(editor: ClassicEditor, features: Features);
    destroy(): Promise<void>;
    discardDraft(): void;
    focus(): void;
    getHtml(): string;
    insertHtml(html: string): void;
    insertText(text: string): void;
    isVisible(): boolean;
    setHtml(html: string): void;
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
export declare function setupCkeditor(element: HTMLElement, features: Features, bbcodes: WoltlabBbcodeItem[]): Promise<CKEditor>;
export declare function getCkeditor(element: HTMLElement): CKEditor | undefined;
export declare function getCkeditorById(id: string): Ckeditor | undefined;
export type CKEditor = InstanceType<typeof Ckeditor>;
export {};
