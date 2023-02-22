/**
 * This module allows resizing and conversion of HTMLImageElements to Blob and File objects
 *
 * @author  Tim Duesterhus, Maximilian Mader
 * @copyright  2001-2020 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import * as ExifUtil from "./ExifUtil";
declare class ImageResizer {
    maxWidth: number;
    maxHeight: number;
    quality: number;
    fileType: string;
    /**
     * Sets the default maximum width for this instance
     */
    setMaxWidth(value: number): ImageResizer;
    /**
     * Sets the default maximum height for this instance
     */
    setMaxHeight(value: number): ImageResizer;
    /**
     * Sets the default quality for this instance
     */
    setQuality(value: number): ImageResizer;
    /**
     * Sets the default file type for this instance
     */
    setFileType(value: string): ImageResizer;
    /**
     * Converts the given object of exif data and image data into a File.
     */
    saveFile(data: CanvasPlusExif, fileName: string, fileType?: string, quality?: number): Promise<File>;
    /**
     * Loads the given file into an image object and parses Exif information.
     */
    loadFile(file: File): Promise<ImagePlusExif>;
    /**
     * Downscales an image given as File object.
     */
    resize(image: HTMLImageElement, maxWidth?: number, maxHeight?: number, quality?: number, force?: boolean, cancelPromise?: Promise<unknown>): Promise<HTMLCanvasElement | undefined>;
}
interface ImagePlusExif {
    image: HTMLImageElement;
    exif?: ExifUtil.Exif;
}
interface CanvasPlusExif {
    image: HTMLCanvasElement;
    exif?: ExifUtil.Exif;
}
export = ImageResizer;
