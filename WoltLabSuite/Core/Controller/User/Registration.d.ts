/**
 * Handles the validation in the registration form.
 *
 * @author    Marcel Werk
 * @copyright 2001-2023 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type UsernameOptions = {
    minlength: number;
    maxlength: number;
};
export declare function setup(username: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement, usernameOptions: UsernameOptions): void;
export {};
