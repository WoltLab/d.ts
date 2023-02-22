/**
 * Provides suggestions for users, optionally supporting groups.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @see  module:WoltLabSuite/Core/Ui/Search/Input
 */
import { SearchInputOptions } from "../../Search/Data";
import UiSearchInput from "../../Search/Input";
declare class UiUserSearchInput extends UiSearchInput {
    constructor(element: HTMLInputElement, options: UserSearchInputOptions);
    protected createListItem(item: UserListItemData): HTMLLIElement;
}
export = UiUserSearchInput;
type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : never;
interface UserListItemData extends FirstArgument<UiSearchInput["createListItem"]> {
    type: "user" | "group";
    icon: string;
}
interface UserSearchInputOptions extends SearchInputOptions {
    includeUserGroups?: boolean;
}
