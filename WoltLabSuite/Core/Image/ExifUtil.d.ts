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
/**
 * Removes all EXIF and XMP sections of a JPEG blob.
 */
export declare function removeExifData(blob: Blob | File): Promise<Blob>;
/**
 * Overrides the APP1 (EXIF / XMP) sections of a JPEG blob with the given data.
 */
export declare function setExifData(blob: Blob, exif: Exif): Promise<Blob>;
export type Exif = Uint8Array;
