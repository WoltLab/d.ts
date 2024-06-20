/**
 * Handles the add comment feature in the comment list.
 *
 * @author Marcel Werk
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
type CallbackInsertComment = (commentId: number) => void;
export declare class CommentAdd {
    #private;
    constructor(container: HTMLElement, objectTypeId: number, objectId: number, callback: CallbackInsertComment);
}
export {};
