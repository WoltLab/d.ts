/**
 * @woltlabExcludeBundle all
 */
export interface UploadOptions {
    action: string;
    className: string;
    multiple: boolean;
    acceptableFiles: string[] | null;
    name: string;
    singleFileRequests: boolean;
    url: string;
}
export type FileElements = HTMLElement[];
export type FileLikeObject = {
    name: string;
};
export type FileCollection = File[] | FileLikeObject[] | FileList;
export type UploadId = number | number[] | null;
