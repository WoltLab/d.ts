/**
 * Generic interface for drag and Drop file uploads.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { OnDropPayload, OnGlobalDropPayload } from "./Redactor/DragAndDrop";
interface DragAndDropOptions {
    element: HTMLElement;
    elementId: string;
    onDrop: (data: OnDropPayload) => void;
    onGlobalDrop: (data: OnGlobalDropPayload) => void;
}
export declare function register(options: DragAndDropOptions): void;
export {};
