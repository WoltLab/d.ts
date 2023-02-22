/**
 * Manages the share providers shown in the share dialogs.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2021 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type Identifier = string;
type Label = string;
type Icon = string;
export type ShareProvider = [Identifier, Label, Icon];
export declare function addShareProvider(shareProvider: ShareProvider): void;
export declare function addShareProviders(shareProviders: ShareProvider[]): void;
export declare function getShareProviders(): ReadonlySet<ShareProvider>;
export {};
