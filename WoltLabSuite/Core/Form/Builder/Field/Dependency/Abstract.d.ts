/**
 * Abstract implementation of a form field dependency.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
declare abstract class FormBuilderFormFieldDependency {
    protected _dependentElement: HTMLElement;
    protected _field: HTMLElement;
    protected _fields: HTMLElement[];
    protected _noField?: HTMLInputElement;
    constructor(dependentElementId: string, fieldId: string);
    /**
     * Returns `true` if the dependency is met.
     */
    checkDependency(): boolean;
    /**
     * Return the node whose availability depends on the value of a field.
     */
    getDependentNode(): HTMLElement;
    /**
     * Returns the field the availability of the element dependents on.
     */
    getField(): HTMLElement;
    /**
     * Returns all fields requiring event listeners for this dependency to be properly resolved.
     */
    getFields(): HTMLElement[];
    /**
     * Initializes the new dependency object.
     */
    protected init(dependentElementId: string, fieldId: string): void;
}
export = FormBuilderFormFieldDependency;
