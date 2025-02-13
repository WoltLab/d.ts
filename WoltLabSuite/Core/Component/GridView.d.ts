/**
 * Provides the program logic for grid views.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
export declare class GridView {
    #private;
    constructor(gridId: string, gridClassName: string, pageNo: number, baseUrl: string | undefined, sortField: string | undefined, sortOrder: string | undefined, bulkInteractionProviderClassName: string, gridViewParameters?: Map<string, string>);
}
