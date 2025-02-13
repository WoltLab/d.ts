/**
 * @woltlabExcludeBundle tiny
 */
import { AjaxCallbackObject, AjaxCallbackSetup } from "../../Ajax/Data";
interface AjaxResponse {
    actionName: string;
    returnValues: {
        count?: number;
        fullQuoteMessageIDs?: unknown;
        fullQuoteObjectIDs?: unknown;
        renderedQuote?: string;
    };
}
export interface WCFMessageQuoteManager {
    supportPaste: () => boolean;
    updateCount: (number: any, object: any) => void;
}
export declare class UiMessageQuote implements AjaxCallbackObject {
    private activeMessageId;
    private readonly className;
    private containers;
    private containerSelector;
    private readonly copyQuote;
    private message;
    private readonly messageBodySelector;
    private objectId;
    private objectType;
    private timerSelectionChange?;
    private isMouseDown;
    private readonly quoteManager;
    /**
     * Initializes the quote handler for given object type.
     */
    constructor(quoteManager: WCFMessageQuoteManager, className: string, objectType: string, containerSelector: string, messageBodySelector: string, messageContentSelector: string, supportDirectInsert: boolean);
    /**
     * Initializes message containers.
     */
    private initContainers;
    private onSelectionchange;
    private onMouseDown;
    /**
     * Returns the text of a node and its children.
     */
    private getNodeText;
    private onMouseUp;
    private normalizeTextForComparison;
    private getElementBoundaries;
    private initCopyQuote;
    private getSelectedText;
    private saveFullQuote;
    private saveQuote;
    private saveAndInsertQuote;
    _ajaxSuccess(data: AjaxResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    /**
     * Updates the full quote data for all matching objects.
     */
    updateFullQuoteObjectIDs(objectIds: number[]): void;
}
export default UiMessageQuote;
