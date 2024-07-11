export type CkeditorDropEvent = {
    file: File;
    promise?: Promise<unknown>;
};
export type ThumbnailsGenerated = {
    data: GenerateThumbnailsResponse;
    fileID: number;
};
type ThumbnailData = {
    identifier: string;
    link: string;
};
type GenerateThumbnailsResponse = ThumbnailData[];
export declare function clearPreviousErrors(element: WoltlabCoreFileUploadElement): void;
export declare function setup(): void;
export {};
