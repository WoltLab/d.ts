/**
 * Handles AJAX requests.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import AjaxRequest from "./Ajax/Request";
import { AjaxCallbackObject, CallbackSuccess, CallbackFailure, RequestData, RequestOptions } from "./Ajax/Data";
import DboAction from "./Ajax/DboAction";
/**
 * Shorthand function to perform a request against the WCF-API with overrides
 * for success and failure callbacks.
 */
export declare function api(callbackObject: AjaxCallbackObject, data?: RequestData, success?: CallbackSuccess, failure?: CallbackFailure): AjaxRequest;
/**
 * Shorthand function to perform a single request against the WCF-API.
 *
 * Please use `Ajax.api` if you're about to repeatedly send requests because this
 * method will spawn an new and rather expensive `AjaxRequest` with each call.
 */
export declare function apiOnce(options: RequestOptions): void;
/**
 * Returns the request object used for an earlier call to `api()`.
 */
export declare function getRequestObject(callbackObject: AjaxCallbackObject): AjaxRequest;
/**
 * Prepares a new requests to a `wcf\\data\\DatabaseObjectAction` action.
 *
 * @since 5.5
 */
export declare function dboAction(actionName: string, className: string): DboAction;
export { handleValidationErrors } from "./Ajax/DboAction";
