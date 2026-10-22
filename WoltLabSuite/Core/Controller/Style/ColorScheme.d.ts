/**
 * Applies the preferred color scheme and keeps `system` in sync with the device.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
export type ColorSchemePreference = "dark" | "light" | "system";
/**
 * Returns the color scheme a guest has picked, members store it in their account instead.
 *
 * @since 6.3
 */
export declare function getStoredColorScheme(): ColorSchemePreference | undefined;
/**
 * @since 6.3
 */
export declare function storeColorScheme(colorScheme: ColorSchemePreference): void;
/**
 * @since 6.3
 */
export declare function setColorScheme(colorScheme: ColorSchemePreference): void;
export declare function setup(): void;
