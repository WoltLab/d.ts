/**
 * Provides the dialog overlay to add a new box.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
export declare class AcpUiBoxAdd {
    #private;
    /**
     * Initializes the box add handler.
     */
    constructor(link: string, supportsI18n: boolean);
    /**
     * Opens the 'Add Box' dialog.
     */
    show(): void;
}
export default AcpUiBoxAdd;
