/**
 * User editing capabilities for the user list.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since       3.1
 */
declare class AcpUiUserEditor {
    /**
     * Initializes the edit dropdown for each user.
     */
    constructor();
    /**
     * Initializes the edit dropdown for a user.
     */
    private initUser;
    /**
     * Rebuilds the dropdown by adding wrapper links for legacy buttons,
     * that will eventually receive the click event.
     */
    private rebuild;
    private refreshUsers;
}
export = AcpUiUserEditor;
