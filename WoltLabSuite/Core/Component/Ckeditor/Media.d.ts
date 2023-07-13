/**
 * Forwards upload requests from the editor to the media system.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
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
