/**
 * Handles quotes for CKEditor 5 message fields.
 *
 * @author Olaf Braun, Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
declare class QuoteList {
    #private;
    constructor(editorId: string, editor: HTMLElement, container: HTMLElement);
    get editorId(): string;
    renderQuotes(): void;
}
export declare function getQuoteList(editorId: string): QuoteList | undefined;
export declare function refreshQuoteLists(): void;
export declare function setup(editorId: string, containerId?: string): void;
export {};
