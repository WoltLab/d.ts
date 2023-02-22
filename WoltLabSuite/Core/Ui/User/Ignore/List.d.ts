/**
 * Shows the ignore dialogs when editing users on the page listing ignored users.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import FormBuilderDialog from "../../../Form/Builder/Dialog";
export declare class UiUserIgnoreList {
    protected dialogs: Map<number, FormBuilderDialog>;
    constructor();
    protected openDialog(event: Event): void;
}
export default UiUserIgnoreList;
