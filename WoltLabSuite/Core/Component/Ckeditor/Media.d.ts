type MediaData = {
    mediaId: number;
    mediaSize: string;
    url: string;
};
export type UploadMediaEventPayload = {
    abortController?: AbortController;
    file: File;
    promise?: Promise<MediaData>;
};
export declare function setup(element: HTMLElement): void;
export {};
