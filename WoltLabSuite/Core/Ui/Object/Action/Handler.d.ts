/**
 * Default handler to react to a specific object action.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { ClipboardData, ObjectActionData } from "../Data";
export type ObjectAction = (data: ObjectActionData) => void;
export default class UiObjectActionHandler {
    protected readonly objectAction: ObjectAction;
    constructor(actionName: string, clipboardActionNames: string[], objectAction: ObjectAction);
    protected handleClipboardAction(data: ClipboardData): void;
    protected handleObjectAction(data: ObjectActionData): void;
}
