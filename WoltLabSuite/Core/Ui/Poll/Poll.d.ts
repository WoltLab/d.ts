/**
 * Handles the poll UI.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2022 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since   5.5
 */
export declare enum PollViews {
    vote = "vote",
    results = "results"
}
export declare class Poll {
    readonly pollId: number;
    private readonly element;
    private readonly voteView?;
    private readonly resultsView?;
    private participants?;
    private readonly voteHandler?;
    private readonly views;
    constructor(pollID: number);
    getElement(): HTMLElement;
    hasView(key: PollViews): boolean;
    getView(key: PollViews): HTMLElement;
    displayView(key: PollViews): void;
    addView(key: PollViews, html: string): void;
    private canViewParticipants;
    private getInnerContainer;
    changeTotalVotes(votes: number, tooltip: string): void;
    get isPublic(): boolean;
    get maxVotes(): number;
    get question(): string;
    get canVote(): boolean;
    set canVote(canVote: boolean);
    get canViewResults(): boolean;
    set canViewResults(canViewResults: boolean);
}
export declare function setupAll(): void;
export default setupAll;
