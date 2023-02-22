/**
 * Allows to be informed when a click event bubbled up to the document's body.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
export declare enum Origin {
    Document = "document",
    DropDown = "dropdown",
    Search = "search"
}
type Callback = (origin?: string | Origin, identifier?: string) => void;
export declare function add(identifier: string, callback: Callback): void;
export declare function remove(identifier: string): void;
export declare function execute(): void;
export declare function execute(origin: string | Origin): void;
export declare function execute(origin: string | Origin, identifier: string): void;
declare const UiCloseOverlay: {
    add: typeof add;
    remove: typeof remove;
    execute: typeof execute;
};
export default UiCloseOverlay;
