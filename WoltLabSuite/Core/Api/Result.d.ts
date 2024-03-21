/**
 * Represents the result of a request to an API endpoint and provides functions
 * to create the result itself. Unwrapping the result through `.unwrap()` is
 * useful in situations where there should formally never an error.
 *
 * @author Alexander Ebert
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 */
import { StatusNotOk } from "../Ajax/Error";
import { ApiError } from "./Error";
export type ApiResult<T> = {
    ok: true;
    value: T;
    unwrap(): T;
} | {
    ok: false;
    error: ApiError;
    unwrap(): never;
};
export declare function apiResultFromValue<T>(value: T): ApiResult<T>;
export declare function apiResultFromError(error: ApiError): ApiResult<never>;
export declare function apiResultFromStatusNotOk(e: StatusNotOk): Promise<ApiResult<never>>;
