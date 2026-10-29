/**
 * Shows the poll manager in a dialog to select a standalone poll, which can be
 * created or edited from within the dialog.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
import { PollData } from "WoltLabSuite/Core/Api/Polls/GetPoll";
/**
 * Opens the poll manager and resolves with the selected poll, `undefined` is
 * returned if the dialog was closed.
 */
export declare function openPollManager(): Promise<PollData | undefined>;
