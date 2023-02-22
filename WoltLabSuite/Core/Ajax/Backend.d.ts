/**
 * Promise-based API to interact with PSR-15 controllers.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
declare const enum RequestType {
    GET = 0,
    POST = 1
}
type Payload = FormData | Record<string, unknown>;
declare class SetupRequest {
    private readonly url;
    constructor(url: string);
    get(): GetRequest;
    post(payload?: Payload): BackendRequest;
}
declare class BackendRequest {
    #private;
    constructor(url: string, type: RequestType, payload?: Payload);
    getAbortController(): AbortController;
    disableLoadingIndicator(): this;
    protected allowCaching(): this;
    fetchAsJson(): Promise<unknown>;
    fetchAsResponse(): Promise<Response | undefined>;
}
declare class GetRequest extends BackendRequest {
    allowCaching(): this;
}
export declare function prepareRequest(url: string): SetupRequest;
export {};
