/**
 * Forwards upload requests from the editor to the attachment system.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
type AttachmentData = {
    attachmentId: number;
    url: string;
};
export type UploadAttachmentEventPayload = {
    abortController?: AbortController;
    file: File;
    promise?: Promise<AttachmentData>;
};
export type InsertAttachmentPayload = {
    attachmentId: number;
    url: string;
};
export type RemoveAttachmentPayload = {
    attachmentId: number;
};
export declare function setup(element: HTMLElement): void;
export {};
