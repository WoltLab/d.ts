/**
 * Provides the program logic for the extended search form.
 *
 * @author  Marcel Werk
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
export declare class UiSearchExtended {
    private readonly form;
    private readonly queryInput;
    private readonly typeInput;
    private readonly delimiter;
    private readonly filtersContainer;
    private searchID;
    private pages;
    private activePage;
    private lastSearchRequest;
    private lastSearchResultRequest;
    private searchParameters;
    constructor();
    private initEventListener;
    private initKeywordSuggestions;
    private changeType;
    private search;
    private updateQueryString;
    private getFormData;
    private initQueryString;
    private initPagination;
    private changePage;
    private removeSearchResults;
    private showSearchResults;
}
export default UiSearchExtended;
