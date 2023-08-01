/**
 * Versatile popover manager.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackObject, AjaxCallbackSetup, CallbackFailure, CallbackSuccess, RequestPayload } from "../Ajax/Data";
type CallbackLoad = (objectId: number | string, popover: ControllerPopover, element: HTMLElement) => void;
interface PopoverOptions {
    attributeName?: string;
    className: string;
    dboAction: string;
    identifier: string;
    legacy?: boolean;
    loadCallback?: CallbackLoad;
}
declare class ControllerPopover implements AjaxCallbackObject {
    private activeId;
    private readonly cache;
    private readonly elements;
    private readonly handlers;
    private hoverId;
    private readonly popover;
    private readonly popoverContent;
    private suspended;
    private timerEnter?;
    private timerLeave?;
    /**
     * Builds popover DOM elements and binds event listeners.
     */
    constructor();
    /**
     * Initializes a popover handler.
     *
     * Usage:
     *
     * ControllerPopover.init({
     * 	attributeName: 'data-object-id',
     * 	className: 'fooLink',
     * 	identifier: 'com.example.bar.foo',
     * 	loadCallback: (objectId, popover) => {
     * 		// request data for object id (e.g. via WoltLabSuite/Core/Ajax)
     *
     * 		// then call this to set the content
     * 		popover.setContent('com.example.bar.foo', objectId, htmlTemplateString);
     * 	}
     * });
     */
    init(options: PopoverOptions): void;
    /**
     * Initializes a popover handler.
     */
    private initHandler;
    /**
     * Binds event listeners for popover-enabled elements.
     */
    private initElements;
    /**
     * Sets the content for given identifier and object id.
     */
    setContent(identifier: string, objectId: number | string, content: string): void;
    resetCache(identifier: string, objectId: number): void;
    /**
     * Handles the mouse start hovering the popover-enabled element.
     */
    private mouseEnter;
    /**
     * Handles the mouse leaving the popover-enabled element or the popover itself.
     */
    private mouseLeave;
    /**
     * Handles the mouse start hovering the popover element.
     */
    private popoverMouseEnter;
    /**
     * Shows the popover and loads content on-the-fly.
     */
    private show;
    /**
     * Hides the popover element.
     */
    private hidePopover;
    /**
     * Clears popover content by moving it back into the cache.
     */
    private clearContent;
    /**
     * Rebuilds the popover.
     */
    private rebuild;
    _ajaxSuccess(): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    /**
     * Sends an AJAX requests to the server, simple wrapper to reuse the request object.
     */
    ajaxApi(data: RequestPayload, success: CallbackSuccess, failure?: CallbackFailure): void;
}
/**
 * Initializes a popover handler.
 *
 * Usage:
 *
 * ControllerPopover.init({
 * 	attributeName: 'data-object-id',
 * 	className: 'fooLink',
 * 	identifier: 'com.example.bar.foo',
 * 	loadCallback: function(objectId, popover) {
 * 		// request data for object id (e.g. via WoltLabSuite/Core/Ajax)
 *
 * 		// then call this to set the content
 * 		popover.setContent('com.example.bar.foo', objectId, htmlTemplateString);
 * 	}
 * });
 */
export declare function init(options: PopoverOptions): void;
/**
 * Sets the content for given identifier and object id.
 */
export declare function setContent(identifier: string, objectId: number, content: string): void;
/**
 * Sends an AJAX requests to the server, simple wrapper to reuse the request object.
 */
export declare function ajaxApi(data: RequestPayload, success: CallbackSuccess, failure: CallbackFailure): void;
/**
 * Resets the cached data for an object.
 */
export declare function resetCache(identifier: string, objectId: number): void;
export {};
