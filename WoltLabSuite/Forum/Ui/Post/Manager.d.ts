/**
 * Manager instance for posts.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import UiMessageManager from "WoltLabSuite/Core/Ui/Message/Manager";
type StringableValue = boolean | number | string;
interface AjaxResponse {
    returnValues: {
        postData: Record<string, ArbitraryObject>;
        threadData: Record<string, {
            deleted?: string;
        }>;
    };
}
declare class UiPostManager extends UiMessageManager {
    private readonly threadId;
    private threadUpdateHandler?;
    constructor(threadId: number);
    setThreadUpdateHandler(threadUpdateHandler: any): void;
    update(objectId: string, actionName: string, parameters: {
        enableNote?: string;
    }): void;
    /**
     * @see WoltLabSuite/Core/Ui/Message/Manager._updateState()
     */
    protected _updateState(element: HTMLElement, propertyName: string, propertyValue: StringableValue, propertyValueBoolean: boolean): void;
    _ajaxSuccess(data: AjaxResponse): void;
}
export = UiPostManager;
