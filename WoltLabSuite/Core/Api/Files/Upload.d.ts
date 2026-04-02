import { ApiResult } from "../Result";
import type { Exif } from "WoltLabSuite/Core/Image/ExifUtil";
type Response = {
    identifier: string;
    numberOfChunks: number;
};
export declare function upload(filename: string, fileSize: number, fileHash: string, objectType: string, context: string, exifBytes?: Exif | null, ignoreExifRotation?: boolean): Promise<ApiResult<Response>>;
export {};
