/**
 * Customizable popover overlays that show additional information after a short
 * delay.
 *
 * @author Alexander Ebert
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.1
 */
type Configuration = {
    endpoint: string;
    identifier: string;
    selector: string;
};
export declare function setupFor(configuration: Configuration): void;
export declare function resetCache(identifier: string, objectId: number): void;
export {};
