/**
 * Provides a strongly typed event interface for CKEditor on top of native DOM
 * events to prevent memory leaks.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import type { CKEditor } from "../Ckeditor";
import type { Features } from "./Configuration";
import type { InsertAttachmentPayload, RemoveAttachmentPayload, UploadAttachmentEventPayload } from "./Attachment";
import type { UploadMediaEventPayload } from "./Media";
import type { InsertQuoteEventPayload } from "./Quote";
import type { AutosavePayload } from "./Autosave";
import type { CKEditor5 } from "@woltlab/editor";
type BbcodeEventPayload = {
    bbcode: string;
};
type CollectMetaDataEventPayload = {
    metaData: Record<string, unknown>;
};
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
    configuration: CKEditor5.Core.EditorConfig;
    features: Features;
    modules: typeof CKEditor5;
};
type SubmitOnEnterPayload = {
    ckeditor: CKEditor;
    html: string;
};
declare class EventDispatcher {
    #private;
    constructor(element: HTMLElement);
    collectMetaData(payload: CollectMetaDataEventPayload): void;
    changeData(): void;
    destroy(): void;
    discardRecoveredData(): void;
    autosave(payload: AutosavePayload): void;
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
    bbcode(callback: (payload: BbcodeEventPayload) => boolean): this;
    changeData(callback: () => void): this;
    collectMetaData(callback: (payload: CollectMetaDataEventPayload) => void): this;
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
    autosave(callback: (payload: AutosavePayload) => void): this;
}
export declare function dispatchToCkeditor(element: HTMLElement): EventDispatcher;
export declare function listenToCkeditor(element: HTMLElement): EventListener;
export {};
