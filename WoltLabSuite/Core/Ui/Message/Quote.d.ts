/**
 * @woltlabExcludeBundle tiny
 *
 * @deprecated 6.2 use `WoltLabSuite/Core/Component/Quote/Message` instead
 */
/**
 * @deprecated 6.2 Use `registerContainer()` without the className parameter.
 */
export declare class UiMessageQuote {
    /**
     * Initializes the quote handler for given object type.
     */
    constructor(_quoteManager: typeof window.WCF.Message.Quote.Manager, className: string, objectType: string, containerSelector: string, messageBodySelector: string, _messageContentSelector: string, _supportDirectInsert: boolean);
}
export default UiMessageQuote;
