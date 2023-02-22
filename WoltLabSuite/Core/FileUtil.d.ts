/**
 * Provides helper functions for file handling.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Formats the given filesize.
 */
export declare function formatFilesize(byte: number, precision?: number): string;
/**
 * Returns the icon name for given filename.
 *
 * Note: For any file icon name like `file-word`, only `word`
 * will be returned by this method.
 */
export declare function getIconNameByFilename(filename: string): string;
/**
 * Returns a known file extension including a leading dot or an empty string.
 */
export declare function getExtensionByMimeType(mimetype: string): string;
/**
 * Constructs a File object from a Blob
 *
 * @param       blob            the blob to convert
 * @param       filename        the filename
 * @returns     {File}          the File object
 */
export declare function blobToFile(blob: Blob, filename: string): File;
