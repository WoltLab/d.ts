/**
 * Gets the rows for the rendering of a grid view.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
type Response = {
    template: string;
    pages: number;
    totalRows: number;
    filterLabels: ArrayLike<string>;
};
export declare function getRows(gridViewClass: string, pageNo: number, sortField?: string, sortOrder?: string, filters?: Map<string, string>, gridViewParameters?: Map<string, string>): Promise<Response>;
export {};
