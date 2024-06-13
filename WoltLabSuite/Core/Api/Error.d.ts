/**
 * Represents an error from a failed request to an API endpoint.
 *
 * @author Alexander Ebert
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 */
type RequestFailureType = "api_error" | "invalid_request_error";
export declare class ApiError {
    readonly type: RequestFailureType;
    readonly code: string;
    readonly message: string;
    readonly param: string;
    readonly statusCode: number;
    constructor(type: RequestFailureType, code: string, message: string, param: string, statusCode: number);
    getValidationError(): ValidationError | undefined;
}
export declare class ValidationError {
    readonly code: string;
    readonly message: string;
    readonly param: string;
    constructor(code: string, message: string, param: string);
}
export {};
