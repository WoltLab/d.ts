/**
 * Cleans up the markup of legacy messages.
 *
 * Messages created in the previous editor used empty paragraphs to create empty
 * lines. In addition, Firefox kept trailing <br> in lines with content, which
 * causes issues with CKEditor.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
export declare function normalizeLegacyMessage(element: HTMLElement): void;
