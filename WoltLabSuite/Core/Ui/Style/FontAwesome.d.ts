/**
 * Provides a selection dialog for FontAwesome icons with filter capabilities.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
type CallbackSelect = (icon: string, forceSolid: boolean, value?: string, previewHtml?: string) => void;
/**
 * Shows the FontAwesome selection dialog, supplied callback will be
 * invoked with the selected icon's native data. Replacement
 * implementations may pass an explicit stored value and preview html
 * for non-native icons.
 */
export declare function open(callback: CallbackSelect): void;
export {};
