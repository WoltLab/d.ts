import type WoltlabCoreFileElement from "../File/woltlab-core-file";
export type FileProcessorData = {
    attachmentID: number;
    messageObjectID: number | null;
};
export declare function createAttachmentFromFile(file: WoltlabCoreFileElement, editor: HTMLElement): HTMLLIElement;
