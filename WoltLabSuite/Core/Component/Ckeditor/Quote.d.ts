/**
 * Inserts quotes into the editor.
 *
 * @author Alexander Ebert, Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
export type InsertQuoteEventPayload = {
    author: string;
    content: string;
    isText: boolean;
    link: string;
    uuid?: string;
};
export declare function setup(element: HTMLElement): void;
