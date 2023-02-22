/**
 * Error types and a global error handler for the `Promise`-based `DboAction` class.
 *
 * @author Alexander Ebert
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.5
 */
export declare class ApiError extends Error {
    name: string;
}
export declare class ConnectionError extends ApiError {
    readonly originalError: unknown;
    constructor(originalError: unknown);
}
export declare class StatusNotOk extends ApiError {
    readonly response: Response;
    constructor(response: Response);
}
export declare class ExpectedJson extends ApiError {
    readonly response: Response;
    constructor(response: Response);
}
export declare class InvalidJson extends ApiError {
    readonly response: Response;
    constructor(response: Response);
}
export declare function registerGlobalRejectionHandler(): void;
