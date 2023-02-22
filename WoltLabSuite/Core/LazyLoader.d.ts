/**
 * Efficient lazy loader that executes a callback once a selector matches
 * for the first time and the document has finished loading.
 *
 * Designed for actions that do not require eager execution, such as
 * binding specific event listeners on runtime. It should not be used for
 * components that alter the visible UI to prevent layout shifts.
 *
 * Based on the work of GitHub‘s Catalyst library (MIT license).
 * See https://github.com/github/catalyst/blob/c7983581adffd88f059e3c70674350b4fea4ee47/src/lazy-define.ts
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type CallbackWhenSeen = () => void;
export declare function whenFirstSeen(selector: string, callback: CallbackWhenSeen): void;
export {};
