/**
 * Handles the mark all as read button for the forum.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import { AjaxCallbackObject, RequestOptions } from "WoltLabSuite/Core/Ajax/Data";
export type BoardMarkAllAsReadCallback = () => void;
export declare class BoardMarkAllAsRead implements AjaxCallbackObject {
    protected readonly callback?: BoardMarkAllAsReadCallback;
    constructor(markAsReadButton: HTMLElement, callback?: BoardMarkAllAsReadCallback);
    _ajaxSetup(): RequestOptions;
    _ajaxSuccess(): void;
    protected click(event: Event): void;
}
export default BoardMarkAllAsRead;
