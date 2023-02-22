/**
 * Manages the packages entered in a devtools project optional package form field.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see module:WoltLabSuite/Core/Acp/Form/Builder/Field/Devtools/Project/AbstractPackageList
 * @since 5.2
 */
import AbstractPackageList from "./AbstractPackageList";
import { PackageData } from "./Data";
declare class OptionalPackages extends AbstractPackageList {
    protected populateListItem(listItem: HTMLLIElement, packageData: PackageData): void;
}
export = OptionalPackages;
