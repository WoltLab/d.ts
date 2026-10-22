/**
 * Inserts media files into a CodeMirror editor.
 *
 * @author Matthias Schmidt, Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare class AcpUiCodeMirrorMedia {
    protected readonly element: HTMLElement;
    constructor(elementId: string);
    protected insert(): Promise<void>;
}
export = AcpUiCodeMirrorMedia;
