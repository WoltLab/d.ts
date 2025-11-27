/**
 * Gets a single row for rendering in a grid view.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
type Response = {
    template: string;
};
export declare function getRow(gridViewClass: string, objectId: string | number, filters?: Map<string, string>, gridViewParameters?: Map<string, string>): Promise<Response>;
export {};
