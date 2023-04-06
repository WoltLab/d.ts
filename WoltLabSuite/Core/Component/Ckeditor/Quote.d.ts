/**
 * Inserts quotes into the editor.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
export type InsertQuoteEventPayload = {
    author: string;
    content: string;
    isText: boolean;
    link: string;
};
export declare function setup(element: HTMLElement): void;
