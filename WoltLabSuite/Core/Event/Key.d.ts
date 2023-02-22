/**
 * Provides reliable checks for common key presses, uses `Event.key` on supported browsers
 * or the deprecated `Event.which`.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Returns true if the pressed key equals 'ArrowDown'.
 *
 * @deprecated 5.4 Use `event.key === "ArrowDown"` instead.
 */
export declare function ArrowDown(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'ArrowLeft'.
 *
 * @deprecated 5.4 Use `event.key === "ArrowLeft"` instead.
 */
export declare function ArrowLeft(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'ArrowRight'.
 *
 * @deprecated 5.4 Use `event.key === "ArrowRight"` instead.
 */
export declare function ArrowRight(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'ArrowUp'.
 *
 * @deprecated 5.4 Use `event.key === "ArrowUp"` instead.
 */
export declare function ArrowUp(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'Comma'.
 *
 * @deprecated 5.4 Use `event.key === ","` instead.
 */
export declare function Comma(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'End'.
 *
 * @deprecated 5.4 Use `event.key === "End"` instead.
 */
export declare function End(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'Enter'.
 *
 * @deprecated 5.4 Use `event.key === "Enter"` instead.
 */
export declare function Enter(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'Escape'.
 *
 * @deprecated 5.4 Use `event.key === "Escape"` instead.
 */
export declare function Escape(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'Home'.
 *
 * @deprecated 5.4 Use `event.key === "Home"` instead.
 */
export declare function Home(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'Space'.
 *
 * @deprecated 5.4 Use `event.key === "Space"` instead.
 */
export declare function Space(event: KeyboardEvent): boolean;
/**
 * Returns true if the pressed key equals 'Tab'.
 *
 * @deprecated 5.4 Use `event.key === "Tab"` instead.
 */
export declare function Tab(event: KeyboardEvent): boolean;
