/**
 * Shows the media manager in a dialog to insert or select media files.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import { MediaData } from "WoltLabSuite/Core/Api/Media/GetMedia";
export type MediaManagerMode = "editor" | "select";
export type MediaManagerOptions = {
    mode: MediaManagerMode;
    imagesOnly?: boolean;
    title?: string;
    /**
     * File that is uploaded right away, the resulting media file is returned
     * once the upload has been completed.
     */
    file?: File;
};
/**
 * Opens the media manager and resolves with the media files that the user has
 * inserted or selected, an empty list is returned if the dialog was closed.
 */
export declare function openMediaManager(options: MediaManagerOptions): Promise<MediaData[]>;
