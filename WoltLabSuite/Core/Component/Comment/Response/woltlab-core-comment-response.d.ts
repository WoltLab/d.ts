/**
 * The `<woltlab-core-comment-response>` element represents a response in the comment list.
 *
 * @author Marcel Werk
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
export declare class WoltlabCoreCommentResponseElement extends HTMLParsedElement {
    #private;
    parsedCallback(): void;
    get responseId(): number;
    get menu(): HTMLElement | undefined;
}
export default WoltlabCoreCommentResponseElement;
