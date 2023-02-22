/**
 * Basic update handler for threads used in board view.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.5
 */
import UpdateHandler from "./UpdateHandler";
export declare class BoardUpdateHandler extends UpdateHandler {
    protected close(threadId: number): void;
    protected open(threadId: number): void;
    protected delete(threadId: number, _boardLink: string): void;
    protected disable(threadId: number): void;
    protected enable(threadId: number): void;
    protected done(threadId: number): void;
    protected undone(threadId: number): void;
    protected moved(_threadId: number): void;
    protected trash(threadId: number): void;
    protected restore(threadId: number): void;
    protected showMoveNotice(threadId: number): void;
    protected sticky(_threadId: number): void;
    protected scrape(_threadId: number): void;
    protected updateTitle(_threadId: number, _title: string): void;
}
export default BoardUpdateHandler;
