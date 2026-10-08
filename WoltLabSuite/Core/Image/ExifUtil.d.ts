/**
 * Provides helper functions for Exif metadata handling.
 *
 * @author	Tim Duesterhus, Maximilian Mader
 * @copyright	2001-2020 WoltLab GmbH
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
/**
 * Extracts the EXIF / XMP sections of a JPEG blob.
 */
export declare function getExifBytesFromJpeg(blob: Blob | File): Promise<Exif>;
export declare function getExifBytesFromWebP(blob: Blob | File): Promise<Exif | null>;
/**
 * Returns the TIFF structure of the first Exif APP1 segment in the output of
 * `getExifBytesFromJpeg()`, which may contain XMP segments as well.
 */
export declare function getTiffFromJpegSegments(segments: Exif): Exif | null;
/**
 * Returns the EXIF orientation (1–8) of a JPEG blob, or `undefined` if the
 * blob is not a JPEG, has no orientation or the metadata is malformed.
 */
export declare function getOrientationFromJpeg(blob: Blob | File): Promise<number | undefined>;
/**
 * Removes all EXIF and XMP sections of a JPEG blob.
 */
export declare function removeExifData(blob: Blob | File): Promise<Blob>;
/**
 * Overrides the APP1 (EXIF / XMP) sections of a JPEG blob with the given data.
 */
export declare function setExifData(blob: Blob, exif: Exif): Promise<Blob>;
export type Exif = Uint8Array;
