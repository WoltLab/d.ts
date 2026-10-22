/**
 * Forwards upload requests from the editor to the media system.
 *
 * @author Alexander Ebert, Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
/**
 * @deprecated 6.3 The media files are inserted by the media manager.
 */
type MediaData = {
    mediaId: number;
    mediaSize: string;
    url: string;
};
export type UploadMediaEventPayload = {
    abortController?: AbortController;
    file: File;
    promise?: Promise<MediaData>;
};
export declare function setup(element: HTMLElement): void;
export {};
