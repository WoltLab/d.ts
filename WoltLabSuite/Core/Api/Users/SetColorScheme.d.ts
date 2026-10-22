/**
 * Sets the preferred color scheme of the active user.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
import type { ColorSchemePreference } from "../../Controller/Style/ColorScheme";
export declare function setColorScheme(colorScheme: ColorSchemePreference): Promise<[]>;
