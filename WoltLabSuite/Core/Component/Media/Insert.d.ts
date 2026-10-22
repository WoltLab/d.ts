/**
 * Helper functions to insert media files into editors.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import type { MediaData, MediaSize } from "WoltLabSuite/Core/Api/Media/GetMedia";
import type { CKEditor } from "WoltLabSuite/Core/Component/Ckeditor";
export type InsertOptions = {
    size: MediaSize;
    gallery: boolean;
};
/**
 * Asks the user for the size in which images are inserted. Resolves with
 * `original` without asking if there is no image or no image offers a
 * thumbnail and with `undefined` if the user canceled the dialog.
 */
export declare function chooseImageSize(media: MediaData[]): Promise<MediaSize | undefined>;
/**
 * Asks the user for the size in which images are inserted and whether
 * multiple images are inserted as a gallery. Resolves without asking if
 * there is nothing to choose and with `undefined` if the user canceled the
 * dialog.
 */
export declare function chooseInsertOptions(media: MediaData[], allowGallery?: boolean): Promise<InsertOptions | undefined>;
/**
 * Returns the largest size of the image that does not exceed the requested size.
 */
export declare function getEffectiveSize(media: MediaData, size: MediaSize): MediaSize;
export declare function insertIntoCkeditor(ckeditor: CKEditor, media: MediaData[], size: MediaSize, gallery?: boolean): void;
