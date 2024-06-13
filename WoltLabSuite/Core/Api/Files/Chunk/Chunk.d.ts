import { ApiResult } from "../../Result";
export type ResponseIncomplete = {
    completed: false;
};
export type ResponseCompleted = {
    completed: true;
    generateThumbnails: boolean;
    fileID: number;
    objectTypeID: number | null;
    mimeType: string;
    link: string;
    data: Record<string, unknown>;
};
export type Response = ResponseIncomplete | ResponseCompleted;
export declare function uploadChunk(identifier: string, sequenceNo: number, checksum: string, payload: Blob): Promise<ApiResult<Response>>;
