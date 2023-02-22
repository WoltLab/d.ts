/**
 * Deletes a given user.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       5.5
 */
import { CallbackSuccess } from "../../../../../Ajax/Data";
export declare class Delete {
    private userIDs;
    private successCallback;
    private deleteMessage;
    constructor(userIDs: number[], successCallback: CallbackSuccess, deleteMessage: string);
    delete(): void;
}
export default Delete;
