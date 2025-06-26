/**
 * Stores the quote data.
 *
 * @author Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
interface Message {
    objectID: number;
    time: string;
    title: string;
    link: string;
    authorID: number | null;
    author: string;
    avatar: string;
}
interface Quote {
    message: string;
    rawMessage?: string;
}
export declare function saveQuote(objectType: string, objectId: number, objectClassName: string, message: string): Promise<Message & Quote & {
    uuid: string;
}>;
export declare function saveFullQuote(objectType: string, objectClassName: string, objectId: number): Promise<Message & Quote & {
    uuid: string;
}>;
export declare function getQuotes(): Map<string, Map<string, Quote>>;
export declare function getMessage(objectType: string, objectId?: number): Message | undefined;
export declare function removeQuotes(uuids: string[]): void;
export declare function removeQuote(key: string, uuid: string): void;
export declare function markQuoteAsUsed(editorId: string, uuid: string): void;
export declare function getUsedQuotes(editorId: string): Set<string>;
export declare function clearQuotesForEditor(editorId: string): void;
export declare function isFullQuoted(objectType: string, objectId: number): boolean;
export declare function getFullQuoteUuid(objectType: string, objectId: number): string | undefined;
export declare function getKey(objectType: string, objectId: number): string;
export {};
