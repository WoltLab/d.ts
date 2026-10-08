/**
 * Opens and closes drawers, the modal panels the page header uses on small screens.
 *
 * Openers reference a drawer through `data-drawer-target="<id>"`, elements with
 * `data-drawer-close` inside a drawer close it. The state is exposed as `data-open`
 * on the drawer and as `aria-expanded` on its openers, the visibility is up to CSS.
 *
 * @author    Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.3
 */
export type OpenOptions = {
    /** Receives the focus when the drawer closes. */
    opener?: HTMLElement;
    /** Passed as `detail` of the `drawer:open` event. */
    detail?: unknown;
};
export declare function isOpen(id: string): boolean;
export declare function open(id: string, options?: OpenOptions): void;
export declare function close(id: string): void;
export declare function setup(): void;
