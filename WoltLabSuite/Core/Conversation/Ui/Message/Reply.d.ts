/**
 * Handles the quick reply for conversations.
 *
 * @author Tim Duesterhus
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import UiMessageReply from "WoltLabSuite/Core/Ui/Message/Reply";
export declare class Reply extends UiMessageReply {
    _insertMessage(...args: Parameters<UiMessageReply["_insertMessage"]>): ReturnType<UiMessageReply["_insertMessage"]>;
}
export default Reply;
