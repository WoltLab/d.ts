/**
 * Simple tab menu implementation with a straight-forward logic.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare class TabMenuSimple {
    private readonly container;
    private readonly containers;
    private isLegacy;
    private store;
    private readonly tabs;
    constructor(container: HTMLElement);
    /**
     * Validates the properties and DOM structure of this container.
     *
     * Expected DOM:
     * <div class="tabMenuContainer">
     *  <nav>
     *    <ul>
     *      <li data-name="foo"><a>bar</a></li>
     *    </ul>
     *  </nav>
     *
     *  <div id="foo">baz</div>
     * </div>
     */
    validate(): boolean;
    /**
     * Initializes this tab menu.
     */
    init(): HTMLElement | null;
    /**
     * Selects a tab.
     *
     * @param  {?(string|int)}         name    tab name or sequence no
     * @param  {Element=}    tab    tab element
     * @param  {boolean=}    disableEvent  suppress event handling
     */
    select(name: number | string | null, tab?: HTMLLIElement, disableEvent?: boolean): void;
    /**
     * Selects the first visible tab of the tab menu and return `true`. If there is no
     * visible tab, `false` is returned.
     *
     * The visibility of a tab is determined by calling `elIsHidden` with the tab menu
     * item as the parameter.
     */
    selectFirstVisible(): boolean;
    /**
     * Returns true if this tab menu has a tab with provided name.
     */
    hasTab(name: string): boolean;
    /**
     * Handles clicks on a tab.
     */
    _onClick(event: MouseEvent | TouchEvent): void;
    /**
     * Returns the tab name.
     */
    _getTabName(tab: HTMLLIElement): string | null;
    /**
     * Returns the currently active tab.
     */
    getActiveTab(): HTMLLIElement;
    /**
     * Returns the list of registered content containers.
     */
    getContainers(): Map<string, HTMLElement>;
    /**
     * Returns the list of registered tabs.
     */
    getTabs(): Map<string, HTMLLIElement>;
    static getIdentifierFromHash(): string;
}
export = TabMenuSimple;
