/**
 * Dispatch requests to `wcf\\data\\DatabaseObjectAction` actions with a
 * `Promise`-based API and full IDE support.
 *
 * @author Alexander Ebert
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.5
 */
type Payload = Record<string, unknown>;
export declare class DboAction {
    #private;
    private constructor();
    static prepare(actionName: string, className: string): DboAction;
    getAbortController(): AbortController;
    objectIds(objectIds: number[]): this;
    payload(payload: Payload): this;
    disableLoadingIndicator(): this;
    dispatch(): Promise<unknown>;
}
export default DboAction;
type ReturnValuesUserInputException = {
    errorMessage: string;
    errorType: string;
    fieldName: string;
    realErrorMessage: string;
};
type CallbackHandleValidationErrors = (returnValues: ReturnValuesUserInputException) => boolean;
export declare function handleValidationErrors(error: Error, callback: CallbackHandleValidationErrors): Promise<void>;
