/**
 * Abstract implementation of the JavaScript component of a form field handling a list of packages.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import { PackageData } from "./Data";
declare abstract class AbstractPackageList<TPackageData extends PackageData = PackageData> {
    protected readonly addButton: HTMLAnchorElement;
    protected readonly form: HTMLFormElement;
    protected readonly formFieldId: string;
    protected readonly packageList: HTMLOListElement;
    protected readonly packageIdentifier: HTMLInputElement;
    protected static readonly packageIdentifierRegExp: RegExp;
    protected static readonly versionRegExp: RegExp;
    constructor(formFieldId: string, existingPackages: TPackageData[]);
    /**
     * Adds a package to the package list as a consequence of the given event.
     *
     * If the package data is invalid, an error message is shown and no package is added.
     */
    protected addPackage(event: Event): void;
    /**
     * Adds a package to the package list using the given package data.
     */
    protected addPackageByData(packageData: TPackageData): void;
    /**
     * Creates the hidden fields when the form is submitted.
     */
    protected createSubmitFields(listElement: HTMLLIElement, index: number): void;
    /**
     * Empties the input fields.
     */
    protected emptyInput(): void;
    /**
     * Returns the current data of the input fields to add a new package.
     */
    protected getInputData(): TPackageData;
    /**
     * Adds a package to the package list after pressing ENTER in a text field.
     */
    protected keyPress(event: KeyboardEvent): void;
    /**
     * Adds all necessary package-relavant data to the given list item.
     */
    protected populateListItem(listItem: HTMLLIElement, packageData: TPackageData): void;
    /**
     * Removes a package by clicking on its delete button.
     */
    protected removePackage(event: Event): void;
    /**
     * Adds all necessary (hidden) form fields to the form when submitting the form.
     */
    protected submit(): void;
    /**
     * Returns `true` if the currently entered package data is valid. Otherwise `false` is returned and relevant error
     * messages are shown.
     */
    protected validateInput(): boolean;
    /**
     * Returns `true` if the currently entered package identifier is valid. Otherwise `false` is returned and an error
     * message is shown.
     */
    protected validatePackageIdentifier(): boolean;
    /**
     * Returns `true` if the given version is valid. Otherwise `false` is returned and an error message is shown.
     */
    protected validateVersion(versionElement: HTMLInputElement): boolean;
}
export = AbstractPackageList;
