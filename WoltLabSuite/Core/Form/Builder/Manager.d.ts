/**
 * Manager for registered Ajax forms and its fields that can be used to retrieve the current data
 * of the registered forms.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import Field from "./Field/Field";
import { FormBuilderData } from "./Data";
type FieldId = string;
/**
 * Returns a promise returning the data of the form with the given id.
 */
export declare function getData(formId: FieldId): Promise<FormBuilderData>;
/**
 * Returns the registered form field with given.
 *
 * @since 5.2.3
 */
export declare function getField(formId: FieldId, fieldId: FieldId): Field;
/**
 * Returns the registered form with given id.
 */
export declare function getForm(formId: FieldId): HTMLElement;
/**
 * Returns `true` if a field with the given id has been registered for the form with the given id
 * and `false` otherwise.
 */
export declare function hasField(formId: FieldId, fieldId: FieldId): boolean;
/**
 * Returns `true` if a form with the given id has been registered and `false` otherwise.
 */
export declare function hasForm(formId: FieldId): boolean;
/**
 * Registers the given field for the form with the given id.
 */
export declare function registerField(formId: FieldId, field: Field): void;
/**
 * Registers the form with the given id.
 */
export declare function registerForm(formId: FieldId): void;
/**
 * Unregisters the form with the given id.
 */
export declare function unregisterForm(formId: FieldId): void;
export {};
