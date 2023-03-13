import type { CKEditor } from "../Ckeditor";
import type { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
import type { Features } from "./Configuration";
import type { InsertAttachmentPayload, RemoveAttachmentPayload, UploadAttachmentEventPayload } from "./Attachment";
import type { UploadMediaEventPayload } from "./Media";
import type { InsertQuoteEventPayload } from "./Quote";
type ReadyEventPayload = {
    ckeditor: CKEditor;
};
type ResetEventPayload = {
    ckeditor: CKEditor;
};
type SetupFeaturesEventPayload = {
    features: Features;
};
type SetupConfigurationEventPayload = {
    configuration: EditorConfig;
    features: Features;
};
type SubmitOnEnterPayload = {
    ckeditor: CKEditor;
    html: string;
};
declare class EventDispatcher {
    #private;
    constructor(element: HTMLElement);
    destroy(): void;
    discardRecoveredData(): void;
    insertAttachment(payload: InsertAttachmentPayload): void;
    insertQuote(payload: InsertQuoteEventPayload): void;
    ready(payload: ReadyEventPayload): void;
    removeAttachment(payload: RemoveAttachmentPayload): void;
    reset(payload: ResetEventPayload): void;
    setupConfiguration(payload: SetupConfigurationEventPayload): void;
    setupFeatures(payload: SetupFeaturesEventPayload): void;
    submitOnEnter(payload: SubmitOnEnterPayload): void;
    uploadAttachment(payload: UploadAttachmentEventPayload): void;
    uploadMedia(payload: UploadMediaEventPayload): void;
}
declare class EventListener {
    #private;
    constructor(element: HTMLElement);
    destroy(callback: () => void): this;
    discardRecoveredData(callback: () => void): this;
    insertAttachment(callback: (payload: InsertAttachmentPayload) => void): this;
    insertQuote(callback: (payload: InsertQuoteEventPayload) => void): this;
    ready(callback: (payload: ReadyEventPayload) => void): this;
    removeAttachment(callback: (payload: RemoveAttachmentPayload) => void): this;
    reset(callback: (payload: ResetEventPayload) => void): this;
    setupConfiguration(callback: (payload: SetupConfigurationEventPayload) => void): this;
    setupFeatures(callback: (payload: SetupFeaturesEventPayload) => void): this;
    submitOnEnter(callback: (payload: SubmitOnEnterPayload) => void): this;
    uploadAttachment(callback: (payload: UploadAttachmentEventPayload) => void): this;
    uploadMedia(callback: (payload: UploadMediaEventPayload) => void): this;
}
export declare function dispatchToCkeditor(element: HTMLElement): EventDispatcher;
export declare function listenToCkeditor(element: HTMLElement): EventListener;
export {};
