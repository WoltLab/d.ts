/**
 * Requests render a full quote of a message.
 *
 * @author Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
type Response = {
    objectID: number;
    author: string;
    link: string;
    avatar: string;
    message: string | null;
    rawMessage: string | null;
};
export declare function renderQuote(objectType: string, objectID: number, isFullQuote: boolean): Promise<Response>;
export {};
