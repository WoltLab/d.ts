import { ApiResult } from "../Result";
type Response = {
    identifier: string;
    numberOfChunks: number;
};
export declare function upload(filename: string, fileSize: number, fileHash: string, objectType: string, context: string): Promise<ApiResult<Response>>;
export {};
