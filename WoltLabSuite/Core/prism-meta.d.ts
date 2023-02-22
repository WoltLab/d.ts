/**
 * Exposes information about the available Prism languages.
 *
 * @author Tim Duesterhus
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
export interface LanguageData {
    title: string;
    file: string;
}
export type LanguageIdentifier = string;
export type PrismMeta = Record<LanguageIdentifier, LanguageData>;
/*!START*/ declare const metadata: PrismMeta; /*!END*/
export default metadata;
