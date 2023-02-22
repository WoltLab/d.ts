/**
 * Provides an item list for users and groups.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2020 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { CallbackChange, CallbackSetupValues, ItemData } from "../ItemList";
interface ItemListUserOptions {
    callbackChange?: CallbackChange;
    callbackSetupValues?: CallbackSetupValues;
    csvPerType?: boolean;
    excludedSearchValues?: string[];
    includeUserGroups?: boolean;
    maxItems?: number;
    restrictUserGroupIDs?: number[];
}
/**
 * Initializes user suggestion support for an element.
 *
 * @param  {string}  elementId  input element id
 * @param  {object}  options    option list
 */
export declare function init(elementId: string, options: ItemListUserOptions): void;
/**
 * @see  WoltLabSuite/Core/Ui/ItemList::getValues()
 */
export declare function getValues(elementId: string): ItemData[];
export {};
