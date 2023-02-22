/**
 * Object-based user list.
 *
 * @author Marcel Werk
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
export declare class UserList {
    #private;
    constructor(options: AjaxRequestOptions, dialogTitle: string);
    open(): void;
}
type AjaxRequestOptions = {
    className: string;
    parameters: {
        [key: string]: any;
    };
};
export {};
