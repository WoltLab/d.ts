/**
 * Provides the media search for the media manager.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import MediaManager from "./Base";
import { AjaxCallbackObject, AjaxCallbackSetup } from "../../Ajax/Data";
import { Media } from "../Data";
interface AjaxResponseData {
    returnValues: {
        media?: Media;
        pageCount?: number;
        pageNo?: number;
        template?: string;
    };
}
declare class MediaManagerSearch implements AjaxCallbackObject {
    protected readonly _cancelButton: HTMLSpanElement;
    protected readonly _input: HTMLInputElement;
    protected readonly _mediaManager: MediaManager;
    protected readonly _searchContainer: HTMLDivElement;
    protected _searchMode: boolean;
    constructor(mediaManager: MediaManager);
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _ajaxSuccess(data: AjaxResponseData): void;
    /**
     * Cancels the search after clicking on the cancel search button.
     */
    protected _cancelSearch(): void;
    /**
     * Hides the search string threshold error.
     */
    protected _hideStringThresholdError(): void;
    /**
     * Handles the `[ENTER]` key to submit the form.
     */
    protected _keyPress(event: KeyboardEvent): void;
    /**
     * Shows the search string threshold error.
     */
    protected _showStringThresholdError(): void;
    /**
     * Hides the media search.
     */
    hideSearch(): void;
    /**
     * Resets the media search.
     */
    resetSearch(): void;
    /**
     * Shows the media search.
     */
    showSearch(): void;
    /**
     * Sends an AJAX request to fetch search results.
     */
    search(pageNo?: number): void;
}
export = MediaManagerSearch;
