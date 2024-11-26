/**
 * Provides the interface logic to add and edit menu items.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
export declare class AcpUiMenuItemHandler {
    #private;
    /**
     * Initializes the interface logic.
     */
    constructor(fieldPrefix: string, handlers: Map<number, boolean>, identifiers: Map<number, string>);
    /**
     * Opens the handler lookup dialog.
     */
    private openSearch;
}
