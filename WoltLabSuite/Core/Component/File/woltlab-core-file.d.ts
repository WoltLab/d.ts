import type { ApiError } from "WoltLabSuite/Core/Api/Error";
export type ThumbnailData = {
    identifier: string;
    link: string;
};
export declare class Thumbnail {
    #private;
    constructor(identifier: string, link: string);
    get identifier(): string;
    get link(): string;
}
export declare class WoltlabCoreFileElement extends HTMLElement {
    #private;
    constructor();
    connectedCallback(): void;
    get fileId(): number | undefined;
    get iconName(): string | undefined;
    get previewUrl(): string | undefined;
    set previewUrl(previewUrl: string);
    get unbounded(): boolean;
    set unbounded(unbounded: boolean);
    get filename(): string | undefined;
    get fileSize(): number | undefined;
    get mimeType(): string | undefined;
    get data(): Record<string, unknown> | undefined;
    get link(): string | undefined;
    isImage(): boolean;
    uploadFailed(apiError: ApiError): void;
    uploadCompleted(fileId: number, mimeType: string, link: string, data: Record<string, unknown>, hasThumbnails: boolean): void;
    setThumbnails(thumbnails: ThumbnailData[]): void;
    isFailedUpload(): boolean;
    set thumbnail(thumbnail: Thumbnail);
    get thumbnails(): Thumbnail[];
    get ready(): Promise<void>;
    get apiError(): ApiError | undefined;
}
export default WoltlabCoreFileElement;
