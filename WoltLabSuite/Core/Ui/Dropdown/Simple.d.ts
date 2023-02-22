/**
 * Simple drop-down implementation.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { NotificationCallback } from "./Data";
declare const UiDropdownSimple: {
    /**
     * Performs initial setup such as setting up dropdowns and binding listeners.
     */
    setup(): void;
    /**
     * Initializes a dropdown.
     */
    init(button: HTMLElement, isLazyInitialization?: boolean | MouseEvent): boolean;
    /**
     * Initializes a remote-controlled dropdown.
     */
    initFragment(dropdown: HTMLElement, menu: HTMLElement): void;
    /**
     * Registers a callback for open/close events.
     */
    registerCallback(containerId: string, callback: NotificationCallback): void;
    /**
     * Returns the requested dropdown wrapper element.
     */
    getDropdown(containerId: string): HTMLElement | undefined;
    /**
     * Returns the requested dropdown menu list element.
     */
    getDropdownMenu(containerId: string): HTMLElement | undefined;
    /**
     * Toggles the requested dropdown between opened and closed.
     */
    toggleDropdown(containerId: string, referenceElement?: HTMLElement, disableAutoFocus?: boolean): void;
    /**
     * Calculates and sets the alignment of given dropdown.
     */
    setAlignment(dropdown: HTMLElement, dropdownMenu: HTMLElement, alternateElement?: HTMLElement): void;
    /**
     * Calculates and sets the alignment of the dropdown identified by given id.
     */
    setAlignmentById(containerId: string): void;
    /**
     * Returns true if target dropdown exists and is open.
     */
    isOpen(containerId: string): boolean;
    /**
     * Opens the dropdown unless it is already open.
     */
    open(containerId: string, disableAutoFocus?: boolean, referenceElement?: HTMLElement): void;
    /**
     * Closes the dropdown identified by given id without notifying callbacks.
     */
    close(containerId: string): void;
    /**
     * Closes all dropdowns.
     */
    closeAll(): void;
    /**
     * Destroys a dropdown identified by given id.
     */
    destroy(containerId: string): boolean;
    _toggle(event: KeyboardEvent | MouseEvent | null, targetId?: string, alternateElement?: HTMLElement, disableAutoFocus?: boolean): boolean;
};
export = UiDropdownSimple;
