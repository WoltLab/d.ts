/**
 * The `<woltlab-core-comment>` element represents a comment in the comment list.
 *
 * @author Marcel Werk
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
export declare class WoltlabCoreCommentElement extends HTMLParsedElement {
    #private;
    parsedCallback(): void;
    get commentId(): number;
    get menu(): HTMLElement | undefined;
}
export default WoltlabCoreCommentElement;
