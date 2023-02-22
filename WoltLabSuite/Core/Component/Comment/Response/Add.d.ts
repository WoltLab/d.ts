/**
 * Handles the reply feature in the comment list.
 *
 * @author Marcel Werk
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
type CallbackInsertResponse = (commentId: number, template: string) => void;
export declare class CommentResponseAdd {
    #private;
    readonly container: HTMLElement;
    constructor(container: HTMLElement, callback: CallbackInsertResponse);
    show(commentId: number): void;
}
export {};
