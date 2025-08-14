/**
 * Gets the items for the rendering of a list view.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
type Response = {
    template: string;
    pages: number;
    totalItems: number;
    filterLabels: ArrayLike<string>;
};
export declare function getItems(listViewClass: string, pageNo: number, sortField?: string, sortOrder?: string, filters?: Map<string, string>, listViewParameters?: Map<string, string>): Promise<Response>;
export {};
