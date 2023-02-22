/**
 * Shows similar threads when creating a new thread.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.5
 */
import { AjaxCallbackObject, AjaxCallbackSetup } from "WoltLabSuite/Core/Ajax/Data";
type AjaxReturnValus = {
    returnValues: {
        results: number;
        template: string;
    };
};
export declare class SimilarThreads implements AjaxCallbackObject {
    private element;
    private boardId;
    constructor(element: HTMLInputElement, boardId: number);
    private search;
    private removeResults;
    _ajaxSuccess(data: AjaxReturnValus): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export default SimilarThreads;
