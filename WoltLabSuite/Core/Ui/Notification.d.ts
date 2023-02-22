/**
 * Simple notification overlay.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type Callback = () => void;
/**
 * Displays a notification.
 */
export declare function show(message?: string, callback?: Callback | null, cssClassName?: string): void;
export {};
