import VideoLinkHandler from "./Ui/Video/Link/Handler";
export interface ImageHandler {
    addImage: (number: any, boolean?: any, object?: any) => void;
    getActiveImage: () => Image;
    getActiveImageDataHandlers: () => ImageDataHandlerBase[];
    getDataHandler: (name: string, type: string) => ImageDataHandlerBase;
    getDataHandlers: () => Map<string, ImageDataHandlerBase>;
    getImageProcessor: () => ImageProcessor;
    getImage: (number: any) => Image | null;
    getImages: () => object;
    getOption: (string: any) => number | string;
    setActiveImage: (Image: any, boolean?: any) => void;
    setFirstImageActive: () => void;
    setUserVideoLinkCount: (number: any) => void;
    videoLinkHandler: VideoLinkHandler;
}
export interface Image {
    get: (string: any) => string;
    getImageID: () => number;
    set: (string: any, mixed: any) => void;
}
export interface ImageDataHandlerBase {
    getData: () => object;
    getImageHandler: () => ImageHandler;
    readData: () => void;
    setImageHandler: (ImageHandler: any) => void;
    setInactive: () => void;
    updateData: () => void;
    validateData: (Image: any) => boolean;
}
export interface VideoThumbnailDataHandler extends ImageDataHandlerBase {
    updateAfterUpload: () => void;
}
export interface ImageProcessor {
    addImage: (number: any, boolean?: any, object?: any) => void;
}
