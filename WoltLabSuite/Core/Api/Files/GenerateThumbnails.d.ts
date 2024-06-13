import { ApiResult } from "../Result";
type Thumbnail = {
    identifier: string;
    link: string;
};
type Response = Thumbnail[];
export declare function generateThumbnails(fileID: number): Promise<ApiResult<Response>>;
export {};
