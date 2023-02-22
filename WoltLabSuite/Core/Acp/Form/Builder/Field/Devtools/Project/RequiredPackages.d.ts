/**
 * Manages the packages entered in a devtools project required package form field.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Acp/Form/Builder/Field/Devtools/Project/AbstractPackageList
 * @since 5.2
 */
import AbstractPackageList from "./AbstractPackageList";
import { RequiredPackageData } from "./Data";
declare class RequiredPackages<TPackageData extends RequiredPackageData = RequiredPackageData> extends AbstractPackageList<TPackageData> {
    protected readonly file: HTMLInputElement;
    protected readonly minVersion: HTMLInputElement;
    constructor(formFieldId: string, existingPackages: TPackageData[]);
    protected createSubmitFields(listElement: HTMLLIElement, index: number): void;
    protected emptyInput(): void;
    protected getInputData(): TPackageData;
    protected populateListItem(listItem: HTMLLIElement, packageData: TPackageData): void;
    protected validateInput(): boolean;
}
export = RequiredPackages;
