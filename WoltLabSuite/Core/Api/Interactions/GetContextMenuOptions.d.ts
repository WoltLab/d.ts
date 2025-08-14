/**
 * Gets the context menu options for an interaction button.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
type Response = {
    template: string;
};
export declare function getContextMenuOptions(providerClassName: string, objectId: number | string): Promise<Response>;
export {};
