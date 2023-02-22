/**
 * Provides a simple toggle to show or hide certain elements when the
 * target element is checked.
 *
 * Be aware that the list of elements to show or hide accepts selectors
 * which will be passed to `elBySel()`, causing only the first matched
 * element to be used. If you require a whole list of elements identified
 * by a single selector to be handled, please provide the actual list of
 * elements instead.
 *
 * Usage:
 *
 * new UiToggleInput('input[name="foo"][value="bar"]', {
 *      show: ['#showThisContainer', '.makeThisVisibleToo'],
 *      hide: ['.notRelevantStuff', document.getElementById('fooBar')]
 * });
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare class UiToggleInput {
    private readonly element;
    private readonly hide;
    private readonly show;
    /**
     * Initializes a new input toggle.
     */
    constructor(elementSelector: string, options: Partial<ToggleOptions>);
    private getElements;
    /**
     * Triggered when element is checked / unchecked.
     */
    private change;
    /**
     * Loops through the target elements and shows / hides them.
     */
    private updateVisibility;
}
export = UiToggleInput;
type ElementOrSelector = Element | string;
interface ToggleOptions {
    show: ElementOrSelector[];
    hide: ElementOrSelector[];
}
