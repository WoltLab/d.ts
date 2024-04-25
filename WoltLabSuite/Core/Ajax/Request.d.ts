/**
 * Versatile AJAX request handling.
 *
 * In case you want to issue JSONP requests, please use `AjaxJsonp` instead.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { RequestOptions, RequestData, AjaxResponseException } from "./Data";
/**
 * @constructor
 */
declare class AjaxRequest {
    private readonly _options;
    private readonly _data;
    private _xhr?;
    constructor(options: RequestOptions);
    /**
     * Dispatches a request, optionally aborting a currently active request.
     */
    sendRequest(abortPrevious?: boolean): void;
    /**
     * Aborts a previous request.
     */
    abortPrevious(): void;
    /**
     * Sets a specific option.
     */
    setOption(key: string, value: unknown): void;
    /**
     * Returns an option by key or undefined.
     */
    getOption(key: string): unknown | null;
    /**
     * Sets request data while honoring pinned data from setup callback.
     */
    setData(data: RequestData): void;
    /**
     * Handles a successful request.
     */
    _success(xhr: XMLHttpRequest, options: RequestOptions): void;
    /**
     * Handles failed requests, this can be both a successful request with
     * a non-success status code or an entirely failed request.
     */
    _failure(xhr: XMLHttpRequest, options: RequestOptions): void;
    /**
     * Returns the inner HTML for an error/exception display.
     */
    getErrorHtml(data: AjaxResponseException | null, xhr: XMLHttpRequest): string | HTMLIFrameElement | null;
    /**
     * Finalizes a request.
     */
    _finalize(xhr: XMLHttpRequest, options: RequestOptions): void;
    private getContentType;
}
export = AjaxRequest;
