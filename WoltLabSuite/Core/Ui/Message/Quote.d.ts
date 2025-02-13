/**
 * @woltlabExcludeBundle tiny
 *
 * @deprecated 6.2 use `WoltLabSuite/Core/Component/Quote/Message` instead
 */
export interface WCFMessageQuoteManager {
    supportPaste: () => boolean;
    updateCount: (number: any, object: any) => void;
}
export declare class UiMessageQuote {
    /**
     * Initializes the quote handler for given object type.
     */
    constructor(_quoteManager: WCFMessageQuoteManager, className: string, objectType: string, containerSelector: string, messageBodySelector: string, _messageContentSelector: string, _supportDirectInsert: boolean);
}
export default UiMessageQuote;
