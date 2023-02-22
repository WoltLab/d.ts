/**
 * Basic update handler for threads used in thread view.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.5
 */
import UpdateHandler from "./UpdateHandler";
import UiPostManager from "../../Ui/Post/Manager";
export declare class ThreadUpdateHandler extends UpdateHandler {
    protected boardID: number;
    protected postHandler?: UiPostManager;
    constructor(boardID: number);
    setPostHandler(postHandler: UiPostManager): void;
    update(threadId: number, data: {
        [key: string]: string;
    }): void;
    protected close(threadId: number): void;
    protected open(threadId: number): void;
    protected delete(threadId: number, _boardLink: string): void;
    protected disable(threadId: number): void;
    protected enable(threadId: number, ignorePost?: boolean): void;
    protected moved(_threadId: number): void;
    protected showMoveNotice(_threadId: number): void;
    protected sticky(threadId: number): void;
    protected scrape(threadId: number): void;
    protected trash(threadId: number): void;
    protected restore(threadId: number, ignorePosts?: boolean): void;
    protected done(threadId: number): void;
    protected undone(threadId: number): void;
    protected updateTitle(_threadId: number, _title: string): void;
}
export default ThreadUpdateHandler;
