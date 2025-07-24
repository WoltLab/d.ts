/**
 * Provides helper functions to decode a WebP image.
 *
 * @author    Alexander Ebert
 * @copyright 2001-2025 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.2
 * @woltlabExcludeBundle tiny
 */
import type { Exif } from "./ExifUtil";
declare const enum ChunkHeader {
    ALPH = "ALPH",
    ANIM = "ANIM",
    ANMF = "ANMF",
    EXIF = "EXIF",
    ICCP = "ICCP",
    RIFF = "RIFF",
    VP8 = "VP8 ",
    VP8L = "VP8L",
    VP8X = "VP8X",
    WEBP = "WEBP",
    XMP = "XMP "
}
type Offset = number;
type ChunkSize = number;
type Chunk = [ChunkHeader | number, Offset, ChunkSize];
declare class WebP {
    #private;
    constructor(buffer: ArrayBuffer, width: number, height: number, chunks: Chunk[]);
    getExifData(): Exif | null;
    get height(): number;
    get width(): number;
}
export declare function parseWebPFromBuffer(buffer: ArrayBuffer): WebP | undefined;
export {};
