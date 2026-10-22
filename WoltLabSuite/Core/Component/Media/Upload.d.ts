/**
 * Notifies the caller once media uploads have been completed.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
export type MediaUploadCallbacks = {
    /**
     * Is called for every media file that has been created by an upload.
     */
    uploadCompleted?: (mediaId: number) => void;
    /**
     * Is called once there are no more pending uploads with the ids of the
     * media files that have been created by these uploads.
     */
    allUploadsCompleted?: (mediaIds: number[]) => void;
};
/**
 * Opens the dialog to edit the media file with the given id. The endpoint
 * contains `%s` as the placeholder for the id.
 */
export declare function editMedia(endpoint: string, mediaId: number): Promise<boolean>;
export declare function setupMediaUpload(uploadButton: HTMLElement, callbacks: MediaUploadCallbacks): void;
