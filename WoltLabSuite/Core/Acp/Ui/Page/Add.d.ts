/**
 * Provides the dialog overlay to add a new page.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
export declare class AcpUiPageAdd {
    #private;
    constructor(link: string, supportsI18n: boolean);
    /**
     * Opens the 'Add Page' dialog.
     */
    show(): void;
}
export default AcpUiPageAdd;
