/**
 * Provides helper methods to add and remove format elements. These methods should in
 * theory work with non-editor elements but has not been tested and any usage outside
 * the editor is not recommended.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
/**
 * Applies format elements to the selected text.
 */
export declare function format(editorElement: HTMLElement, property: string, value: string): void;
/**
 * Removes a format element from the current selection.
 *
 * The removal uses a few techniques to remove the target element(s) without harming
 * nesting nor any other formatting present. The steps taken are described below:
 *
 * 1. The browser will wrap all parts of the selection into <strike> tags
 *
 *      This isn't the most efficient way to isolate each selected node, but is the
 *      most reliable way to accomplish this because the browser will insert them
 *      exactly where the range spans without harming the node nesting.
 *
 *      Basically it is a trade-off between efficiency and reliability, the performance
 *      is still excellent but could be better at the expense of an increased complexity,
 *      which simply doesn't exactly pay off.
 *
 * 2. Iterate over each inserted <strike> and isolate all relevant ancestors
 *
 *      Format tags can appear both as a child of the <strike> as well as once or multiple
 *      times as an ancestor.
 *
 *      It uses ranges to select the contents before the <strike> element up to the start
 *      of the last matching ancestor and cuts out the nodes. The browser will ensure that
 *      the resulting fragment will include all relevant ancestors that were present before.
 *
 *      The example below will use the fictional <bar> elements as the tag to remove, the
 *      pipe ("|") is used to denote the outer node boundaries.
 *
 *      Before:
 *      |<bar>This is <foo>a <strike>simple <bar>example</bar></strike></foo></bar>|
 *      After:
 *      |<bar>This is <foo>a </foo></bar>|<bar><foo>simple <bar>example</bar></strike></foo></bar>|
 *
 *      As a result we can now remove <bar> both inside the <strike> element as well as
 *      the outer <bar> without harming the effect of <bar> for the preceding siblings.
 *
 *      This process is repeated for siblings appearing after the <strike> element too, it
 *      works as described above but flipped. This is an expensive operation and will only
 *      take place if there are any matching ancestors that need to be considered.
 *
 *      Inspired by http://stackoverflow.com/a/12899461
 *
 * 3. Remove all matching ancestors, child elements and last the <strike> element itself
 *
 *      Depending on the amount of nested matching nodes, this process will move a lot of
 *      nodes around. Removing the <bar> element will require all its child nodes to be moved
 *      in front of <bar>, they will actually become a sibling of <bar>. Afterwards the
 *      (now empty) <bar> element can be safely removed without losing any nodes.
 *
 *
 * One last hint: This method will not check if the selection at some point contains at
 * least one target element, it assumes that the user will not take any action that invokes
 * this method for no reason (unless they want to waste CPU cycles, in that case they're
 * welcome).
 *
 * This is especially important for developers as this method shouldn't be called for
 * no good reason. Even though it is super fast, it still comes with expensive DOM operations
 * and especially low-end devices (such as cheap smartphones) might not exactly like executing
 * this method on large documents.
 *
 * If you fell the need to invoke this method anyway, go ahead. I'm a comment, not a cop.
 */
export declare function removeFormat(editorElement: HTMLElement, property: string): void;
