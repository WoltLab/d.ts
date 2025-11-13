/**
 * Provides a selection dialog for FontAwesome icons with filter capabilities.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
type CallbackSelect = (icon: string, forceSolid: boolean) => void;
/**
 * Shows the FontAwesome selection dialog, supplied callback will be
 * invoked with the selection icon's name as the only argument.
 */
export declare function open(callback: CallbackSelect): void;
export {};
