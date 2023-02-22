/**
 * Helper module to expose a fluent API to create
 * dialogs through `dialogFactory()`.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import DialogControls from "./Controls";
import FormBuilderSetup from "../FormBuilder/Setup";
export declare class DialogSetup {
    fromElement(element: HTMLElement | DocumentFragment): DialogControls;
    fromId(id: string): DialogControls;
    fromHtml(html: string): DialogControls;
    usingFormBuilder(): FormBuilderSetup;
    withoutContent(): DialogControls;
}
export default DialogSetup;
