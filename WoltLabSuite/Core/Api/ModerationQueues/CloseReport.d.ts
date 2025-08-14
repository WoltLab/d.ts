/**
 * Closes a report by marking it as done without further processing.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
export declare function closeReport(queueId: number, markAsJustified: boolean): Promise<[]>;
