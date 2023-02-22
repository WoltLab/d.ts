/**
 * Wrapper around Twitter's createTweet API.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2020 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import "https://platform.twitter.com/widgets.js";
/**
 * Embed the tweet identified by the given tweetId into the given container.
 *
 * @param {HTMLElement} container
 * @param {string} tweetId
 * @param {boolean} removeChildren Whether to remove existing children of the given container after embedding the tweet.
 * @return {HTMLElement} The Tweet element created by Twitter.
 */
export declare function embedTweet(container: HTMLElement, tweetId: string, removeChildren?: boolean): Promise<HTMLElement>;
/**
 * Embeds tweets into all elements with a data-wsc-twitter-tweet attribute, removing
 * existing children.
 */
export declare function embedAll(): void;
