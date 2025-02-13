/**
 * Provides a specialized tab menu used for message options, integrates better into the editor.
 *
 * @author Marcel Werk
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 * @woltlabExcludeBundle tiny
 */
declare class TabMenu {
    #private;
    constructor(tabs: HTMLElement[], tabContainers: HTMLElement[], activeTabName: string, wysiwygContainerId: string, collapsible?: boolean);
    setActiveTab(tabName: string): void;
    showTab(tabName: string): void;
    hideTab(tabName: string): void;
    isHiddenTab(tabName: string): boolean;
    setTabCounter(tabName: string, value: number): void;
    get activeTabName(): string;
}
export declare function getTabMenu(identifier: string): TabMenu | undefined;
export declare function setup(): void;
export {};
