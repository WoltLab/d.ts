/**
 * Provides the program logic for list views.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
export declare class ListView {
    #private;
    constructor(viewId: string, viewClassName: string, pageNo: number, baseUrl: string | undefined, sortField: string | undefined, sortOrder: string | undefined, defaultSortField: string | undefined, defaultSortOrder: string | undefined, bulkInteractionProviderClassName: string, listViewParameters?: Map<string, string>);
}
