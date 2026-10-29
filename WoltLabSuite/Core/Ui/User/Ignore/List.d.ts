/**
 * Shows the ignore dialogs when editing users on the page listing ignored users.
 *
 * @author  Matthias Schmidt, Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 * @deprecated 6.3 Use `wcf\system\listView\user\IgnoredUserListView` instead.
 */
export declare class UiUserIgnoreList {
    constructor();
    protected openDialog(button: HTMLElement): Promise<void>;
}
export default UiUserIgnoreList;
