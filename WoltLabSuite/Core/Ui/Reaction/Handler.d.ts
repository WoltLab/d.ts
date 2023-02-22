/**
 * Provides interface elements to use reactions.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.2
 */
import { AjaxCallbackSetup } from "../../Ajax/Data";
import { Reaction, ReactionStats } from "./Data";
import { FocusTrap } from "focus-trap";
interface ReactionHandlerOptions {
    buttonSelector: string;
    containerSelector: string;
    isButtonGroupNavigation: boolean;
    isSingleItem: boolean;
    parameters: {
        data: {
            [key: string]: unknown;
        };
        reactionTypeID?: number;
    };
}
interface ElementData {
    reactButton: HTMLElement | null;
    objectId: number;
    element: HTMLElement;
}
interface AjaxResponse {
    returnValues: {
        objectID: number | string;
        objectType: string;
        reactions: ReactionStats;
        reactionTypeID: number;
        reputationCount: number;
    };
}
declare class UiReactionHandler {
    protected activeButton?: HTMLElement | undefined;
    protected readonly _cache: Map<string, unknown>;
    protected focusTrap?: FocusTrap;
    protected readonly _containers: Map<string, ElementData>;
    protected readonly _options: ReactionHandlerOptions;
    protected readonly _objects: Map<number, ElementData[]>;
    protected readonly _objectType: string;
    protected _popoverCurrentObjectId: number;
    protected _popover: HTMLElement | null;
    protected _popoverContent: HTMLElement | null;
    /**
     * Initializes the reaction handler.
     */
    constructor(objectType: string, opts: Partial<ReactionHandlerOptions>);
    /**
     * Initializes all applicable react buttons with the given selector.
     */
    initReactButtons(): void;
    /**
     * Initializes a specific react button.
     */
    _initReactButton(element: HTMLElement, elementData: ElementData): void;
    protected _updateReactButton(objectID: number, reactionTypeID: number): void;
    protected _markReactionAsActive(): void;
    protected _scrollReactionIntoView(scrollableContainer: HTMLElement, reactionTypeButton: HTMLElement): void;
    /**
     * Toggle the visibility of the react popover.
     */
    protected _toggleReactPopover(objectId: number, element: HTMLElement, event: MouseEvent | null): void;
    /**
     * Opens the react popover for a specific react button.
     */
    protected _openReactPopover(objectId: number, element: HTMLElement): void;
    /**
     * Returns the react popover element.
     */
    protected _getPopover(): HTMLElement;
    protected keydown(event: KeyboardEvent): void;
    protected _rebuildOverflowIndicator(): void;
    /**
     * Sort the reaction types by the showOrder field.
     */
    protected _getSortedReactionTypes(): Reaction[];
    /**
     * Closes the react popover.
     */
    protected _closePopover(): void;
    /**
     * React with the given reactionTypeId on an object.
     */
    protected _react(reactionTypeId: number): void;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    private getFocusTrap;
}
export = UiReactionHandler;
