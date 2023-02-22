import { Media, MediaInsertType } from "../../../Media/Data";
declare class AcpUiCodeMirrorMedia {
    protected readonly element: HTMLElement;
    constructor(elementId: string);
    protected insert(mediaList: Map<number, Media>, insertType: MediaInsertType, thumbnailSize?: string): void;
}
export = AcpUiCodeMirrorMedia;
