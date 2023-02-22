/**
 * Provides interface elements to use reactions.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.2
 * @deprecated  6.0 use <woltlab-core-reaction-summary> instead
 */
import { AjaxCallbackSetup, ResponseData } from "../../Ajax/Data";
import { DialogCallbackSetup } from "../Dialog/Data";
import { ReactionStats } from "./Data";
interface CountButtonsOptions {
    summaryListSelector: string;
    containerSelector: string;
    isSingleItem: boolean;
    parameters: {
        data: {
            [key: string]: unknown;
        };
    };
}
interface ElementData {
    element: HTMLElement;
    objectId: number;
    reactButton: null;
    summary: null;
}
interface AjaxResponse extends ResponseData {
    returnValues: {
        template: string;
        title: string;
    };
}
declare class CountButtons {
    protected readonly _containers: Map<string, ElementData>;
    protected _currentObjectId: number;
    protected readonly _objects: Map<number, ElementData[]>;
    protected readonly _objectType: string;
    protected readonly _options: CountButtonsOptions;
    /**
     * Initializes the like handler.
     */
    constructor(objectType: string, opts: Partial<CountButtonsOptions>);
    /**
     * Initialises the containers.
     */
    initContainers(): void;
    /**
     * Update the count buttons with the given data.
     */
    updateCountButtons(objectId: number, data: ReactionStats): void;
    /**
     * Initialized the reaction count buttons.
     */
    protected _initReactionCountButtons(element: HTMLElement, elementData: ElementData): void;
    /**
     * Shows the reaction overly for a specific object.
     */
    protected _showReactionOverlay(objectId: number, event: MouseEvent): void;
    /**
     * Shows a specific page of the current opened reaction overlay.
     */
    protected _showOverlay(): void;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
}
export = CountButtons;
