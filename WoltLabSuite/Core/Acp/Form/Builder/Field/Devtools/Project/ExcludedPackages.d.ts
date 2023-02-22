/**
 * Manages the packages entered in a devtools project excluded package form field.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Acp/Form/Builder/Field/Devtools/Project/AbstractPackageList
 * @since 5.2
 */
import AbstractPackageList from "./AbstractPackageList";
import { ExcludedPackageData } from "./Data";
declare class ExcludedPackages<TPackageData extends ExcludedPackageData = ExcludedPackageData> extends AbstractPackageList<TPackageData> {
    protected readonly version: HTMLInputElement;
    constructor(formFieldId: string, existingPackages: TPackageData[]);
    protected createSubmitFields(listElement: HTMLLIElement, index: number): void;
    protected emptyInput(): void;
    protected getInputData(): TPackageData;
    protected populateListItem(listItem: HTMLLIElement, packageData: TPackageData): void;
    protected validateInput(): boolean;
    protected validateVersion(versionElement: HTMLInputElement): boolean;
}
export = ExcludedPackages;
