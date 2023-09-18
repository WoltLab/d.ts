/**
 * IP Address handler for reviews.
 *
 * @author  Joshua Ruesweg
 * @copyright 2001-2021 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.2
 */
import { AjaxCallbackObject, RequestOptions } from "WoltLabSuite/Core/Ajax/Data";
import { DialogCallbackObject, DialogSettings } from "WoltLabSuite/Core/Ui/Dialog/Data";
interface AjaxResponseData {
    returnValues: {
        reviewID: number;
        template: string;
    };
}
declare class IpAddressHandler implements AjaxCallbackObject, DialogCallbackObject {
    protected buttons: WeakSet<HTMLLIElement>;
    protected cache: Map<number, string>;
    constructor();
    rebuild(): void;
    protected click(reviewId: number): void;
    _ajaxSuccess(data: AjaxResponseData): void;
    _ajaxSetup(): RequestOptions;
    _dialogSetup(): DialogSettings;
}
export = IpAddressHandler;
