/**
 * Stores the vote of the active user in a poll.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
export type VoteResponse = {
    template: string;
};
export declare function vote(pollId: number, optionIDs: number[]): Promise<VoteResponse>;
