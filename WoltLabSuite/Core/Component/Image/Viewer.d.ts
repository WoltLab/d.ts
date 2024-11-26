import { Fancybox } from "@fancyapps/ui";
import { userSlideType } from "@fancyapps/ui/types/Carousel/types";
export declare function setup(): void;
export declare function setupLegacy(): void;
export declare function createFancybox(userSlides?: Array<userSlideType>): Promise<Fancybox>;
export declare function getLocalization(): Promise<Record<string, string>>;
