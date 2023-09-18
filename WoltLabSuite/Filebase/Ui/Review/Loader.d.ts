/**
 * Enable editor for reviews.
 *
 * @author  Joshua Ruesweg
 * @copyright 2001-2021 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.2
 */
import { AjaxCallbackObject, DatabaseObjectActionResponse, RequestOptions } from "WoltLabSuite/Core/Ajax/Data";
import VersionFilter from "./VersionFilter";
import SortHandler from "./SortHandler";
declare class Loader implements AjaxCallbackObject {
    protected button?: HTMLButtonElement;
    protected readonly hasFiles: boolean;
    protected loadedObjects: number;
    protected loadMoreLi?: HTMLLIElement;
    protected loadingLi?: HTMLLIElement;
    protected readonly objectList: HTMLUListElement;
    protected permalinkReview?: HTMLLIElement;
    protected scrollTarget?: HTMLSpanElement;
    protected readonly sortHandler: SortHandler;
    protected readonly versionFilter?: VersionFilter;
    constructor(hasFiles: boolean);
    /**
     * Creates the show more button and appends it to the list.
     */
    protected createButton(invisible: boolean): void;
    /**
     * Handles a click on a load more button.
     */
    protected click(event?: Event): void;
    refresh(): void;
    scrollTo(element: HTMLLIElement, highlight: boolean): void;
    protected loadReview(reviewId: number): void;
    _ajaxSuccess(data: AjaxResponseData): void;
    _ajaxSetup(): RequestOptions;
}
interface AjaxResponseData extends DatabaseObjectActionResponse {
    returnValues: {
        loadedObjects: number;
        template: string;
    };
}
export = Loader;
