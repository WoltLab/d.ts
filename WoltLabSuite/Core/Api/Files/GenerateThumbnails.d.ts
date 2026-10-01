import { ApiResult } from "../Result";
type Thumbnail = {
    identifier: string;
    link: string;
};
type Response = {
    filename: string;
    fileSize: number;
    mimeType: string;
    thumbnails: Thumbnail[];
};
export declare function generateThumbnails(fileID: number, uploaderToken?: string): Promise<ApiResult<Response>>;
export {};
