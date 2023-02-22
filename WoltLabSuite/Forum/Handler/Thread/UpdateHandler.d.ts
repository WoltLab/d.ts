/**
 * Basic update handler for threads.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.5
 */
export declare abstract class UpdateHandler {
    protected threads: Map<number, HTMLElement>;
    constructor();
    /** @deprecated */
    setMarkAsDoneHandler(): void;
    update(threadId: number, data: {
        [key: string]: string;
    }, reloadClipboard: boolean): void;
    protected updateProperty(threadId: number, property: string, value: unknown): void;
    private handleCustomEvent;
    getValue(threadId: number, property: string): boolean;
    protected abstract delete(threadId: number, boardLink: string): void;
    protected abstract close(threadId: number): void;
    protected abstract open(threadId: number): void;
    protected abstract trash(threadId: number): void;
    protected abstract restore(threadId: number): void;
    protected abstract disable(threadId: number): void;
    protected abstract enable(threadId: number): void;
    protected abstract done(threadId: number): void;
    protected abstract undone(threadId: number): void;
    protected abstract sticky(threadId: number): void;
    protected abstract scrape(threadId: number): void;
    protected abstract moved(threadId: number): void;
    protected abstract showMoveNotice(threadId: number): void;
    protected abstract updateTitle(threadId: number, title: string): void;
    protected getThread(threadId: number): HTMLElement;
}
export default UpdateHandler;
