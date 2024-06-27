/**
 * @author      Olaf Braun
 * @copyright   2001-2024 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 * @woltlabExcludeBundle tiny
 */
export declare function serviceWorkerSupported(): boolean;
export declare function setup(publicKey: string, serviceWorkerJsUrl: string, registerUrl: string): void;
export declare function registerServiceWorker(): void;
