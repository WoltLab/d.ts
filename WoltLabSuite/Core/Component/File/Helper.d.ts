import WoltlabCoreFileElement from "WoltLabSuite/Core/Component/File/woltlab-core-file";
import "WoltLabSuite/Core/Component/File/woltlab-core-file";
export declare function trackUploadProgress(element: HTMLElement, file: WoltlabCoreFileElement): void;
export declare function removeUploadProgress(element: HTMLElement): void;
export declare function fileInitializationFailed(element: HTMLElement, file: WoltlabCoreFileElement, reason: unknown): void;
export declare function insertFileInformation(container: HTMLElement, file: WoltlabCoreFileElement): void;
