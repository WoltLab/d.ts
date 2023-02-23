type AttachmentData = {
    attachmentId: number;
    url: string;
};
export type UploadAttachmentEventPayload = {
    abortController?: AbortController;
    file: File;
    promise?: Promise<AttachmentData>;
};
export type InsertAttachmentPayload = {
    attachmentId: number;
    url: string;
};
export type RemoveAttachmentPayload = {
    attachmentId: number;
};
export declare function setup(element: HTMLElement): void;
export {};
