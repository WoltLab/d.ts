/**
 * Data handler for WebAuthn form fields for use within AJAX based forms.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since  5.5
 */
import Field from "WoltLabSuite/Core/Form/Builder/Field/Field";
import { FormBuilderData } from "WoltLabSuite/Core/Form/Builder/Data";
export declare class FormField extends Field {
    protected _getData(): FormBuilderData;
}
export default FormField;
