/**
 * IP Address handler for posts.
 *
 * @author  Joshua Ruesweg
 * @copyright 2001-2021 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.5
 */
import { AjaxCallbackObject, RequestOptions } from "WoltLabSuite/Core/Ajax/Data";
import { DialogCallbackObject, DialogSettings } from "WoltLabSuite/Core/Ui/Dialog/Data";
interface AjaxResponseData {
    returnValues: {
        postID: number;
        template: string;
    };
}
export declare class IpAddressHandler implements AjaxCallbackObject, DialogCallbackObject {
    protected buttons: WeakSet<HTMLElement>;
    protected cache: Map<number, string>;
    constructor();
    rebuild(): void;
    protected click(event: Event | null, postId: number): void;
    _ajaxSuccess(data: AjaxResponseData): void;
    _ajaxSetup(): RequestOptions;
    _dialogSetup(): DialogSettings;
}
export default IpAddressHandler;
