/**
 * Initializes modules required for thread view.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import UiReactionHandler from "WoltLabSuite/Core/Ui/Reaction/Handler";
import UiPostInlineEditor from "../Ui/Post/InlineEditor";
import UiPostManager from "../Ui/Post/Manager";
type Module = "clipboard" | "postInlineEditor" | "postLoader" | "postManager" | "postLikeHandler";
type ThreadModules = Record<Module, boolean>;
interface ThreadOptions {
    clipboard: {
        hasMarkedItems: boolean;
    };
    postInlineEditor: {
        canEditLine: boolean;
        quoteManager: typeof window.WCF.Message.Quote.Manager;
    };
}
/**
 * Initializes the thread view.
 */
export declare function init(threadId: number, modules: ThreadModules, options: ThreadOptions): void;
/**
 * Returns the like handler for posts or null if disabled.
 */
export declare function getPostLikeHandler(): UiReactionHandler | null;
/**
 * Returns the InlineEditor instance for posts or null if disabled.
 */
export declare function getPostInlineEditor(): UiPostInlineEditor | null;
/**
 * Returns the Manager instance for posts or null if disabled.
 */
export declare function getPostManager(): UiPostManager | null;
export {};
