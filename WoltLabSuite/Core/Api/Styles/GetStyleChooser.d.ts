/**
 * Change the style of the current user.
 *
 * @author Olaf Braun
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type Response = {
    template: string;
};
export declare function getStyleChooser(): Promise<Response>;
export {};
